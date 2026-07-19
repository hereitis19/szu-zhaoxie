"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom px-5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="text-3xl mb-2">🏛️</div>
          <h2 className="section-title">关于深圳大学招生志愿者协会</h2>
          <div className="section-divider" />

          <p className="text-[#222222] text-base md:text-lg leading-relaxed">
            深圳大学招生志愿者协会（简称"深大招协"），成立于
            <span className="text-[#A6192E] font-semibold"> 2015 </span>
            年，是由深圳大学招生办公室统一管理和指导的校级学生组织。
          </p>
          <p className="text-[#222222] text-base md:text-lg leading-relaxed mt-4">
            协会秉承
            <span className="text-[#A6192E] font-semibold">
              "专业、热情、甘于奉献"
            </span>
            的精神，以
            <span className="text-[#A6192E] font-semibold">
              "我的深大我宣传"
            </span>
            为宗旨，致力于充分调动在校学生的积极性和创造性，构建全方位的招生宣传工作体系。
          </p>
          <p className="text-[#222222] text-base md:text-lg leading-relaxed mt-4">
            主要活动包括：承办全校性大型活动"寒假返母校宣传深大"、接待中学生来访、参与校园开放日以及各类招生咨询会等。
          </p>

          <div className="mt-6 rounded-2xl overflow-hidden shadow-lg relative w-full h-48 md:h-64 bg-[#F0F1F3]">
            <Image
              src="/images/scene.png"
              alt="深圳大学校园风景"
              fill
              className="object-cover"
            />
          </div>

          <p className="text-[#222222] text-base md:text-lg leading-relaxed mt-6">
            十一年来，招协初心不改，曾多次荣获市级、校级优秀/十佳学生组织，寒招活动也曾获得校十佳文化活动的荣誉称号。
          </p>
        </motion.div>
      </div>
    </section>
  );
}