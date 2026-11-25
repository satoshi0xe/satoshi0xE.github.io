type AnimatedTextProps = {
  text: string;
  delayOffset?: number;
};

export function AnimatedText({ text, delayOffset = 0 }: AnimatedTextProps) {
  return (
    <>
      <span className="animated-text" aria-hidden="true">
        {Array.from(text).map((letter, index) => (
          <span
            key={`${letter}-${index}`}
            className="animated-text__letter"
            style={{
              animationDelay: `${(index + delayOffset) * 22}ms`,
              transitionDelay: `${index * 14}ms`,
            }}
          >
            {letter === " " ? "\u00a0" : letter}
          </span>
        ))}
      </span>
      <span className="sr-only">{text}</span>
    </>
  );
}
