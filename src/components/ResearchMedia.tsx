"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import { siteContent } from "@/data/content";
import SmartImage from "./SmartImage";

export default function ResearchMedia() {
  const { researchMedia } = siteContent;

  return (
    <section
      id="research-media"
      className="w-full bg-[#EFECE6] pt-10 sm:pt-14 lg:pt-[70px] pb-16 lg:pb-[74px] scroll-mt-20"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-[80px]">
        {/* Section Eyebrow */}
        <p className="text-[18px] sm:text-[20px] lg:text-[22px] font-normal uppercase tracking-[-0.01em] text-[#3F5243]">
          {researchMedia.eyebrow}
        </p>

        {/* Heading + Read Full Archive Link */}
        <div className="mt-3 lg:mt-[18px] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h2 className="text-[30px] sm:text-[36px] lg:text-[40px] leading-[1.2] font-normal tracking-[-0.025em] text-[#1C1B19]">
            {researchMedia.heading}
          </h2>

          <a
            href={researchMedia.archiveLink.href}
            className="group inline-flex items-center gap-2 self-start sm:self-auto text-[15px] font-normal text-[#1C1B19] border-b border-[#1C1B19] pb-[5px] hover:text-[#3F5243] hover:border-[#3F5243] transition-colors"
          >
            <span>{researchMedia.archiveLink.label}</span>
            <ArrowRight className="w-4 h-4 stroke-[1.75] transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </div>

        {/* 3-Column Research Cards with Architectural Thumbnails */}
        <div className="mt-8 lg:mt-[36px] grid grid-cols-1 md:grid-cols-3 gap-[20px] items-stretch">
          {researchMedia.items.map((item, idx) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className="group/card bg-[#F7F5F0] border border-[#DDDBD6] p-[25px] flex flex-col justify-between hover:border-[#BFB9AC] transition-colors h-full"
            >
              <div>
                {/* Card Thumbnail */}
                {item.image && (
                  <div className="w-full h-[190px] mb-[20px] overflow-hidden bg-[#E4E0D8]">
                    <SmartImage
                      src={item.image.src}
                      alt={item.image.alt}
                      fallbackLabel={item.category}
                      objectPosition={item.image.objectPosition || "center"}
                      className="w-full h-full"
                      imgClassName="transition-transform duration-500 group-hover/card:scale-[1.03]"
                    />
                  </div>
                )}

                <span className="block font-mono text-[11px] font-normal uppercase tracking-[0.06em] text-[#605D57]">
                  {item.category}
                </span>

                <h3 className="mt-[14px] text-[22px] lg:text-[24px] leading-[1.35] font-normal tracking-[-0.015em] text-[#1C1B19]">
                  {item.title}
                </h3>

                <p className="mt-[14px] text-[15px] leading-[1.68] font-normal text-[#605D57]">
                  {item.description}
                </p>
              </div>

              <div className="mt-[24px] pt-1">
                <a
                  href={item.href}
                  className="group inline-flex items-center gap-1 text-[13px] font-medium tracking-[-0.01em] text-[#1C1B19] hover:text-[#3F5243] transition-colors"
                >
                  <span>{item.ctaLabel}</span>
                  {item.ctaIcon === "download" ? (
                    <ArrowDown className="w-3.5 h-3.5 stroke-[2] transition-transform duration-200 group-hover:translate-y-0.5" />
                  ) : (
                    <ArrowRight className="w-3.5 h-3.5 stroke-[2] transition-transform duration-200 group-hover:translate-x-0.5" />
                  )}
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
