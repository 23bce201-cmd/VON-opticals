import {
  BadgeCheck,
  BatteryCharging,
  Bluetooth,
  Camera,
  CheckCircle2,
  Glasses,
  Headphones,
  Mic,
  MessageCircle,
  Radio,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Sliders,
  Volume2,
} from "lucide-react";
import MetaGlassesSection from "../components/MetaGlassesSection";
import Reveal from "../components/Reveal";
import { Link } from "react-router-dom";

const smartFeatures = [
  {
    icon: Camera,
    title: "12MP Ultra-Wide Camera",
    copy: "Capture stunning 12MP photos and 1080p video clips from your exact point of view hands-free, without missing the moment.",
    badge: "Hands-Free POV",
  },
  {
    icon: Sparkles,
    title: "Multimodal Meta AI",
    copy: "Say 'Hey Meta' to identify objects, translate signs live, ask for recipes, summarize text, and get instant voice assistance.",
    badge: "Smart Vision & Voice",
  },
  {
    icon: Headphones,
    title: "Open-Ear Spatial Audio",
    copy: "Custom-built temple speakers deliver rich audio and deep bass while leaving your ears open to your surroundings for safety.",
    badge: "Private Directional Sound",
  },
  {
    icon: Radio,
    title: "Live Streaming POV",
    copy: "Broadcast directly to Instagram Live and Facebook Live straight from your frame vantage point without holding your smartphone.",
    badge: "IG & FB Live Ready",
  },
  {
    icon: MessageCircle,
    title: "Calls & Voice Messaging",
    copy: "Make phone calls, send WhatsApp voice notes, and read messages hands-free using intuitive voice commands.",
    badge: "WhatsApp & Cellular",
  },
  {
    icon: BatteryCharging,
    title: "Smart Charging Case",
    copy: "Includes a portable charging case offering up to 36 hours of total battery power on the go, with fast USB-C recharging.",
    badge: "36h Total Playtime",
  },
  {
    icon: Mic,
    title: "5-Microphone Array",
    copy: "Advanced multi-mic array filters out ambient background noise and wind so your voice comes through crystal clear on every call.",
    badge: "Noise Cancelling Mic",
  },
  {
    icon: BadgeCheck,
    title: "Custom Prescription Lenses",
    copy: "Available with single vision, progressive, transition, anti-reflective, and blue-light filtering prescription optical lenses.",
    badge: "VON Optical Fitted",
  },
];

const usageSteps = [
  {
    step: "01",
    title: "Unbox & Initial Charge",
    copy: "Place your Meta glasses inside the included charging case. Connect the USB-C cable until the front LED indicator turns solid green (full charge).",
    icon: BatteryCharging,
  },
  {
    step: "02",
    title: "Download Meta View App",
    copy: "Install the Meta View app on your iOS or Android smartphone. Turn on Bluetooth, slide the glasses power switch to ON, and hold down the pairing button inside the case.",
    icon: Smartphone,
  },
  {
    step: "03",
    title: "Master Touch & Gesture Controls",
    copy: "Use the touch-sensitive touchpad on the right temple arm to control playback, volume, calls, and camera capture effortless with simple finger gestures.",
    icon: Sliders,
  },
  {
    step: "04",
    title: "Use Voice Commands ('Hey Meta')",
    copy: "Activate Meta AI by saying 'Hey Meta' followed by your prompt. Ask questions, control phone playback, capture photos, or dictate messages instantly.",
    icon: Sparkles,
  },
  {
    step: "05",
    title: "Understand Privacy LED Safety",
    copy: "A visible white capture LED light illuminates on the front rim whenever you capture photos or video, giving full transparency to people around you.",
    icon: ShieldCheck,
  },
  {
    step: "06",
    title: "VON In-Store Custom Fitting",
    copy: "Visit VON Optical in Ambawadi, Ahmedabad. Our licensed optometrists will fit your exact prescription lenses, adjust temple flex, and tune frame ergonomics.",
    icon: Glasses,
  },
];

const gestureControls = [
  { gesture: "Single Tap Touchpad", action: "Play / Pause media or Answer / End phone calls" },
  { gesture: "Double Tap Touchpad", action: "Skip forward to next track or Decline incoming call" },
  { gesture: "Triple Tap Touchpad", action: "Skip backward to previous track" },
  { gesture: "Swipe Forward / Back", action: "Increase or Decrease audio volume level" },
  { gesture: "Tap & Hold Touchpad", action: "Invoke Meta AI voice assistant or custom shortcut" },
  { gesture: "Press Capture Button (Top)", action: "Take a high-resolution 12MP photo instantly" },
  { gesture: "Hold Capture Button (Top)", action: "Record a 1080p HD video clip (up to 60 seconds)" },
];

const voiceCommands = [
  { command: '"Hey Meta, take a picture"', description: "Captures a high-res photo from your point-of-view" },
  { command: '"Hey Meta, start recording video"', description: "Begins recording HD video clip hands-free" },
  { command: '"Hey Meta, look and tell me what plant this is"', description: "Uses multimodal AI camera to analyze objects in front of you" },
  { command: '"Hey Meta, call Niraj on WhatsApp"', description: "Initiates hands-free voice call via paired phone app" },
  { command: '"Hey Meta, livestream to Instagram"', description: "Starts live video streaming directly to your Instagram profile" },
  { command: '"Hey Meta, translate this sign to English"', description: "Reads foreign language text and translates aloud" },
  { command: '"Hey Meta, how much battery is left?"', description: "Announces remaining glasses and charging case battery percentage" },
];

export default function MetaGlasses() {
  return (
    <>
      {/* Hero Banner */}
      <section className="page-pad bg-von-blue-900 text-white">
        <div className="container-wide">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal className="max-w-4xl">
              <span className="inline-block border-2 border-von-accent bg-von-accent px-3 py-1 text-xs font-black uppercase tracking-[0.24em] text-white">
                Ray-Ban Meta & Oakley Meta AI
              </span>
              <h1 className="mt-6 font-display text-5xl font-black uppercase leading-[0.9] tracking-normal text-white sm:text-7xl lg:text-8xl">
                Smart glasses, fitted with optical store expertise.
              </h1>
              <p className="mt-6 border-l-4 border-white pl-5 text-lg font-medium leading-8 text-white/80 sm:text-xl">
                Experience hands-free capture, open-ear audio, and real-time AI assistance—integrated into iconic frames with custom optical prescription fitting at VON Optical.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Meta Glasses Visual Showcase */}
      <MetaGlassesSection compact />

      {/* What These Glasses Can Do - Features Grid */}
      <section className="section-pad bg-von-mist swiss-grid-pattern">
        <div className="container-wide">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal className="mb-12">
              <p className="swiss-label">01. Capabilities & Technology</p>
              <h2 className="section-title">What Meta AI Glasses Can Do</h2>
              <p className="section-copy">
                Discover the seamless fusion of luxury eyewear design and cutting-edge artificial intelligence, crafted for your daily visual lifestyle.
              </p>
            </Reveal>

            <div className="grid gap-0 border-l-2 border-t-2 border-von-blue-900 md:grid-cols-2 lg:grid-cols-4">
              {smartFeatures.map((feature, index) => (
                <Reveal
                  key={feature.title}
                  delay={index * 60}
                  className="group -ml-0.5 -mt-0.5 border-2 border-von-blue-900 bg-white p-6 transition duration-200 hover:bg-von-blue-900 hover:text-white"
                >
                  <div className="flex items-center justify-between">
                    <feature.icon className="text-von-blue-900 transition-colors duration-200 group-hover:text-white" size={28} strokeWidth={2.3} />
                    <span className="border border-von-blue-900/30 bg-von-mist px-2 py-0.5 text-[10px] font-black uppercase tracking-[0.14em] text-von-blue-900 transition-colors duration-200 group-hover:border-white/40 group-hover:bg-white/10 group-hover:text-white">
                      {feature.badge}
                    </span>
                  </div>
                  <p className="mt-6 swiss-number group-hover:text-white">0{index + 1}. Feature</p>
                  <h3 className="mt-2 font-display text-2xl font-black uppercase leading-tight text-current">{feature.title}</h3>
                  <p className="mt-3 text-xs font-medium leading-6 text-von-blue-900/75 group-hover:text-white/80">{feature.copy}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How To Use & Instructions Guide */}
      <section className="section-pad bg-white">
        <div className="container-wide">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal className="mb-12">
              <p className="swiss-label">02. Instructions & Setup Guide</p>
              <h2 className="section-title">How To Use Your Meta Smart Glasses</h2>
              <p className="section-copy">
                From initial unboxing to everyday gestures and voice prompts—follow these simple instructions to master your smart frame.
              </p>
            </Reveal>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {usageSteps.map((stepItem, index) => (
                <Reveal
                  key={stepItem.title}
                  delay={index * 80}
                  className="relative border-4 border-von-blue-900 bg-von-mist p-6 transition-all duration-200 hover:-translate-y-1 hover:border-von-accent"
                >
                  <div className="flex items-center justify-between border-b-2 border-von-blue-900/20 pb-4">
                    <span className="font-display text-3xl font-black text-von-accent">{stepItem.step}</span>
                    <stepItem.icon size={26} className="text-von-blue-900" strokeWidth={2.2} />
                  </div>
                  <h3 className="mt-4 font-display text-2xl font-black uppercase text-von-blue-900">{stepItem.title}</h3>
                  <p className="mt-3 text-sm font-medium leading-6 text-von-blue-900/80">{stepItem.copy}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Controls & Voice Command Cheat-Sheet */}
      <section className="section-pad bg-von-blue-900 text-white swiss-diagonal">
        <div className="container-wide">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Touchpad Gestures */}
              <Reveal>
                <div className="border-4 border-white bg-von-blue-900 p-6 sm:p-8">
                  <div className="flex items-center gap-3 border-b-2 border-white/30 pb-4">
                    <Sliders className="text-von-accent" size={26} strokeWidth={2.5} />
                    <h3 className="font-display text-3xl font-black uppercase text-white">Touchpad Gesture Controls</h3>
                  </div>
                  <div className="mt-6 space-y-4">
                    {gestureControls.map((item) => (
                      <div
                        key={item.gesture}
                        className="group border-2 border-white bg-white/5 p-4 transition-all duration-200 hover:bg-von-accent hover:border-white hover:shadow-[0_8px_25px_rgba(255,74,28,0.45)] hover:-translate-y-0.5 cursor-pointer"
                      >
                        <p className="text-xs font-black uppercase tracking-[0.16em] text-white group-hover:text-white">{item.gesture}</p>
                        <p className="mt-1 text-sm font-medium text-white/80 group-hover:text-white">{item.action}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>

              {/* Voice Commands */}
              <Reveal delay={150}>
                <div className="border-4 border-white bg-von-blue-900 p-6 sm:p-8">
                  <div className="flex items-center gap-3 border-b-2 border-white/30 pb-4">
                    <Sparkles className="text-von-accent" size={26} strokeWidth={2.5} />
                    <h3 className="font-display text-3xl font-black uppercase text-white">Voice Commands ("Hey Meta")</h3>
                  </div>
                  <div className="mt-6 space-y-4">
                    {voiceCommands.map((item) => (
                      <div
                        key={item.command}
                        className="group border-2 border-white bg-white/5 p-4 transition-all duration-200 hover:bg-von-accent hover:border-white hover:shadow-[0_8px_25px_rgba(255,74,28,0.45)] hover:-translate-y-0.5 cursor-pointer"
                      >
                        <p className="text-xs font-black uppercase tracking-[0.16em] text-white group-hover:text-white">{item.command}</p>
                        <p className="mt-1 text-sm font-medium text-white/80 group-hover:text-white">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Optical Fitting & Store Experience Banner */}
      <section className="section-pad bg-white">
        <div className="container-wide">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal className="border-4 border-von-blue-900 bg-von-mist p-8 sm:p-12">
              <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <span className="swiss-label">03. The VON Optical Difference</span>
                  <h2 className="mt-3 font-display text-4xl font-black uppercase text-von-blue-900 sm:text-5xl">
                    Why Buy Meta AI Glasses From An Optical Store?
                  </h2>
                  <p className="mt-4 max-w-3xl text-base font-medium leading-7 text-von-blue-900/80 sm:text-lg">
                    Tech stores sell smart glasses off the shelf. VON Optical fits them to your unique facial structure, aligns the optical centers, mounts custom prescription lenses, and ensures comfortable long-term wear.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-4 text-xs font-black uppercase tracking-[0.14em] text-von-blue-900">
                    <span className="flex items-center gap-2 border-2 border-von-blue-900 bg-white px-3 py-2">
                      <CheckCircle2 size={16} className="text-von-accent" /> Custom Prescription Lenses
                    </span>
                    <span className="flex items-center gap-2 border-2 border-von-blue-900 bg-white px-3 py-2">
                      <CheckCircle2 size={16} className="text-von-accent" /> Temple & Bridge Adjustment
                    </span>
                    <span className="flex items-center gap-2 border-2 border-von-blue-900 bg-white px-3 py-2">
                      <CheckCircle2 size={16} className="text-von-accent" /> Free Pairing & App Setup Help
                    </span>
                  </div>
                </div>
                <div>
                  <Link to="/visit-us" className="btn-primary whitespace-nowrap">
                    Visit Store To Try Meta AI
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
