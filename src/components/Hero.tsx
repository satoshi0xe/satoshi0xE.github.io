import { Mail } from "lucide-react";
import { page } from "../content";
import { Illustration } from "./Illustration";

export function Hero() {
  return (
    <header className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:justify-between sm:gap-6">
      <div className="min-w-0 max-w-[60ch]">
        <p className="text-[16px] leading-snug">{page.greeting} <b>Emmanuel KACOU.</b></p>
        <p className="mt-3 text-[15px] leading-[1.6] text-ink">
          <strong>Fullstack Developer</strong> à Abidjan. Je
          transforme mes <strong>observations des problèmes du quotidien</strong> en{" "}
          <strong>solutions numériques concrets</strong> : web, mobile et
          systèmes. <br/> Une idée de projets ? Let's work together !
        </p>
        <a
          href={`mailto:${page.email}`}
          className="mt-4 inline-flex items-center gap-1.5 rounded-[6px] border border-line px-2.5 py-1 text-[13px] text-ink transition-colors duration-[120ms] hover:bg-hover"
        >
          <Mail className="size-4" strokeWidth={1.5} aria-hidden="true" />
          {page.contactLabel}
        </a>
      </div>
      <Illustration />
    </header>
  );
}
