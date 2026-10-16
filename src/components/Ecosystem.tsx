"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { siteContent, EcosystemCardData, SlideImage } from "@/data/content";
import SmartImage from "./SmartImage";

function CategoryBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center h-[24px] px-[10px] bg-[#F7F5F0] border border-[#BFB9AC]/70 text-[11px] font-normal uppercase tracking-[0.02em] text-[#1C1B19]">
      {label}
    </span>
  );
}

function CardImageSlideshow({
  slides,
  fallbackLabel,
  intervalMs = 2000,
}: {
  slides: SlideImage[];
  fallbackLabel: string;
  intervalMs?: number;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (slides.length <= 1 || isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, intervalMs);
    return () => clearInterval(timer);
  }, [slides.length, isPaused, intervalMs]);

  if (!slides.length) return null;

  const activeSlide = slides[currentIndex] || slides[0];

  const handlePrev = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <div
      className="relative w-full h-full overflow-hidden group/slider bg-[#E4E0D8]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.div
          key={activeSlide.src}
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-full h-full"
        >
          <SmartImage
            src={activeSlide.src}
            alt={activeSlide.alt}
            fallbackLabel={fallbackLabel}
            objectPosition={activeSlide.objectPosition || "center"}
            className="w-full h-full"
          />
        </motion.div>
      </AnimatePresence>

      {/* Subtle Prev / Next Controls on Hover */}
      {slides.length > 1 && (
        <>
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous slide"
            className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 flex items-center justify-center bg-[#161615]/60 hover:bg-[#161615]/85 text-[#F7F5F0] opacity-0 group-hover/slider:opacity-100 transition-opacity duration-200"
          >
            <ChevronLeft className="w-4 h-4 stroke-[2]" />
          </button>

          <button
            type="button"
            onClick={handleNext}
            aria-label="Next slide"
            className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 flex items-center justify-center bg-[#161615]/60 hover:bg-[#161615]/85 text-[#F7F5F0] opacity-0 group-hover/slider:opacity-100 transition-opacity duration-200"
          >
            <ChevronRight className="w-4 h-4 stroke-[2]" />
          </button>

          {/* Minimal Slide Indicators at Bottom Center */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 px-2.5 py-1 bg-[#161615]/45 backdrop-blur-[2px]">
            {slides.map((slide, idx) => (
              <button
                key={slide.src}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                aria-label={`View slide ${idx + 1}`}
                className={`h-[4px] transition-all duration-300 ${
                  idx === currentIndex
                    ? "w-5 bg-[#F7F5F0]"
                    : "w-1.5 bg-[#F7F5F0]/50 hover:bg-[#F7F5F0]/80"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function CompactEcosystemCard({
  card,
  delay = 0,
}: {
  card: EcosystemCardData;
  delay?: number;
}) {
  // Side-by-side portrait split when a compact card has an image (Speaking Engagements)
  if (card.image) {
    return (
      <motion.article
        id={card.id}
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.45, delay }}
        className="flex-1 border border-[#BFB9AC] bg-[#EFECE6] p-[25px] min-h-[274px] flex flex-col sm:flex-row gap-5 items-stretch justify-between scroll-mt-24 hover:border-[#3F5243]/70 transition-colors"
      >
        <div className="flex-1 flex flex-col justify-between min-w-0">
          <div>
            <div className="flex items-center justify-between gap-2">
              <CategoryBadge label={card.category} />
              {card.badgeRight && (
                <span className="text-[11px] font-normal uppercase tracking-[0.02em] text-[#605D57]">
                  {card.badgeRight}
                </span>
              )}
            </div>

            <h3 className="mt-[14px] text-[26px] lg:text-[29px] leading-[1.18] font-normal tracking-[-0.02em] text-[#3F5243]">
              {card.title}
            </h3>

            <p className="mt-[10px] text-[14.5px] leading-[1.6] font-normal text-[#605D57]">
              {card.description}
            </p>
          </div>

          <div className="mt-4 pt-1 flex justify-start">
            <a
              href={card.href}
              className="group inline-flex items-center gap-1 text-[14px] font-medium tracking-[-0.01em] text-[#1C1B19] hover:text-[#3F5243] transition-colors"
            >
              <span>{card.ctaLabel}</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        {/* Right Portrait Thumbnail — locked to card inner height so bento grid never distorts */}
        <div className="w-full sm:w-[156px] lg:w-[164px] h-[220px] sm:h-auto shrink-0 overflow-hidden">
          <SmartImage
            src={card.image.src}
            alt={card.image.alt}
            fallbackLabel={card.title}
            objectPosition={card.image.objectPosition || "center 18%"}
            className="w-full h-full"
          />
        </div>
      </motion.article>
    );
  }

  return (
    <motion.article
      id={card.id}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay }}
      className="flex-1 border border-[#BFB9AC] bg-[#EFECE6] p-[25px] min-h-[274px] flex flex-col justify-between scroll-mt-24 hover:border-[#3F5243]/70 transition-colors"
    >
      <div>
        <div className="flex items-center justify-between gap-2">
          <CategoryBadge label={card.category} />
          {card.badgeRight && (
            <span className="text-[11px] font-normal uppercase tracking-[0.02em] text-[#605D57]">
              {card.badgeRight}
            </span>
          )}
        </div>

        <h3 className="mt-[16px] text-[28px] lg:text-[32px] leading-[1.2] font-normal tracking-[-0.02em] text-[#3F5243]">
          {card.title}
        </h3>

        <p className="mt-[14px] text-[15px] leading-[1.68] font-normal text-[#605D57]">
          {card.description}
        </p>
      </div>

      <div className="mt-6 flex justify-end">
        <a
          href={card.href}
          className="group inline-flex items-center gap-1 text-[14px] font-medium tracking-[-0.01em] text-[#1C1B19] hover:text-[#3F5243] transition-colors"
        >
          <span>{card.ctaLabel}</span>
          <ArrowUpRight className="w-3.5 h-3.5 stroke-[2] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </motion.article>
  );
}

export default function Ecosystem() {
  const { ecosystem } = siteContent;
  const { studioCoka, speaking, tea, akoAlliance, aliveAndFree, elevated } =
    ecosystem;

  const studioSlides =
    studioCoka.images || (studioCoka.image ? [studioCoka.image] : []);
  const elevatedSlides =
    elevated.images || (elevated.image ? [elevated.image] : []);

  return (
    <section
      id="the-ecosystem"
      className="w-full bg-[#EFECE6] pt-12 sm:pt-16 lg:pt-[76px] pb-12 lg:pb-[76px] scroll-mt-20"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-[80px]">
        {/* Section Eyebrow & Heading */}
        <p className="text-[18px] sm:text-[20px] lg:text-[22px] font-normal uppercase tracking-[-0.01em] text-[#3F5243]">
          {ecosystem.eyebrow}
        </p>
        <h2 className="mt-3 lg:mt-[18px] text-[30px] sm:text-[36px] lg:text-[40px] leading-[1.2] font-normal tracking-[-0.025em] text-[#1C1B19]">
          {ecosystem.heading}
        </h2>

        {/* TOP BENTO ROW: Studio COKA (738px) + Stacked Speaking & TEA (522px) */}
        <div className="mt-8 lg:mt-[36px] grid grid-cols-1 lg:grid-cols-[738fr_522fr] gap-[20px] items-stretch">
          {/* Left Feature Card: Studio COKA (568px tall on desktop) */}
          <motion.article
            id={studioCoka.id}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="h-full border border-[#BFB9AC] bg-[#EFECE6] p-[25px] lg:min-h-[568px] flex flex-col justify-between scroll-mt-24 hover:border-[#3F5243]/70 transition-colors"
          >
            <div className="flex-1 flex flex-col">
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <CategoryBadge label={studioCoka.category} />
                {studioCoka.badgeRight && (
                  <span className="text-[11px] font-normal uppercase tracking-[0.02em] text-[#605D57]">
                    {studioCoka.badgeRight}
                  </span>
                )}
              </div>

              <h3 className="mt-[16px] text-[28px] lg:text-[32px] leading-[1.2] font-normal tracking-[-0.02em] text-[#3F5243]">
                {studioCoka.title}
              </h3>

              <p className="mt-[10px] text-[15px] leading-[1.65] font-normal text-[#605D57] max-w-[650px]">
                {studioCoka.description}
              </p>

              {/* Studio COKA Interactive Image Slideshow */}
              {studioSlides.length > 0 && (
                <div className="mt-[16px] w-full h-[240px] sm:h-[300px] lg:h-[337px] flex-1">
                  <CardImageSlideshow
                    slides={studioSlides}
                    fallbackLabel="Studio COKA Architecture"
                    intervalMs={2000}
                  />
                </div>
              )}
            </div>

            <div className="mt-4 pt-1 flex justify-end">
              <a
                href={studioCoka.href}
                className="group inline-flex items-center gap-1 text-[14px] font-medium tracking-[-0.01em] text-[#1C1B19] hover:text-[#3F5243] transition-colors"
              >
                <span>{studioCoka.ctaLabel}</span>
                <ArrowUpRight className="w-3.5 h-3.5 stroke-[2] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </motion.article>

          {/* Right Stacked Column: Speaking Engagements + TEA */}
          <div className="flex flex-col gap-[20px] h-full">
            <CompactEcosystemCard card={speaking} delay={0.08} />
            <CompactEcosystemCard card={tea} delay={0.14} />
          </div>
        </div>

        {/* BOTTOM BENTO ROW: Stacked AKO Alliance & Alive and Free (413px) + ELEvated (847px) */}
        <div className="mt-[20px] grid grid-cols-1 lg:grid-cols-[413fr_847fr] gap-[20px] items-stretch">
          {/* Left Stacked Column: AKO Alliance + Alive and Free */}
          <div className="flex flex-col gap-[20px] h-full">
            <CompactEcosystemCard card={akoAlliance} delay={0.05} />
            <CompactEcosystemCard card={aliveAndFree} delay={0.12} />
          </div>

          {/* Right Feature Card: ELEvated (568px tall on desktop) */}
          <motion.article
            id={elevated.id}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="h-full border border-[#BFB9AC] bg-[#EFECE6] p-[25px] lg:min-h-[568px] flex flex-col justify-between scroll-mt-24 hover:border-[#3F5243]/70 transition-colors"
          >
            <div className="flex-1 flex flex-col">
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <CategoryBadge label={elevated.category} />
                {elevated.badgeRight && (
                  <span className="text-[11px] font-normal uppercase tracking-[0.02em] text-[#605D57]">
                    {elevated.badgeRight}
                  </span>
                )}
              </div>

              <h3 className="mt-[16px] text-[28px] lg:text-[32px] leading-[1.2] font-normal tracking-[-0.02em] text-[#3F5243]">
                {elevated.title}
              </h3>

              <p className="mt-[12px] text-[15px] leading-[1.68] font-normal text-[#605D57] max-w-[560px]">
                {elevated.description}
              </p>

              {/* ELEvated Interactive Image Slideshow */}
              {elevatedSlides.length > 0 && (
                <div className="mt-[18px] w-full h-[240px] sm:h-[300px] lg:h-[333px] flex-1">
                  <CardImageSlideshow
                    slides={elevatedSlides}
                    fallbackLabel="ELEvated African Craft"
                    intervalMs={2000}
                  />
                </div>
              )}
            </div>

            <div className="mt-4 pt-1 flex justify-end">
              <a
                href={elevated.href}
                className="group inline-flex items-center gap-1 text-[14px] font-medium tracking-[-0.01em] text-[#1C1B19] hover:text-[#3F5243] transition-colors"
              >
                <span>{elevated.ctaLabel}</span>
                <ArrowUpRight className="w-3.5 h-3.5 stroke-[2] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
