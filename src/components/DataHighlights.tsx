"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

const data = [
  { value: 2015, label: "协会成立", suffix: "" },
  { value: 1000, label: "累计志愿者", suffix: "+" },
  { value: 100, label: "招生活动", suffix: "+" },
  { value: 100000, label: "服务考生", suffix: "+" },
];

export default function DataHighlights() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [counts, setCounts] = useState(data.map(() => 0));

  useEffect(() => {
    if (isInView) {
      data.forEach((item, index) => {
        const target = item.value;
        const duration = 1500;
        const steps = 60;
        const stepValue = target / steps;
        let current = 0;
        let step = 0;
        const interval = setInterval(() => {
          step++;
          current += stepValue;
          if (step >= steps) {
            current = target;
            clearInterval(interval);
          }
          setCounts((prev) => {
            const newCounts = [...prev];
            newCounts[index] = Math.floor(current);
            return newCounts;
          });
        }, duration / steps);
      });
    }
  }, [isInView]);

  return (
    <section ref={ref} className="bg-[#A6192E] py-12">
      <div className="container-custom px-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
          {data.map((item, index) => (
            <div key={index}>
              <div className="text-3xl md:text-4xl font-bold">
                {counts[index]}
                {item.suffix}
              </div>
              <div className="text-sm opacity-80 mt-1">{item.label}</div>
              {index < data.length - 1 && (
                <div className="hidden md:block w-px h-10 bg-white/30 mx-auto mt-2" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}