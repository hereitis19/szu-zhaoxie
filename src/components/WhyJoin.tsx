"use client";

import { motion } from "framer-motion";

const reasons = [
  {
    icon: "🚀",
    title: "锻炼组织沟通能力",
    desc: "参与校园开放日、寒招等大型活动的策划与执行",
  },
  {
    icon: "📋",
    title: "积累社会实践经历",
    desc: "接触真实的招生宣传工作，丰富个人履历",
  },
  {
    icon: "⏰",
    title: "获得义工时",
    desc: "参与协会活动可记录义工时",
  },
  {
    icon: "🏆",
    title: "参与评优评奖",
    desc: "协会内部评优 + 校级优秀学生干部奖学金",
  },
  {
    icon: "👥",
    title: "结识优秀伙伴",
    desc: "与一群热情、负责、有担当的同学共同成长",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function WhyJoin() {
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
          <h2 className="section-title">为什么加入招协？</h2>
          <div className="section-divider" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 mt-8"
        >
          {reasons.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8, boxShadow: "0 12px 30px rgba(0,0,0,0.1)" }}
              className="bg-white rounded-2xl p-6 text-center shadow-sm transition-all duration-300"
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3 className="text-[#222222] font-semibold text-base">
                {item.title}
              </h3>
              <p className="text-[#666] text-sm mt-2 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}