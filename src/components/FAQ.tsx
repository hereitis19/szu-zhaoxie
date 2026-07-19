"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "没有相关经验可以加入吗？",
    a: "当然可以！招协看重的是你的热情和态度，部门会提供培训和指导，让你快速上手。",
  },
  {
    q: "加入招协需要很多时间吗？",
    a: "活动安排会提前通知，你可以根据个人时间灵活参与，不会影响正常学业。",
  },
  {
    q: "管理部和宣传部可以同时加入吗？",
    a: "一般选择一个部门深耕，但活动执行中经常跨部门协作，都有机会参与。",
  },
  {
    q: "不是大一新生可以加入吗？",
    a: "本次招新主要面向2026级新生，也欢迎其他年级同学咨询报名。",
  },
  {
    q: "怎么知道我是否通过初审？",
    a: "初审结果会通过短信或邮件通知，请保持联系方式畅通。",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container-custom px-5 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="section-title">常见问题</h2>
          <div className="section-divider" />
        </motion.div>

        <div className="mt-8 space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="border-b border-[#F0F1F3] pb-3"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between py-3 text-left"
              >
                <span className="text-[#222222] font-medium text-sm md:text-base">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`text-[#A6192E] transition-transform duration-300 flex-shrink-0 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  size={20}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-[#666] text-sm md:text-base leading-relaxed pb-3">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}