import { AboutMeSection } from "@/sections/AboutMeSection";
import { ContactSection } from "@/sections/ContactsSection";
import { HeroSection } from "@/sections/HeroSection";
import { ProjectsSection } from "@/sections/ProjectsSection";
import { SlotMachineSplash } from "@/sections/SlotMachineSplash";
import { ToolsSection } from "@/sections/ToolsSection";

export default function Home() {
  return (
    <div>
      <div>
        <HeroSection />
      </div>
      <div className="animate-fade-in-warp">
        <ToolsSection />
        <AboutMeSection />
        <ContactSection />
      </div>
    </div>
  );
}
