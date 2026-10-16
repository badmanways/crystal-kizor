"use client";

import React from "react";
import { Mail } from "lucide-react";
import { siteContent, SocialLink } from "@/data/content";

function SocialIcon({ platform }: { platform: SocialLink["platform"] }) {
  switch (platform) {
    case "instagram":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-[20px] h-[20px]"
        >
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      );
    case "x":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-[20px] h-[20px]"
        >
          <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
          <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
        </svg>
      );
    case "linkedin":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-[20px] h-[20px]"
        >
          <rect width="18" height="18" x="3" y="3" rx="2" />
          <path d="M8 11v5" />
          <path d="M8 8v.01" />
          <path d="M12 16v-5" />
          <path d="M16 16v-3a2 2 0 0 0 -4 0" />
        </svg>
      );
    case "youtube":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-[20px] h-[20px]"
        >
          <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
          <path d="m10 15 5-3-5-3z" />
        </svg>
      );
    case "tiktok":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-[20px] h-[20px]"
        >
          <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
        </svg>
      );
  }
}

export default function Footer() {
  const { brand, footer } = siteContent;

  return (
    <footer className="w-full bg-[#161615] text-[#F7F5F0] pt-16 sm:pt-20 lg:pt-[78px] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-[80px]">
        {/* Main Footer Grid */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-8">
          {/* Left Email CTA Block */}
          <div className="max-w-[490px]">
            <p className="text-[18px] sm:text-[20px] font-normal uppercase tracking-[-0.01em] text-[#BFB9AC]">
              {footer.enquiryHeading}
            </p>

            {/* Rounded Email Pill (433x66 in Figma) */}
            <a
              href={`mailto:${brand.email}`}
              className="mt-6 lg:mt-[24px] inline-flex items-center justify-center gap-3 w-full sm:w-[433px] h-[66px] rounded-full bg-[#F7F5F0] text-[#1C1B19] text-[19px] sm:text-[22px] font-normal tracking-[-0.01em] hover:bg-white transition-colors"
            >
              <Mail className="w-[22px] h-[22px] stroke-[1.75] text-[#1C1B19]" />
              <span>{brand.email}</span>
            </a>
          </div>

          {/* Right 3 Navigation Columns + Socials under 3rd Column */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 lg:gap-[44px] lg:w-[630px]">
            {footer.columns.map((col, idx) => (
              <div key={col.heading} className="flex flex-col justify-between">
                <div>
                  <h3
                    className={`text-[17px] leading-[1.3] font-normal text-[#F7F5F0] ${
                      col.headingUppercase ? "uppercase" : ""
                    }`}
                  >
                    {col.heading}
                  </h3>

                  <ul className="mt-5 lg:mt-[22px] space-y-4 lg:space-y-[20px]">
                    {col.links.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          className="text-[17px] leading-[1.35] font-normal text-[#605D57] hover:text-[#F7F5F0] transition-colors block"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Connect with me via: sits below the 3rd column in Figma */}
                {idx === 2 && (
                  <div className="mt-10 lg:mt-[76px]">
                    <p className="text-[17px] font-normal text-[#F7F5F0]">
                      {footer.socialHeading}
                    </p>
                    <div className="mt-4 flex items-center gap-[18px]">
                      {footer.socials.map((social) => (
                        <a
                          key={social.platform}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={social.label}
                          className="text-[#F7F5F0] hover:text-[#BFB9AC] transition-colors"
                        >
                          <SocialIcon platform={social.platform} />
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Centered Copyright */}
        <div className="mt-16 lg:mt-[76px] text-center">
          <p className="text-[16px] sm:text-[18px] font-normal tracking-[-0.01em] text-[#F7F5F0]">
            {brand.copyright}
          </p>
        </div>
      </div>

      {/* Edge-to-Edge Massive Wordmark at Bottom */}
      <div
        aria-hidden="true"
        className="mt-6 lg:mt-[28px] w-full overflow-hidden select-none leading-none"
      >
        <div className="max-w-[1440px] mx-auto">
          <p className="text-[13.6vw] min-[1440px]:text-[196px] font-bold uppercase tracking-[-0.04em] text-[#F7F5F0] leading-[0.74] text-center whitespace-nowrap translate-y-[8%]">
            {brand.footerWordmark}
          </p>
        </div>
      </div>
    </footer>
  );
}

