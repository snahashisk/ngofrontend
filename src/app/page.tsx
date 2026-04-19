import ContactBar from "@/components/ContactBar";
import Feature from "@/components/Feature";
import HeroSectionPage from "@/components/HeroSection";
import AboutUsPage01 from "@/components/shadcn-studio/blocks/about-us-page-01/about-us-page-01";
import FeatureMain from "@/components/FeatureMain";
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
      <Feature />
    </div>
  );
};

export default page;
