"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const scrollToApply = () => {
    const el = document.querySelector("#apply");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToNext = () => {
    const el = document.querySelector("#about");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center section-padding relative overflow-hidden"
      style={{
        background: "radial-gradient(ellipse at 70% 30%, #C41E3A, #8C1326 70%)",
      }}
    >
      <div className="absolute top-40 w-1/2 sm:w-1/4 md:w-1/4 lg:w-[30%] opacity-100 pointer-events-none z-0">
        <img
          src="/images/hero-decoration1.png"
          alt=""
          className="w-full h-auto"
        />
      </div>
      {/* 右下角装饰 - 放大到屏幕高度1/3左右 */}
      <div className="absolute bottom-[-40px] right-[-40px] w-1/2 sm:w-2/5 md:w-1/3 lg:w-[30%] opacity-100 pointer-events-none z-0">
        <img
          src="/images/hero-decoration-right.png"
          alt=""
          className="w-full h-auto"
        />
      </div>

      {/* 左下角装饰 - 放大到屏幕高度1/3左右 */}
      <div className="absolute bottom-[-60px] left-[-40px] w-1/2 sm:w-2/5 md:w-1/3 lg:w-[30%] opacity-100 pointer-events-none z-0">
        <img
          src="/images/hero-decoration-left.png"
          alt=""
          className="w-full h-auto"
        />
      </div>

      {/* 主内容 */}
      <div className="container-custom text-center text-white px-5 relative z-10 flex flex-col items-center">
        {/* 协会会标 */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-4"
        >
          <div className="w-16 h-16 md:w-20 md:h-20 relative">
            <img
              src="/images/hero-bg.png"
              alt="深大招协"
              className="w-full h-full object-contain"
            />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
        >
          第十二届招生志愿者协会招新啦！
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 text-lg md:text-xl lg:text-2xl opacity-90"
        >
          加入招协，一起为深大代言！
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          onClick={scrollToApply}
          className="mt-8 bg-white text-[#A6192E] px-10 py-4 rounded-full text-lg font-semibold hover:bg-[#A6192E] hover:text-white hover:scale-105 transition-all duration-300 shadow-lg z-20 relative"
        >
          立即报名
        </motion.button>
      </div>

      {/* 底部跳动箭头 - 点击滚动到下一模块 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 cursor-pointer flex flex-col items-center gap-1 text-white/80 hover:text-white transition-colors"
        onClick={scrollToNext}
      >
        <span className="text-sm sm:text-lg tracking-widest">下滑了解详情</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 1.6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ChevronDown size={28} strokeWidth={2} />
        </motion.div>
      </motion.div>
    </section>
  );
}