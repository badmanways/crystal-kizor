"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import { siteContent } from "@/data/content";

export default function QuickNavBar() {
  const { quickVisit } = siteContent;

  return (
    <section
      aria-label="Quick Visitor Navigation"
      className="w-full bg-[#161615] text-[#F7F5F0]"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-[80px] py-7 lg:py-[31px] min-h-[166px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[66px]">
        {/* Left prompt label */}
        <p className="text-[19px] sm:text-[21px] lg:text-[22px] font-normal tracking-[-0.01em] text-[#F7F5F0] shrink-0">
          {quickVisit.label}
        </p>

        {/* Two rows of bordered action pills */}
        <div className="flex flex-col gap-[12px]">
          {/* Row 1 (01, 02, 03) */}
          <div className="flex flex-wrap items-center gap-[10px]">
            {quickVisit.row1.map((item) => (
              <a
                key={item.number}
                href={item.href}
                className="group inline-flex items-center gap-1.5 h-[46px] px-[14px] border border-[#605D57]/80 hover:border-[#F7F5F0] hover:bg-[#F7F5F0]/5 text-[#F7F5F0] text-[14px] sm:text-[15px] font-normal tracking-[-0.01em] transition-all"
              >
                <span>
                  {item.number} {item.label}
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 stroke-[1.75] text-[#F7F5F0] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            ))}
          </div>

          {/* Row 2 (04, 05) */}
          <div className="flex flex-wrap items-center gap-[10px]">
            {quickVisit.row2.map((item) => (
              <a
                key={item.number}
                href={item.href}
                className="group inline-flex items-center gap-1.5 h-[46px] px-[14px] border border-[#605D57]/80 hover:border-[#F7F5F0] hover:bg-[#F7F5F0]/5 text-[#F7F5F0] text-[14px] sm:text-[15px] font-normal tracking-[-0.01em] transition-all"
              >
                <span>
                  {item.number} {item.label}
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 stroke-[1.75] text-[#F7F5F0] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

