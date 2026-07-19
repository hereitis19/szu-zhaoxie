"use client";

import { motion } from "framer-motion";

const departments = [
  {
    name: "管理部",
    icon: "⚙️",
    duties: [
      "跟进活动策划的落地执行，优化流程，需要有一定的策划经验及较强的执行能力。",
      "负责协调各类活动的人员安排、物资管理、场地申请等事务性工作，需要有一定的协调和沟通能力。",
    ],
  },
  {
    name: "宣传部",
    icon: "📢",
    duties: [
      "负责招协各类新媒体的运营（公众号、视频号、小红书以及「深大招招」等账号），需有推文制作、视频剪辑、新媒体账号运营的经验以及一定的文字功底。",
      "主导各项活动视觉设计、摄影摄像、物料创作，需要有一定的设计或摄影基础。",
    ],
  },
];

export default function Departments() {
  return (
    <section id="departments" className="section-padding bg-white">
      <div className="container-custom px-5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="section-title">部门介绍</h2>
          <div className="section-divider" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {departments.map((dept, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -6, boxShadow: "0 12px 30px rgba(0,0,0,0.08)" }}
              className="bg-[#F7F8FA] rounded-2xl p-6 md:p-8 shadow-sm transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{dept.icon}</span>
                <h3 className="text-xl md:text-2xl font-bold text-[#A6192E]">
                  {dept.name}
                </h3>
              </div>
              <ul className="space-y-3">
                {dept.duties.map((duty, i) => (
                  <li key={i} className="flex gap-3 text-[#222222] text-sm md:text-base leading-relaxed">
                    <span className="text-[#A6192E] font-bold text-sm mt-0.5">
                      {i + 1}.
                    </span>
                    <span>{duty}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}