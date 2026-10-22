/*
 * Stand-in artwork for the project cards and the testimonial portrait, drawn
 * in the same flat geometric style as the hero rack. They are deliberately
 * illustrations rather than photographs: the real delivery photos belong here
 * once they exist. See README for how to swap one out.
 */

type IllustrationProps = {
  className?: string;
};

const fill = "none";
const white = "#FFFFFF";
const steel = "#55536A";
const brand = "#5A2EE5";
const brandBright = "#7149FF";

/** Shared frame: fills its box and crops rather than squashing. */
function Frame({
  children,
  background,
  className = "",
}: {
  children: React.ReactNode;
  background: string;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 420 420"
      preserveAspectRatio="xMidYMid slice"
      className={`h-full w-full ${className}`}
      aria-hidden="true"
    >
      <rect width="420" height="420" fill={background} />
      {children}
    </svg>
  );
}

/** Back wall uprights, used to give each scene a little depth. */
function WallLines({ x }: { x: number[] }) {
  return (
    <g stroke="#23212F" strokeWidth="2">
      {x.map((v) => (
        <line key={v} x1={v} y1="40" x2={v} y2="352" />
      ))}
    </g>
  );
}

/** Shared ground line, so the three scenes sit at the same height. */
const GROUND = 352;

function Floor() {
  return (
    <>
      <line x1="0" y1={GROUND} x2="420" y2={GROUND} stroke="#3A3850" strokeWidth="4" />
      <rect x="0" y={GROUND + 4} width="420" height="7" fill={brand} />
    </>
  );
}

/** A row of cardio machines: the usual shape of a workplace gym. */
export function CorporateGymIllustration({ className }: IllustrationProps) {
  const treadmill = (ox: number, key: string) => (
    <g key={key}>
      <rect x={ox} y="316" width="96" height="12" rx="6" fill={white} />
      <line x1={ox + 10} y1="328" x2={ox + 10} y2={GROUND} stroke={steel} strokeWidth="5" />
      <line x1={ox + 86} y1="328" x2={ox + 86} y2={GROUND} stroke={steel} strokeWidth="5" />
      <path
        d={`M${ox + 80} 316 L${ox + 92} 218`}
        stroke={white}
        strokeWidth="6"
        strokeLinecap="round"
      />
      <line
        x1={ox + 56}
        y1="256"
        x2={ox + 100}
        y2="256"
        stroke={white}
        strokeWidth="5"
        strokeLinecap="round"
      />
      <rect x={ox + 62} y="186" width="50" height="34" rx="4" fill={brand} />
      <rect x={ox + 71} y="198" width="32" height="5" rx="2.5" fill="#DCD4FF" />
    </g>
  );

  return (
    <Frame background="#16151F" className={className}>
      <WallLines x={[58, 160, 262, 364]} />
      {[26, 160, 294].map((ox, i) => treadmill(ox, `t${i}`))}
      <Floor />
    </Frame>
  );
}

/** Wall bars and a bench: the institutional, high-traffic room. */
export function PublicSectorIllustration({ className }: IllustrationProps) {
  const rungs = Array.from({ length: 9 }, (_, i) => 96 + i * 30);

  return (
    <Frame background="#1A1924" className={className}>
      <WallLines x={[330, 392]} />

      {/* Wall bars */}
      <line x1="72" y1="60" x2="72" y2={GROUND} stroke={white} strokeWidth="7" strokeLinecap="round" />
      <line x1="208" y1="60" x2="208" y2={GROUND} stroke={white} strokeWidth="7" strokeLinecap="round" />
      <g stroke={steel} strokeWidth="5" strokeLinecap="round">
        {rungs.map((y) => (
          <line key={y} x1="72" y1={y} x2="208" y2={y} />
        ))}
      </g>
      <line x1="72" y1="60" x2="208" y2="60" stroke={brandBright} strokeWidth="7" strokeLinecap="round" />

      {/* Bench */}
      <rect x="256" y="268" width="128" height="14" rx="7" fill={white} />
      <path
        d={`M274 282v${GROUND - 282}M366 282v${GROUND - 282}`}
        stroke={steel}
        strokeWidth="6"
        strokeLinecap="round"
      />
      <rect x="256" y="268" width="128" height="6" rx="3" fill={brand} />

      {/* Medicine balls */}
      <circle cx="244" cy={GROUND - 18} r="18" fill={brand} />
      <circle cx="284" cy={GROUND - 11} r="11" fill={steel} />

      <Floor />
    </Frame>
  );
}

/** A rack and loose weights in a converted room at home. */
export function HomeGymIllustration({ className }: IllustrationProps) {
  return (
    <Frame background="#16151F" className={className}>
      {/* Window, to read as a room rather than a hall */}
      <rect x="296" y="62" width="88" height="88" rx="2" stroke="#3A3850" strokeWidth="4" fill={fill} />
      <path d="M340 62v88M296 106h88" stroke="#3A3850" strokeWidth="3" />

      {/* Power rack */}
      <path
        d={`M112 ${GROUND}V84M268 ${GROUND}V84M112 84h156`}
        stroke={white}
        strokeWidth="7"
        strokeLinecap="round"
      />
      <path d={`M92 ${GROUND}h40M248 ${GROUND}h40`} stroke={white} strokeWidth="7" strokeLinecap="round" />
      <g stroke={steel} strokeWidth="4">
        <path d="M112 146h20M112 192h20M112 238h20M248 146h20M248 192h20M248 238h20" />
      </g>

      {/* Loaded barbell */}
      <line x1="56" y1="212" x2="324" y2="212" stroke={brandBright} strokeWidth="9" strokeLinecap="round" />
      <rect x="68" y="176" width="18" height="72" rx="3" fill={brand} />
      <rect x="46" y="188" width="14" height="48" rx="3" fill={brand} />
      <rect x="294" y="176" width="18" height="72" rx="3" fill={brand} />
      <rect x="320" y="188" width="14" height="48" rx="3" fill={brand} />

      {/* Dumbbell pair on the floor */}
      <g>
        <line x1="316" y1={GROUND - 16} x2="366" y2={GROUND - 16} stroke={white} strokeWidth="6" strokeLinecap="round" />
        <rect x="308" y={GROUND - 28} width="12" height="24" rx="3" fill={brand} />
        <rect x="362" y={GROUND - 28} width="12" height="24" rx="3" fill={brand} />
      </g>

      <Floor />
    </Frame>
  );
}

/**
 * Stands in for a customer portrait. Initials rather than a stock face, so the
 * page never shows a stranger as a named customer.
 */
export function CustomerMonogram({ initials }: { initials: string }) {
  return (
    <svg
      viewBox="0 0 320 320"
      preserveAspectRatio="xMidYMid slice"
      className="h-full w-full"
      aria-hidden="true"
    >
      <rect width="320" height="320" fill={brand} />
      <g stroke="#7B52F0" strokeWidth="2">
        <line x1="0" y1="80" x2="320" y2="80" />
        <line x1="0" y1="240" x2="320" y2="240" />
      </g>
      <text
        x="160"
        y="160"
        textAnchor="middle"
        dominantBaseline="central"
        fill={white}
        style={{
          font: "italic 900 128px Poppins, system-ui, sans-serif",
          letterSpacing: "0.02em",
        }}
      >
        {initials}
      </text>
    </svg>
  );
}
