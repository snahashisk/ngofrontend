import HeroSectionPage from "@/components/HeroSection";
import AboutUsPage01 from "@/components/shadcn-studio/blocks/about-us-page-01/about-us-page-01";
import FeatureMain from "@/components/FeatureMain";
import GalleryPage from "@/components/GalleryPage";
import Testimonials from "@/components/Testimonials";
import Events from "@/components/Events";
import TeamPage from "@/components/TeamPage";
import Footer from "@/components/shadcn-studio/blocks/footer-component-01/footer-component-01";
import { FaChildren, FaHandHoldingDollar, FaGlobe, FaChartLine } from "react-icons/fa6";

const page = () => {
  const stats = [
    { icon: FaChildren, value: "100+", description: "Children Supported" },
    { icon: FaHandHoldingDollar, value: "₹5500", description: "Monthly Donated" },
    { icon: FaGlobe, value: "1100+", description: "Global Volunteers" },
    { icon: FaChartLine, value: "7000+", description: "Fund Raised" },
  ];

  return (
    <div>
      {/* <ContactBar /> */}
      <HeroSectionPage />
      <AboutUsPage01 stats={stats} />
      <FeatureMain />
      <GalleryPage />
      <Testimonials />
      <Events />
      <TeamPage />
      <Footer />
    </div>
  );
};

export default page;
