"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { siteContent } from "@/data/content";

export default function NextSteps() {
  const { nextSteps } = siteContent;

  return (
    <section
      id="next-steps"
      className="w-full bg-[#3F5243] py-16 sm:py-20 lg:pt-[86px] lg:pb-[74px] scroll-mt-16"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-[80px]">
        {/* Top Header Split */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 lg:gap-12">
          <div>
            <p className="text-[18px] sm:text-[20px] lg:text-[22px] font-normal uppercase tracking-[-0.01em] text-[#BFB9AC]">
              {nextSteps.eyebrow}
            </p>
            <h2 className="mt-3 lg:mt-[20px] text-[30px] sm:text-[36px] lg:text-[40px] leading-[1.2] font-normal tracking-[-0.025em] text-[#F7F5F0]">
              {nextSteps.heading}
            </h2>
          </div>

          <p className="text-[15px] leading-[1.7] font-normal text-[#BFB9AC] max-w-[538px] lg:pb-1">
            {nextSteps.introParagraph}
          </p>
        </div>

        {/* 4-Column Path Cards (305px each on 1280px container, 20px gap, items-start) */}
        <div className="mt-10 lg:mt-[46px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px] items-start">
          {nextSteps.cards.map((card, idx) => (
            <motion.article
              key={card.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: idx * 0.07 }}
              className="border border-[#EFECE6]/85 p-[25px] flex flex-col justify-between"
            >
              <div>
                <h3 className="text-[22px] lg:text-[23px] leading-[1.35] font-normal tracking-[-0.015em] text-[#F7F5F0]">
                  {card.title}
                </h3>

                <p className="mt-[14px] text-[15px] leading-[1.68] font-normal text-[#BFB9AC]">
                  {card.description}
                </p>
              </div>

              <div className="mt-[24px]">
                <a
                  href={card.href}
                  className={
                    card.variant === "solid"
                      ? "group w-full h-[46px] px-3 bg-[#F7F5F0] text-[#1C1B19] font-mono text-[11.5px] font-normal uppercase tracking-[0.08em] inline-flex items-center justify-center gap-2 hover:bg-white transition-colors"
                      : "group w-full h-[46px] px-3 bg-transparent border border-[#EFECE6]/85 text-[#F7F5F0] font-mono text-[11.5px] font-normal uppercase tracking-[0.08em] inline-flex items-center justify-center gap-2 hover:bg-[#F7F5F0] hover:text-[#1C1B19] transition-colors"
                  }
                >
                  <span>{card.ctaLabel}</span>
                  <ArrowRight className="w-3.5 h-3.5 stroke-[1.75] transition-transform duration-200 group-hover:translate-x-0.5" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

