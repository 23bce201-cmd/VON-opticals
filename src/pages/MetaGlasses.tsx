import { BadgeCheck, Bluetooth, Camera, Headphones, MessageCircle, Sparkles } from "lucide-react";
import MetaGlassesSection from "../components/MetaGlassesSection";
import Reveal from "../components/Reveal";

const smartFeatures = [
  { icon: Camera, title: "Camera capture", copy: "Capture photos and short clips from your point of view while keeping your hands free." },
  { icon: Sparkles, title: "AI assistant", copy: "Ask questions, get contextual help, and use voice-led Meta AI features where supported." },
  { icon: Headphones, title: "Open-ear audio", copy: "Listen to calls, messages, and music while staying aware of the room around you." },
  { icon: Bluetooth, title: "Phone pairing", copy: "The store can walk you through pairing basics, controls, charging, and app setup." },
  { icon: MessageCircle, title: "Calls and messages", copy: "Use voice controls for everyday communication without reaching for your phone." },
  { icon: BadgeCheck, title: "Optical fitting", copy: "Try the frame in person and get the fit adjusted like regular premium eyewear." },
];

export default function MetaGlasses() {
  return (
    <>
      <section className="page-pad bg-von-blue-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <p className="text-sm font-bold uppercase text-white/60">Ray-Ban Meta and Oakley Meta</p>
            <h1 className="mt-4 font-display text-5xl font-semibold leading-tight sm:text-6xl">Smart glasses, sold with optical-store judgement.</h1>
            <p className="mt-6 text-lg leading-8 text-white/75">
              The technology is exciting, but fit still matters. VON Optical helps you compare styles, understand the features, and adjust the frame for daily comfort.
            </p>
          </Reveal>
        </div>
      </section>
      <MetaGlassesSection compact />
      <section className="section-pad bg-von-mist">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {smartFeatures.map((feature, index) => (
              <Reveal key={feature.title} delay={index * 70} className="rounded-md border border-von-blue-100 bg-white p-6">
                <feature.icon className="text-von-blue-900" size={25} />
                <h2 className="mt-4 font-display text-xl font-semibold text-von-blue-900">{feature.title}</h2>
                <p className="mt-3 text-sm leading-6 text-von-ink/70">{feature.copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
