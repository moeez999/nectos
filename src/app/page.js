import HeroSection from "./components/heroSection";
import HowItworks from "./components/howItworks";
import Features from "./components/features";
import DigitalBusinessCard from "./components/digitalBusinessCard";
import BusinessCard from "./components/businessCard";
import Testimonials from "./components/testimonials";
import Faqs from "./components/faqs";
import Footer from "./components/footer";
import CreateDigitalCard from "./components/createDigitalCard";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <HowItworks />
      <Features />
      <DigitalBusinessCard />
      <Testimonials />
      <BusinessCard />
      <Faqs />
      <CreateDigitalCard />
      <Footer />
    </div>
  );
}
