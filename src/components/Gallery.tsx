"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  { id: 1, src: "/images/activity-1.jpg", label: "寒招宣讲会现场" },
  { id: 2, src: "/images/activity-2.jpg", label: "明信片漂流活动" },
  { id: 3, src: "/images/activity-3.jpg", label: "校园开放日咨询" },
  { id: 4, src: "/images/activity-4.jpg", label: "寒招队长面试" },
  { id: 5, src: "/images/activity-5.jpg", label: "招生咨询群培训会" },
  { id: 6, src: "/images/activity-6.jpg", label: "志愿者合影" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="section-padding bg-white">
      <div className="container-custom px-5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="section-title">活动风采</h2>
          <div className="section-divider" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
          {images.map((img, index) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="rounded-2xl overflow-hidden shadow-sm bg-[#F7F8FA]"
            >
              <div className="aspect-[16/9] relative bg-[#E8E9EB]">
                <Image
                  src={img.src}
                  alt={img.label}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-center text-[#666] text-xs py-2">
                {img.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}