import { SectionCLI } from "@/components/sections/section-cli";
import { SectionHero } from "@/components/sections/section-hero";
import { SectionSupported } from "@/components/sections/section-supported";
import { SectionWhy } from "@/components/sections/section-why";

const HomePage = () => (
  <>
    <SectionHero />
    <SectionSupported />
    <SectionCLI />
    <SectionWhy />
  </>
);

export default HomePage;
