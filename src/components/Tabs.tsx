import { useRef, useState, type KeyboardEvent, type ReactNode } from "react";
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
  const current = tabs.find((tab) => tab.id === active) ?? tabs[0];

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
        role="tablist"
        aria-label={label}
        aria-orientation="horizontal"
        className="flex flex-wrap gap-x-5 border-b border-line"
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
              className={`-mb-px inline-flex items-center gap-1.5 border-b-2 py-2 text-[14px] transition-colors duration-[120ms] ${
                selected
                  ? "border-ink font-medium text-ink"
                  : "border-transparent text-muted hover:text-ink"
              }`}
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
      </div>
      <div
        key={current.id}
        role="tabpanel"
        id={`panel-${current.id}`}
        aria-labelledby={`tab-${current.id}`}
        tabIndex={0}
        className="fade-in pt-4 outline-none"
      >
        {current.panel}
      </div>
    </div>
  );
}
