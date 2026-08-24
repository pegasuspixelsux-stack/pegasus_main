"use client";

import { motion } from "motion/react";
import {
  Truck,
  Buildings,
  WhatsappLogo,
  UsersThree,
  Package,
  MapTrifold,
  type Icon,
} from "@phosphor-icons/react";
import { cn } from "@/lib/cn";

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

const fadeUp = {
  hidden: { transform: "translateY(20px)", opacity: 0 },
  show: {
    transform: "translateY(0px)",
    opacity: 1,
    transition: { duration: 0.6, ease: EASE_OUT },
  },
};

const CARD_SHADOW =
  "0 0 0 1px rgba(255,255,255,0.06), 0 2px 20px rgba(0,0,0,0.4), 0 24px 64px -12px rgba(94,106,210,0.25)";

type Glow = "top-left" | "top-right" | "bottom-left" | "bottom-right";

const GLOW_POSITION: Record<Glow, string> = {
  "top-left": "radial-gradient(circle at 15% 0%, rgba(94,106,210,0.22), transparent 55%)",
  "top-right": "radial-gradient(circle at 85% 0%, rgba(94,106,210,0.22), transparent 55%)",
  "bottom-left": "radial-gradient(circle at 15% 100%, rgba(94,106,210,0.2), transparent 55%)",
  "bottom-right": "radial-gradient(circle at 85% 100%, rgba(94,106,210,0.2), transparent 55%)",
};

type WorkItem = {
  name: string;
  tags: [string, string];
  description: string;
  icon: Icon;
  span: string;
  glow: Glow;
  stat?: { value: string; label: string };
  featured?: boolean;
  wide?: boolean;
};

const WORK: WorkItem[] = [
  {
    name: "MovOS",
    tags: ["Enterprise Operations", "Fleet Management"],
    description:
      "Real-time coordination for an 800-vehicle enterprise fleet, from dispatch to maintenance history.",
    icon: Truck,
    span: "lg:col-span-4",
    glow: "top-left",
    stat: { value: "800", label: "vehicles coordinated" },
    featured: true,
  },
  {
    name: "Oikos",
    tags: ["SaaS Architecture", "Real Estate Catalog"],
    description:
      "A multi-tenant catalog that gives every real estate brokerage its own branded storefront on shared infrastructure.",
    icon: Buildings,
    span: "lg:col-span-2",
    glow: "top-right",
  },
  {
    name: "La Pancha Ecosystem",
    tags: ["Commerce & Integration", "WhatsApp Engine"],
    description:
      "A digital catalog wired straight into a WhatsApp ordering engine, turning browsing into checkout in one thread.",
    icon: WhatsappLogo,
    span: "lg:col-span-2",
    glow: "bottom-left",
  },
  {
    name: "Nexus Agency Core",
    tags: ["White-Label Infrastructure", "Lead Capture & CRM"],
    description:
      "Lead capture and CRM infrastructure, white-labeled for agency partners running client acquisition at scale.",
    icon: UsersThree,
    span: "lg:col-span-2",
    glow: "bottom-right",
  },
  {
    name: "VeloSync",
    tags: ["Workflow Automation", "Inventory Portal"],
    description:
      "A multi-stage inventory portal that automates the handoff between warehousing, fulfillment, and reorder.",
    icon: Package,
    span: "lg:col-span-2",
    glow: "top-left",
  },
  {
    name: "Apex Logistics",
    tags: ["Custom Dashboard", "Freight Tracking"],
    description:
      "A live freight-tracking dashboard that gives dispatchers a real-time map of every shipment in transit.",
    icon: MapTrifold,
    span: "lg:col-span-6",
    glow: "top-right",
    wide: true,
  },
];

function WorkCard({ item, index }: { item: WorkItem; index: number }) {
  const IconComponent = item.icon;

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeUp}
      transition={{ delay: (index % 3) * 0.06 }}
      className={cn(item.span, "relative")}
    >
      <div
        className={cn(
          "relative h-full overflow-hidden rounded-2xl border border-white/[0.08] bg-surface",
          item.featured ? "p-8" : "p-6"
        )}
        style={{ boxShadow: CARD_SHADOW }}
      >
        <div
          className="absolute inset-0"
          style={{ background: GLOW_POSITION[item.glow] }}
        />

        {item.featured && (
          <div
            className="absolute inset-0 opacity-60"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
              maskImage:
                "radial-gradient(ellipse 80% 80% at 30% 20%, black 40%, transparent 80%)",
            }}
          />
        )}

        <div
          className={cn(
            "relative",
            item.wide
              ? "flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between"
              : ""
          )}
        >
          <div className={item.wide ? "sm:max-w-md" : ""}>
            <div className="mb-5 grid h-10 w-10 place-items-center rounded-full border border-white/[0.1] bg-white/[0.04] text-accent">
              <IconComponent size={18} weight="bold" />
            </div>

            <h3
              className={cn(
                "font-normal tracking-tight text-foreground",
                item.featured ? "text-xl" : "text-lg"
              )}
            >
              {item.name}
            </h3>

            <div className="mt-3 flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 text-xs text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="mt-4 max-w-md leading-relaxed text-muted">
              {item.description}
            </p>
          </div>

          {item.stat && (
            <div className="mt-8 border-t border-white/[0.06] pt-6">
              <div className="text-4xl font-normal tracking-tighter text-foreground">
                {item.stat.value}
              </div>
              <div className="mt-1 text-sm text-muted">{item.stat.label}</div>
            </div>
          )}

          {item.wide && (
            <div className="hidden shrink-0 sm:block">
              <div className="grid h-20 w-20 place-items-center rounded-full border border-accent/30">
                <div className="h-2 w-2 rounded-full bg-accent shadow-[0_0_20px_4px_rgba(94,106,210,0.6)]" />
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export function Work() {
  return (
    <section id="work" className="relative z-10 py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          className="max-w-xl"
        >
          <h2 className="text-3xl font-normal tracking-tighter text-foreground sm:text-4xl">
            Selected work
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            Six systems built for direct clients and white-label agency
            partners, each one infrastructure first.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-6">
          {WORK.map((item, index) => (
            <WorkCard key={item.name} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
