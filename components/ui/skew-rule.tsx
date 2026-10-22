type SkewRuleProps = {
  className?: string;
};

/** The short slanted bar that opens a section or closes a card. */
export function SkewRule({ className = "w-11 h-1.5" }: SkewRuleProps) {
  return <span className={`skew-rule ${className}`} />;
}
