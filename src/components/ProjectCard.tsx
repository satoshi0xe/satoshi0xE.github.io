import type { Project } from "../content";
import { icons } from "../icons";

function Body({ project }: { project: Project }) {
  const Icon = icons[project.icon];
  const pills = [...project.tags, project.status];

  return (
    <>
      <div className="flex items-start gap-2">
        <Icon
          className="mt-0.5 size-4 shrink-0"
          strokeWidth={1.5}
          aria-hidden="true"
        />
        <h3 className="text-[14px] font-semibold leading-snug">{project.title}</h3>
      </div>
      <p className="mt-2 line-clamp-2 text-[13px] leading-normal text-muted">
        {project.description}
      </p>
      <ul className="mt-3 flex flex-wrap gap-1.5">
        {pills.map((pill) => (
          <li
            key={pill}
            className="rounded-[4px] bg-pill px-1.5 py-0.5 text-[12px] leading-normal text-ink"
          >
            {pill}
          </li>
        ))}
      </ul>
    </>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  const className =
    "flex h-full flex-col rounded-[6px] border border-line p-3 transition-colors duration-[120ms] hover:bg-hover";

  if (!project.href) {
    return (
      <li className={className}>
        <Body project={project} />
      </li>
    );
  }

  return (
    <li className="h-full">
      <a
        href={project.href}
        target="_blank"
        rel="noreferrer"
        className={`${className} block`}
      >
        <Body project={project} />
        <span className="sr-only">, nouvel onglet</span>
      </a>
    </li>
  );
}
