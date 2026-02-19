import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PartnersSection from "@/components/PartnersSection";
import ArticlesSection from "@/components/ArticlesSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <PartnersSection />
      <ArticlesSection />
      <WhyChooseUsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
