import Reveal from "@/shared/components/Reveal";
import { stats } from "../data/stats";

export default function StatsStrip() {
  return (
    <section className="bg-[#1a1a1a] px-6 py-12 text-white">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 text-center md:grid-cols-4">
        {stats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 0.1}>
            <p className="text-4xl font-extrabold text-[#fbb713] md:text-5xl">{stat.value}</p>
            <p className="mt-1 text-sm tracking-wide text-gray-300 uppercase">{stat.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
