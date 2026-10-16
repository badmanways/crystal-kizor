"use client";

import React from "react";
import { motion } from "framer-motion";
import { siteContent } from "@/data/content";
import SmartImage from "./SmartImage";

export default function Hero() {
  const { hero } = siteContent;

  return (
    <section className="w-full bg-[#EFECE6] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-0 lg:pl-[80px] relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-end min-h-[auto] lg:min-h-[816px]">
          {/* Left Content Column */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="lg:col-span-6 xl:col-span-6 pt-6 sm:pt-12 lg:pt-[82px] pb-10 lg:pb-[188px] z-10 max-w-[680px]"
          >
            <h1 className="text-[38px] sm:text-[50px] xl:text-[60px] leading-[1.09] font-normal tracking-[-0.03em] text-[#1C1B19]">
              Designing climate-responsive spaces, contextual products and
              empowering people.
            </h1>

            <p className="mt-6 lg:mt-[28px] text-[17px] sm:text-[19px] lg:text-[20px] leading-[1.6] font-normal tracking-[-0.01em] text-[#605D57] max-w-[640px]">
              <span className="text-[#3F5243] font-medium">
                {hero.highlightedName}
              </span>{" "}
              {hero.subheadlineRest}
            </p>

            {/* Hero CTA Row (305x60 solid + 197x60 outline with 20px gap) */}
            <div className="mt-8 lg:mt-[36px] flex flex-wrap items-center gap-[20px]">
              <a
                href={hero.primaryCta.href}
                className="inline-flex items-center justify-center w-full sm:w-[305px] h-[60px] bg-[#3F5243] text-[#F7F5F0] text-[16px] sm:text-[18px] font-normal uppercase tracking-[0.01em] hover:bg-[#334336] transition-colors"
              >
                {hero.primaryCta.label}
              </a>

              <a
                href={hero.secondaryCta.href}
                className="inline-flex items-center justify-center w-full sm:w-[197px] h-[60px] bg-transparent border border-[#1C1B19] text-[#1C1B19] text-[16px] sm:text-[18px] font-normal uppercase tracking-[0.01em] hover:bg-[#1C1B19] hover:text-[#F7F5F0] transition-colors"
              >
                {hero.secondaryCta.label}
              </a>
            </div>
          </motion.div>

          {/* Right Portrait Column (flush to bottom and right edge on desktop, 689x745 visible box) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1, ease: "easeOut" }}
            className="lg:col-span-6 xl:col-span-6 flex justify-center lg:justify-end items-end self-end w-full"
          >
            <div className="relative w-full max-w-[520px] lg:max-w-[689px] h-[440px] sm:h-[580px] lg:h-[745px] overflow-hidden">
              <SmartImage
                src={hero.portrait.src}
                alt={hero.portrait.alt}
                fallbackLabel="Crystal Kizor Portrait"
                priority
                objectPosition="top center"
                className="w-full h-[500px] sm:h-[660px] lg:h-[874px]"
                imgClassName="!object-contain !object-top"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

