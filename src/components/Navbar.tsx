"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { siteContent } from "@/data/content";
import SmartImage from "./SmartImage";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { brand, navigation } = siteContent;

  // Lock background scroll when full-screen mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <header className="w-full bg-[#EFECE6] sticky top-0 z-50 border-b border-transparent transition-colors">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-[80px] pt-[36px] pb-[20px] flex items-center justify-between relative z-50">
        {/* Brand Logo (137x61 in Figma) */}
        <a
          href="#"
          onClick={() => setMobileMenuOpen(false)}
          className="block shrink-0 focus:outline-none"
          aria-label={brand.name}
        >
          <SmartImage
            src={brand.logo.src}
            alt={brand.logo.alt}
            fallbackLabel="CRYSTAL KIZOR"
            priority
            className="w-[115px] sm:w-[137px] h-[51px] sm:h-[61px]"
            imgClassName="!object-contain"
          />
        </a>

        {/* Center Navigation Links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-7 lg:gap-[42px]"
        >
          {navigation.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[14px] lg:text-[15px] font-normal tracking-[-0.01em] text-[#1C1B19] hover:text-[#3F5243] transition-colors uppercase"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA Button (214x45 in Figma) */}
        <div className="hidden md:block">
          <a
            href={navigation.cta.href}
            className="group inline-flex items-center justify-center gap-2.5 w-[190px] lg:w-[214px] h-[45px] bg-[#3F5243] text-[#F7F5F0] text-[14px] lg:text-[15px] font-normal uppercase tracking-[0.01em] hover:bg-[#334336] transition-all"
          >
            <span>{navigation.cta.label}</span>
            <ArrowRight className="w-4 h-4 stroke-[1.75] transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </div>

        {/* Mobile Hamburger Trigger */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
          className="md:hidden inline-flex items-center justify-center p-2 text-[#1C1B19] hover:text-[#3F5243] transition-colors"
        >
          {mobileMenuOpen ? (
            <X className="w-7 h-7 stroke-[1.75]" />
          ) : (
            <Menu className="w-7 h-7 stroke-[1.75]" />
          )}
        </button>
      </div>

      {/* Full-Screen Mobile Navigation Overlay (covers viewport without pushing content down) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="md:hidden fixed inset-0 top-0 z-40 bg-[#EFECE6] pt-[120px] pb-10 px-6 flex flex-col justify-between overflow-y-auto"
          >
            <nav
              aria-label="Mobile Navigation"
              className="flex flex-col space-y-6 pt-4"
            >
              {navigation.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[24px] font-normal tracking-[-0.02em] text-[#1C1B19] hover:text-[#3F5243] py-2 border-b border-[#BFB9AC]/50 uppercase transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="pt-8">
              <a
                href={navigation.cta.href}
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center justify-center gap-2.5 w-full h-[56px] bg-[#3F5243] text-[#F7F5F0] text-[16px] font-normal uppercase tracking-[0.01em] hover:bg-[#334336] transition-colors"
              >
                <span>{navigation.cta.label}</span>
                <ArrowRight className="w-4 h-4 stroke-[1.75]" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
