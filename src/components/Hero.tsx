"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const scrollToApply = () => {
    const el = document.querySelector("#apply");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center section-padding"
      style={{
        background: "radial-gradient(ellipse at 70% 30%, #C41E3A, #8C1326 70%)",
      }}
    >
      <div className="container-custom text-center text-white px-5">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight"
        >
          加入招协，一起为深大代言！
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 text-lg md:text-xl opacity-90"
        >
          深圳大学招生志愿者协会 · 我的深大我宣传
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          onClick={scrollToApply}
          className="mt-8 bg-white text-[#A6192E] px-10 py-4 rounded-full text-lg font-semibold hover:bg-[#A6192E] hover:text-white hover:scale-105 transition-all duration-300 shadow-lg"
        >
          立即报名
        </motion.button>
      </div>
    </section>
  );
}