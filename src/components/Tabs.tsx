import {
  useLayoutEffect,
  useRef,
  useState,
  type KeyboardEvent,
  type ReactNode,
} from "react";
import { icons, type IconName } from "../icons";

export type TabItem = {
  id: string;
  label: string;
  icon: IconName;
  panel: ReactNode;
};

type TabsProps = {
  label: string;
  tabs: TabItem[];
};

export function Tabs({ label, tabs }: TabsProps) {
  const [active, setActive] = useState(tabs[0]?.id ?? "");
  const [focused, setFocused] = useState(tabs[0]?.id ?? "");
  const buttons = useRef<Array<HTMLButtonElement | null>>([]);
  const tabList = useRef<HTMLDivElement>(null);
  const [indicatorTransform, setIndicatorTransform] = useState(
    "translate(0px, 0px) scaleX(0)",
  );
  const [indicatorPositioned, setIndicatorPositioned] = useState(false);
  const [indicatorReady, setIndicatorReady] = useState(false);
  const current = tabs.find((tab) => tab.id === active) ?? tabs[0];
  const selectedIndex = tabs.findIndex((tab) => tab.id === current?.id);

  useLayoutEffect(() => {
    function updateIndicatorPosition() {
      const list = tabList.current;
      const selectedButton = buttons.current[selectedIndex];
      if (!list || !selectedButton || list.clientWidth === 0) return;

      const listBounds = list.getBoundingClientRect();
      const buttonBounds = selectedButton.getBoundingClientRect();
      const x = buttonBounds.left - listBounds.left;
      const y = buttonBounds.bottom - listBounds.top - 2;
      const scale = buttonBounds.width / list.clientWidth;

      setIndicatorTransform(
        `translate(${x}px, ${y}px) scaleX(${scale})`,
      );
      setIndicatorPositioned(true);
    }

    updateIndicatorPosition();
    const frame = window.requestAnimationFrame(() => setIndicatorReady(true));
    const observer = new ResizeObserver(updateIndicatorPosition);
    if (tabList.current) observer.observe(tabList.current);
    buttons.current.forEach((button) => {
      if (button) observer.observe(button);
    });

    return () => {
      window.cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, [selectedIndex]);

  function moveFocus(index: number) {
    const next = (index + tabs.length) % tabs.length;
    const tab = tabs[next];
    if (!tab) return;
    setFocused(tab.id);
    buttons.current[next]?.focus();
  }

  function onKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      moveFocus(index + 1);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      moveFocus(index - 1);
    } else if (event.key === "Home") {
      event.preventDefault();
      moveFocus(0);
    } else if (event.key === "End") {
      event.preventDefault();
      moveFocus(tabs.length - 1);
    }
  }

  if (!current) return null;

  return (
    <div className="mt-4">
      <div
        ref={tabList}
        role="tablist"
        aria-label={label}
        aria-orientation="horizontal"
        className="relative flex flex-wrap gap-x-5 border-b border-line"
      >
        {tabs.map((tab, index) => {
          const Icon = icons[tab.icon];
          const selected = tab.id === active;
          return (
            <button
              key={tab.id}
              ref={(node) => {
                buttons.current[index] = node;
              }}
              type="button"
              role="tab"
              id={`tab-${tab.id}`}
              aria-selected={selected}
              aria-controls={`panel-${tab.id}`}
              tabIndex={tab.id === focused ? 0 : -1}
              className="tab inline-flex items-center gap-1.5 py-2 text-[14px]"
              onClick={() => {
                setActive(tab.id);
                setFocused(tab.id);
              }}
              onFocus={() => setFocused(tab.id)}
              onKeyDown={(event) => onKeyDown(event, index)}
            >
              <Icon className="size-4" strokeWidth={1.5} aria-hidden="true" />
              {tab.label}
            </button>
          );
        })}
        <span
          aria-hidden="true"
          className="tab-indicator"
          data-positioned={indicatorPositioned}
          data-ready={indicatorReady}
          style={{ transform: indicatorTransform }}
        />
      </div>
      <div
        key={current.id}
        role="tabpanel"
        id={`panel-${current.id}`}
        aria-labelledby={`tab-${current.id}`}
        tabIndex={0}
        className="fade-in pt-4"
      >
        {current.panel}
      </div>
    </div>
  );
}
