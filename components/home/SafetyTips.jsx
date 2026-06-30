import Reveal from "../Reveal";
import { Ruler, Gauge, ArrowLeftRight, MoveRight, Signpost, Wine } from "lucide-react";

const tips = [
  { icon: Ruler, title: "Maintain Safe Distance", text: "Keep at least a two-second gap from the car ahead." },
  { icon: Gauge, title: "Follow Speed Limit", text: "Dubai roads are radar-monitored — stay within limits." },
  { icon: ArrowLeftRight, title: "Use Driving Lanes", text: "Keep right unless overtaking on highways." },
  { icon: MoveRight, title: "Change Lanes Safely", text: "Signal early and check mirrors and blind spots." },
  { icon: Signpost, title: "Follow Road Signs", text: "Watch for Salik toll gates and exit signs." },
  { icon: Wine, title: "No Drinking & Driving", text: "Zero tolerance — never drive after alcohol." },
];

export default function SafetyTips() {
  return (
    <section className="bg-ink py-16">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow mb-2">Drive Safe</p>
          <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">Safety driving tips in Dubai</h2>
        </Reveal>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {tips.map((t, i) => (
            <Reveal key={t.title} delay={(i % 3) * 0.05}>
              <div className="flex items-start gap-4 rounded-xl border border-line bg-char2 p-5">
                <t.icon className="h-6 w-6 shrink-0 text-brand" strokeWidth={1.5} />
                <div>
                  <h3 className="text-sm font-semibold text-white">{t.title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-muted">{t.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
