import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import QuickNavBar from "@/components/QuickNavBar";
import Philosophy from "@/components/Philosophy";
import Ecosystem from "@/components/Ecosystem";
import ResearchMedia from "@/components/ResearchMedia";
import NextSteps from "@/components/NextSteps";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#EFECE6]">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <QuickNavBar />
        <Philosophy />
        <Ecosystem />
        <ResearchMedia />
        <NextSteps />
      </main>
      <Footer />
    </div>
  );
}

