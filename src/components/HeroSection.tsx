import HeroSection from "@/components/shadcn-studio/blocks/hero-section-01/hero-section-01";
import Header from "@/components/shadcn-studio/blocks/hero-section-01/header";
import type { NavigationSection } from "@/components/shadcn-studio/blocks/hero-section-01/header";

const navigationData: NavigationSection[] = [
  {
    title: "Home",
    href: "#",
  },
  {
    title: "About",
    href: "#",
  },
  {
    title: "Donation",
    href: "#",
  },
  {
    title: "Events",
    href: "#",
  },
  {
    title: "Contact",
    href: "#",
  },
];

const HeroSectionPage = () => {
  return (
    <>
      {/* Header Section */}
      <Header navigationData={navigationData} />

      {/* Main Content */}
      <main className="flex flex-col">
        <HeroSection />
      </main>
    </>
  );
};

export default HeroSectionPage;
