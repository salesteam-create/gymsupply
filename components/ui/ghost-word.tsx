type GhostWordProps = {
  children: string;
  /** Outline tuned for the white sections instead of the dark ground. */
  onPaper?: boolean;
  className?: string;
};

/** Oversized outlined wordmark that sits behind a section's content. */
export function GhostWord({ children, onPaper = false, className = "" }: GhostWordProps) {
  return (
    <div
      aria-hidden="true"
      className={`ghost ${onPaper ? "ghost--on-paper" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
