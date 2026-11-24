import type { Project } from "../content";
import { icons } from "../icons";
import { ExternalLink, Image as ImageIcon } from "lucide-react";

function Body({ project }: { project: Project }) {
  const Icon = icons[project.icon];
  const pills = [...project.tags, project.status];

  return (
    <>
      {project.preview ? (
        <img
          src={project.preview.src}
          alt={project.preview.alt}
          className="mb-3 aspect-[16/10] w-full rounded-[4px] border border-line object-cover"
          loading="lazy"
          decoding="async"
        />
      ) : (
        <div
          role="img"
          aria-label={`Aperçu de ${project.title} à ajouter`}
          className="mb-3 flex aspect-[16/10] w-full flex-col items-center justify-center gap-2 rounded-[4px] border border-dashed border-line bg-hover text-muted"
        >
          <ImageIcon className="size-6" strokeWidth={1.5} aria-hidden="true" />
          <span className="text-[12px]">Aperçu à ajouter</span>
        </div>
      )}
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
      {project.href ? (
        <span className="mt-3 inline-flex items-center gap-1 text-[13px] font-medium text-ink underline decoration-line underline-offset-2">
          Visiter le site
          <ExternalLink
            className="size-3.5"
            strokeWidth={1.5}
            aria-hidden="true"
          />
        </span>
      ) : null}
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
        className={className}
      >
        <Body project={project} />
        <span className="sr-only">, nouvel onglet</span>
      </a>
    </li>
  );
}
