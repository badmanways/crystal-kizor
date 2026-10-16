"use client";

import React from "react";
import { motion } from "framer-motion";
import { siteContent } from "@/data/content";

export default function Philosophy() {
  const { philosophy } = siteContent;

  return (
    <section
      id="my-philosophy"
      className="w-full bg-[#EFECE6] pt-16 sm:pt-20 lg:pt-[96px] pb-12 lg:pb-[70px] scroll-mt-20"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-[80px]">
        {/* Section Eyebrow */}
        <p className="text-[18px] sm:text-[20px] lg:text-[22px] font-normal uppercase tracking-[-0.01em] text-[#3F5243]">
          {philosophy.eyebrow}
        </p>

        {/* Split Heading + Context Copy */}
        <div className="mt-4 lg:mt-[20px] flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 lg:gap-10">
          <h2 className="text-[26px] sm:text-[34px] lg:text-[34px] xl:text-[40px] leading-[1.24] font-normal tracking-[-0.025em] text-[#1C1B19] shrink-0">
            <span className="block lg:whitespace-nowrap">
              {philosophy.headingLine1}
            </span>
            <span className="block lg:whitespace-nowrap">
              {philosophy.headingLine2Prefix}
              <span className="italic text-[#3F5243]">
                {philosophy.headingLine2Italic}
              </span>
            </span>
          </h2>

          <p className="text-[15px] sm:text-[16px] leading-[1.85] font-normal text-[#1C1B19] max-w-[526px] lg:pt-1">
            {philosophy.introParagraph}
          </p>
        </div>

        {/* Three Pillar Cards (413px each on 1280px container, 20px gap, 248px height) */}
        <div className="mt-10 lg:mt-[44px] grid grid-cols-1 md:grid-cols-3 gap-[20px]">
          {philosophy.pillars.map((pillar, idx) => (
            <motion.article
              key={pillar.pillarLabel}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className="bg-[#3F5243] p-[25px] min-h-[248px] flex flex-col justify-between"
            >
              <div>
                <span className="block text-[11px] font-normal uppercase tracking-[0.04em] text-[#BFB9AC]">
                  {pillar.pillarLabel}
                </span>

                <h3 className="mt-[10px] text-[22px] lg:text-[24px] leading-[1.25] font-normal tracking-[-0.015em] text-[#F7F5F0]">
                  {pillar.title}
                </h3>

                <p className="mt-[14px] text-[14.5px] lg:text-[15px] leading-[1.65] font-normal text-[#BFB9AC]">
                  {pillar.description}
                </p>
              </div>

              {/* Bottom White Entity Pills */}
              <div className="mt-5 pt-1 flex flex-wrap items-center gap-[6px]">
                {pillar.tags.map((tag) => (
                  <a
                    key={tag.label}
                    href={tag.href}
                    className="inline-flex items-center justify-center h-[24px] px-[10px] bg-[#F7F5F0] text-[#1C1B19] text-[12px] font-normal tracking-[-0.01em] hover:bg-white transition-colors"
                  >
                    {tag.label}
                  </a>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
