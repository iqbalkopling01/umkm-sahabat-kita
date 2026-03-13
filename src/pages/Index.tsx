import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import ServicesSection from "@/components/ServicesSection";
import FeaturedUMKM from "@/components/FeaturedUMKM";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <ServicesSection />
        <FeaturedUMKM />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
