import { Mail } from "lucide-react";
import { page } from "../content";
import { AnimatedText } from "./AnimatedText";

export function Hero() {
  return (
    <header className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:justify-between sm:gap-6">
      <div className="min-w-0 max-w-[60ch]">
        <p className="text-[16px] leading-snug">
          <AnimatedText text={page.greeting} />
          <b>
            <AnimatedText
              text="Emmanuel KACOU."
              delayOffset={page.greeting.length}
            />
          </b>
        </p>
        <p className="mt-3 text-[15px] leading-[1.6] text-ink">
          <strong>Software Developer</strong> à Abidjan. Je
          transforme mes <strong>observations des problèmes du quotidien</strong> en{" "}
          <strong>solutions numériques concrets</strong> : web, mobile et
          systèmes. <br/> Une idée de projets ? Let's work together !
        </p>
        <a
          href={`mailto:${page.email}`}
          className="contact-link mt-4 inline-flex items-center gap-1.5 rounded-[6px] border border-line px-2.5 py-1 text-[13px] text-ink"
        >
          <Mail
            className="contact-link__icon size-4"
            strokeWidth={1.5}
            aria-hidden="true"
          />
          {page.contactLabel}
        </a>
      </div>
      <img
        src="/avatar-gwu-ingenieur.png"
        alt="Emmanuel Kacou devant un ordinateur marqué GWU"
        width={250}
        height={250}
        className="h-[250px] w-[250px] shrink-0 self-center object-contain sm:self-end"
      />
    </header>
  );
}
