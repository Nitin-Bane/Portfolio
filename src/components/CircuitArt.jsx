import { useReducedMotion } from "motion/react";

const traces = [
  { d: "M166 138 V104 L130 68 H70", pad: [70, 68], label: "GAS", lx: 70, ly: 52, pulse: { dur: 3.2, begin: -0.4, inward: true } },
  { d: "M210 138 V48", pad: [210, 48], label: "pH", lx: 210, ly: 32, pulse: { dur: 2.4, begin: -1.6, inward: true } },
  { d: "M254 138 V112 L292 74 H350", pad: [350, 74], label: "ALARM", lx: 350, ly: 58, pulse: { dur: 2.8, begin: -1.1 } },
  { d: "M282 188 H336 L366 158 V120", pad: [366, 120], label: "RADAR", lx: 366, ly: 104 },
  { d: "M282 232 H322 L362 272 V330", pad: [362, 330], label: "RELAY", lx: 362, ly: 352, pulse: { dur: 3.4, begin: -2.2 } },
  { d: "M188 282 V320 L150 358 H112", pad: [112, 358], label: "SMOKE", lx: 112, ly: 380, pulse: { dur: 3, begin: -0.9, inward: true } },
  { d: "M232 282 V372", pad: [232, 372], label: "TEMP", lx: 232, ly: 394 },
  { d: "M138 166 H64", pad: [64, 166], label: "FLAME", lx: 64, ly: 150, pulse: { dur: 2.2, begin: -1.3, inward: true } },
  { d: "M138 232 H100 L64 268 V316", pad: [64, 316], label: "MOIST", lx: 64, ly: 338 },
];

const pinOffsets = [166, 188, 210, 232, 254];

export default function CircuitArt() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative mx-auto aspect-square w-full max-w-120">
      <div
        aria-hidden
        className="absolute inset-[18%] rounded-full bg-brand/20 blur-3xl dark:bg-brand/15"
      />
      <svg
        viewBox="0 0 420 420"
        role="img"
        aria-label="Circuit illustration: sensors feeding a microcontroller that drives an alarm and a relay"
        className="relative h-full w-full"
        fill="none"
      >
        <g className="stroke-slate-300 dark:stroke-slate-700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {traces.map((t) => (
            <path key={t.d} d={t.d} />
          ))}
          {pinOffsets.map((p) => (
            <g key={p}>
              <path d={`M${p} 138 V150`} />
              <path d={`M${p} 270 V282`} />
              <path d={`M138 ${p} H150`} />
              <path d={`M270 ${p} H282`} />
            </g>
          ))}
        </g>

        {traces.map((t) => (
          <circle
            key={`pad-${t.label}`}
            cx={t.pad[0]}
            cy={t.pad[1]}
            r="5"
            strokeWidth="2"
            className="fill-white stroke-slate-400 dark:fill-slate-950 dark:stroke-slate-600"
          />
        ))}

        {traces.map((t) => (
          <text
            key={`label-${t.label}`}
            x={t.lx}
            y={t.ly}
            textAnchor="middle"
            className="fill-slate-400 font-mono text-[10px] font-semibold tracking-wider dark:fill-slate-500"
          >
            {t.label}
          </text>
        ))}

        {!reduceMotion &&
          traces
            .filter((t) => t.pulse)
            .map((t) => (
              <g key={`pulse-${t.label}`} className="fill-brand">
                <circle r="7" opacity="0.25" />
                <circle r="3.5" />
                <animateMotion
                  dur={`${t.pulse.dur}s`}
                  begin={`${t.pulse.begin}s`}
                  repeatCount="indefinite"
                  path={t.d}
                  {...(t.pulse.inward && { keyPoints: "1;0", keyTimes: "0;1", calcMode: "linear" })}
                />
              </g>
            ))}

        <rect
          x="150"
          y="150"
          width="120"
          height="120"
          rx="14"
          strokeWidth="2"
          className="fill-white stroke-slate-300 dark:fill-slate-900 dark:stroke-slate-700"
        />
        <rect
          x="168"
          y="168"
          width="84"
          height="84"
          rx="8"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          className="stroke-brand/50"
        />
        <circle cx="163" cy="163" r="3" className="fill-slate-300 dark:fill-slate-600" />
        <text
          x="210"
          y="208"
          textAnchor="middle"
          className="fill-brand font-mono text-[15px] font-semibold"
        >
          NB-01
        </text>
        <text
          x="210"
          y="226"
          textAnchor="middle"
          className="fill-slate-400 font-mono text-[9px] tracking-[0.2em] dark:fill-slate-500"
        >
          MCU
        </text>
      </svg>
    </div>
  );
}
