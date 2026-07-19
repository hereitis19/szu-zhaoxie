"use client";

import { motion } from "framer-motion";

const steps = [
  { number: 1, title: "报名", desc: "填写问卷星报名问卷" },
  { number: 2, title: "初审", desc: "工作人员审核报名材料" },
  { number: 3, title: "面试", desc: "初审合格者进入面试" },
  { number: 4, title: "确定", desc: "择优聘任，公示后确认" },
];

export default function Process() {
  return (
    <section className="section-padding bg-[#F7F8FA]">
      <div className="container-custom px-5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="section-title">招新流程</h2>
          <div className="section-divider" />
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center w-full md:w-auto"
            >
              <div className="w-14 h-14 rounded-full bg-[#A6192E] text-white flex items-center justify-center text-xl font-bold mb-3">
                {step.number}
              </div>
              <h3 className="text-[#222222] font-semibold text-lg">
                {step.title}
              </h3>
              <p className="text-[#666] text-sm mt-1">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}