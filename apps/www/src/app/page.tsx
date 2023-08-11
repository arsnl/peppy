import { SectionCLI } from "@/components/sections/section-cli";
import { SectionFeatures } from "@/components/sections/section-features";
import { SectionHero } from "@/components/sections/section-hero";
import { SectionSupports } from "@/components/sections/section-supports";

const HomePage = () => (
  <>
    <SectionHero />
    <SectionFeatures />
    <SectionSupports />
    <SectionCLI />
  </>
);

export default HomePage;
