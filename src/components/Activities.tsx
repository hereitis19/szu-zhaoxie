"use client";

import { motion } from "framer-motion";

const activities = [
  {
    name: "寒假返母校宣传深大（寒招）",
    desc: "全校性大型活动，志愿者寒假回高中母校向学弟学妹宣传深大，是招协最具品牌影响力的活动",
  },
  {
    name: "明信片漂流",
    desc: "以明信片为载体传递深大故事与祝福，连接高中与大学",
  },
  {
    name: "校园开放日",
    desc: "接待中学生来访，参与招生咨询会，面对面解答考生疑问",
  },
  {
    name: "寒招物资打包",
    desc: "为寒招志愿者准备宣传物料，保障活动顺利开展",
  },
];

export default function Activities() {
  return (
    <section id="activities" className="section-padding bg-[#F7F8FA]">
      <div className="container-custom px-5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="section-title">往年活动</h2>
          <div className="section-divider" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -6, boxShadow: "0 12px 30px rgba(0,0,0,0.08)" }}
              className="bg-white rounded-2xl p-6 shadow-sm transition-all duration-300"
            >
              <div className="flex items-start gap-3">
                <span className="text-[#A6192E] text-xl">📍</span>
                <div>
                  <h3 className="text-[#A6192E] font-semibold text-base md:text-lg">
                    {activity.name}
                  </h3>
                  <p className="text-[#666] text-sm md:text-base mt-1 leading-relaxed">
                    {activity.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}