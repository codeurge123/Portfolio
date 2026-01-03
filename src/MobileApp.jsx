import { useState } from "react";
import MobileTopBar from "./components/MobileTopBar";
import MobileBottomTabs from "./components/MobileBottomTabs";
import MobileSwipeContainer from "./components/MobileSwipeContainer";
import SpecialMenu from "./components/SpecialMenu";

import HomePage from "./components/HomePage";
import ProjectsPage from "./components/ProjectsPage";
import ResumePage from "./components/Resume";
import ContactPage from "./components/ContactPage";
import Footer from "./components/Footer";

export default function MobileApp() {
  const [active, setActive] = useState(0);
  const [specialOpen, setSpecialOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden relative">
      <MobileTopBar />

      <MobileSwipeContainer active={active} setActive={setActive}>
        <HomePage />
        <ProjectsPage />
        <ResumePage />
        <ContactPage />
      </MobileSwipeContainer>

      {/* SPECIAL MENU */}
      <SpecialMenu open={specialOpen} onClose={() => setSpecialOpen(false)} />

      <MobileBottomTabs
        active={active}
        setActive={setActive}
        onSpecial={() => setSpecialOpen((v) => !v)}
      />

    </div>
  );
}
