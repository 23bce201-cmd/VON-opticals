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
        <div className="container-wide">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal className="max-w-3xl">
              <p className="text-xs font-black uppercase tracking-[0.28em] text-white">Ray-Ban Meta and Oakley Meta</p>
              <h1 className="mt-4 font-display text-5xl font-black uppercase leading-[0.9] tracking-normal text-white sm:text-7xl lg:text-8xl">Smart glasses, sold with optical-store judgement.</h1>
              <p className="mt-6 border-l-4 border-white pl-5 text-lg font-medium leading-8 text-white/75">
                The technology is exciting, but fit still matters. VON Optical helps you compare styles, understand the features, and adjust the frame for daily comfort.
              </p>
            </Reveal>
          </div>
        </div>
      </section>
      <MetaGlassesSection compact />
      <section className="section-pad bg-von-mist swiss-diagonal">
        <div className="container-wide">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-0 border-l-2 border-t-2 border-von-blue-900 md:grid-cols-2 lg:grid-cols-3">
              {smartFeatures.map((feature, index) => (
                <Reveal key={feature.title} delay={index * 70} className="group -ml-0.5 -mt-0.5 border-2 border-von-blue-900 bg-white p-6 transition hover:bg-von-blue-900 hover:text-white">
                  <feature.icon className="text-current" size={25} strokeWidth={2.5} />
                  <p className="mt-5 swiss-number group-hover:text-white">0{index + 1}. Feature</p>
                  <h2 className="mt-3 font-display text-2xl font-black uppercase leading-none text-current">{feature.title}</h2>
                  <p className="mt-4 text-sm font-medium leading-6 text-von-blue-900/70 group-hover:text-white/80">{feature.copy}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
