import { contacts, now, page, projectTabs, sections, skillTabs } from "./content";
import { Hero } from "./components/Hero";
import { ProjectCard } from "./components/ProjectCard";
import { SkillCard } from "./components/SkillCard";
import { Tabs } from "./components/Tabs";

export function App() {
  return (
    <main className="mx-auto w-full max-w-[720px] px-6 pt-12 pb-16 sm:pt-16">
      <h1 className="text-[34px] leading-[1.15] font-bold tracking-[-0.02em]">
        {page.title}
      </h1>
      <Hero />

      <section id="competences" className="mt-12">
        <h2 className="text-[21px] leading-snug font-semibold tracking-[-0.01em]">
          {sections.skills}
        </h2>
        <Tabs
          label={sections.skills}
          tabs={skillTabs.map((tab) => ({
            id: tab.id,
            label: tab.label,
            icon: tab.icon,
            panel: (
              <ul className="grid grid-cols-2 gap-3 min-[520px]:grid-cols-3">
                {tab.items.map((skill) => (
                  <SkillCard key={skill.label} skill={skill} />
                ))}
              </ul>
            ),
          }))}
        />
      </section>

      <section id="projets" className="mt-12">
        <h2 className="text-[21px] leading-snug font-semibold tracking-[-0.01em]">
          {sections.projects}
        </h2>
        <Tabs
          label={sections.projects}
          tabs={projectTabs.map((tab) => ({
            id: tab.id,
            label: tab.label,
            icon: tab.icon,
            panel: (
              <ul className="grid auto-rows-fr grid-cols-1 gap-3 sm:grid-cols-2">
                {tab.items.map((project) => (
                  <ProjectCard key={project.title} project={project} />
                ))}
              </ul>
            ),
          }))}
        />
      </section>

      <section id="maintenant" className="mt-12">
        <h2 className="text-[21px] leading-snug font-semibold tracking-[-0.01em]">
          {sections.now}
        </h2>
        <ul className="mt-4 flex flex-col gap-2.5 text-[15px] leading-relaxed">
          {now.map((item) => (
            <li key={item} className="flex gap-2.5">
              <span
                className="mt-[9px] size-1.5 shrink-0 rounded-full bg-ink"
                aria-hidden="true"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <footer id="contact" className="mt-12 border-t border-line pt-6">
        <p className="text-[13px] text-muted">Emmanuel KACOU, Abidjan</p>
        <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-[14px]">
          {contacts.map((contact) => (
            <li key={contact.href}>
              <a
                href={contact.href}
                className="underline decoration-line underline-offset-2 hover:bg-hover"
                {...(contact.href.startsWith("http")
                  ? { target: "_blank", rel: "noreferrer" }
                  : {})}
              >
                {contact.label}
                {contact.href.startsWith("http") ? (
                  <span className="sr-only">, nouvel onglet</span>
                ) : null}
              </a>
            </li>
          ))}
        </ul>
      </footer>
    </main>
  );
}
