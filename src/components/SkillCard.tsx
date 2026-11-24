import type { Skill } from "../content";
import { icons } from "../icons";

export function SkillCard({ skill }: { skill: Skill }) {
  const Icon = icons[skill.icon];
  return (
    <li className="flex min-h-11 items-center gap-2 rounded-[6px] border border-line px-3 py-2 text-[14px] font-medium leading-tight transition-colors duration-[120ms] hover:bg-hover">
      <Icon className="size-4 shrink-0" strokeWidth={1.5} aria-hidden="true" />
      <span>{skill.label}</span>
    </li>
  );
}
