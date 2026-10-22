type IconProps = {
  size?: number;
  className?: string;
};

export function ArrowUpRightIcon({ size = 14, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      className={className}
      aria-hidden="true"
    >
      <path d="M7 17L17 7M9 7h8v8" />
    </svg>
  );
}

export function PinIcon({ size = 44, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 21s-7-6.1-7-11.5A7 7 0 0 1 19 9.5C19 14.9 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </svg>
  );
}

export function TeamIcon({ size = 44, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className={className}
      aria-hidden="true"
    >
      <circle cx="9" cy="8" r="3" />
      <circle cx="17" cy="9" r="2.5" />
      <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6M15 14.5c3 0 6 2 6 5.5" />
    </svg>
  );
}

export function WrenchIcon({ size = 44, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className={className}
      aria-hidden="true"
    >
      <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.4 2.4-2.6-.4-.4-2.6 2.4-2.4z" />
    </svg>
  );
}

export function QuoteMarkIcon({ className }: Pick<IconProps, "className">) {
  return (
    <svg
      width="64"
      height="50"
      viewBox="0 0 56 44"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M0 44V26C0 10 8 2 22 0l2 7c-8 2-12 7-12 15h10v22H0zm32 0V26c0-16 8-24 22-26l2 7c-8 2-12 7-12 15h10v22H32z"
        fill="currentColor"
      />
    </svg>
  );
}

/** The free-weight rack that anchors the hero. */
export function RackIllustration({ className }: Pick<IconProps, "className">) {
  return (
    <svg viewBox="0 0 400 420" className={className} fill="none" aria-hidden="true">
      <path d="M80 400V40M320 400V40" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" />
      <path d="M60 400h60M280 400h60M80 70h240" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" />
      <path
        d="M80 150h22M80 190h22M80 230h22M80 270h22M298 150h22M298 190h22M298 230h22M298 270h22"
        stroke="#55536A"
        strokeWidth="4"
      />
      <path d="M20 210h360" stroke="#7149FF" strokeWidth="8" strokeLinecap="round" />
      <rect x="34" y="150" width="20" height="120" rx="3" fill="#5A2EE5" />
      <rect x="8" y="164" width="16" height="92" rx="3" fill="#5A2EE5" />
      <rect x="346" y="150" width="20" height="120" rx="3" fill="#5A2EE5" />
      <rect x="376" y="164" width="16" height="92" rx="3" fill="#5A2EE5" />
    </svg>
  );
}
