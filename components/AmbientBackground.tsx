"use client";

import { motion, useReducedMotion } from "motion/react";

/**
 * Fixed, pointer-events-none atmosphere layer: a radial base gradient plus
 * two slow-floating blurred accent blobs. Transform + opacity only, so it
 * costs nothing on the main thread. Collapses to a static gradient under
 * prefers-reduced-motion.
 */
export function AmbientBackground() {
  const reduce = useReducedMotion();

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {/* Base radial wash, top-center */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(94,106,210,0.16), transparent 60%)",
        }}
      />

      <motion.div
        className="absolute left-[8%] top-[-10%] h-[36rem] w-[36rem] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(94,106,210,0.22) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
        initial={{ transform: "translate3d(0,0,0)", opacity: 0.7 }}
        animate={
          reduce
            ? undefined
            : {
                transform: [
                  "translate3d(0px,0px,0)",
                  "translate3d(30px,40px,0)",
                  "translate3d(0px,0px,0)",
                ],
              }
        }
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute right-[4%] top-[10%] h-[28rem] w-[28rem] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(94,106,210,0.14) 0%, transparent 70%)",
          filter: "blur(90px)",
        }}
        initial={{ transform: "translate3d(0,0,0)", opacity: 0.6 }}
        animate={
          reduce
            ? undefined
            : {
                transform: [
                  "translate3d(0px,0px,0)",
                  "translate3d(-25px,30px,0)",
                  "translate3d(0px,0px,0)",
                ],
              }
        }
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Grain-like vignette so the canvas doesn't read flat */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, transparent 70%, rgba(2,2,3,0.6) 100%)",
        }}
      />
    </div>
  );
}
