"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Apply() {
  return (
    <section id="apply" className="section-padding bg-[#A6192E]">
      <div className="container-custom px-5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-[#A6192E] rounded-3xl p-6 md:p-12 text-center text-white"
        >
          <div className="text-4xl mb-3">📝</div>
          <h2 className="text-2xl md:text-3xl font-bold">立即报名加入招协</h2>
          <p className="text-white/80 mt-2 text-sm md:text-base">
            填写问卷星报名问卷，开启你的招协之旅
          </p>

          <div className="flex flex-col items-center mt-6">
            <button
              onClick={() =>
                window.open("https://docs.qq.com/form/page/DVXpNb2xKdEpWZ3pH", "_blank")
              }
              className="bg-white text-[#A6192E] px-10 py-3 rounded-full font-semibold hover:bg-[#F7F8FA] hover:scale-105 transition-all duration-300 shadow-lg text-sm md:text-base"
            >
              点击填写报名问卷
            </button>

            <div className="mt-6 bg-white/10 rounded-2xl p-4 inline-block">
              <div className="w-32 h-32 relative rounded-xl overflow-hidden">
                <Image
                  src="/images/qrcode-form.jpg"
                  alt="问卷星报名二维码"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-white/60 text-xs mt-2">扫码立即报名</p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-4 text-white/80 text-sm">
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 relative rounded-xl overflow-hidden bg-white/10">
                <Image
                  src="/images/qrcode-group.jpg"
                  alt="招新咨询群二维码"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="mt-1 text-white/60 text-xs">招新咨询群</span>
            </div>
          </div>

          <div className="mt-6 text-white/70 text-sm space-y-1">
            <p>联系人：武老师 0755-26535843</p>
            <p>地址：汇元楼339室</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}