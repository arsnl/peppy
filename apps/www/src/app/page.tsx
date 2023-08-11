import { SectionCLI } from "@/components/sections/section-cli";
import { SectionFeatures } from "@/components/sections/section-features";
import { SectionHero } from "@/components/sections/section-hero";
import { SectionSupported } from "@/components/sections/section-supported";

const HomePage = () => (
  <>
    <SectionHero />
    <SectionSupported />
    <SectionCLI />
    <SectionFeatures />
  </>
);

export default HomePage;
