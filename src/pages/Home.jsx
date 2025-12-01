



import { Box } from "@mui/material";
import KrishnaResourcesHero from "../components/KrishnaResourcesHero";
import BusinessFocusSection from "../components/BusinessFocusSection";
import CoreOfferings from "../components/CoreOfferings";
import ComplianceHSE from "../components/ComplianceHSE";
import WhatMakesUsDifferent from "../components/WhatMakesUsDifferent";
import MarketsReach from "../components/MarketsReach";

import Achievements from "../components/Achievements";
import Header from "../layouts/Header";
import HeroSlider from "../components/common/HeroSlider";
import PeopleCultureSlider from "../components/homepage/PeopleCultureSlider";
import VisionSection from "../components/homepage/VisionSection";
import BusinessesSection from "../components/homepage/BusinessesSection";
import HistorySection from "../components/homepage/HistorySection";

import MediaCSRSection from "../components/homepage/MediaCSRSection";
import CompanyStrip from "../components/common/CompanyStrip";

import ContactUs from "../components/homepage/ContactUs";
import SustainabilitySection from "../components/homepage/SustainabilitySection";

export default function HomePage() {
    return (
        <>
            <Header />
            <HeroSlider />
            <CompanyStrip />

            {/* <KrishnaResourcesHero /> */}
            <BusinessFocusSection />
            <CoreOfferings />
            <WhatMakesUsDifferent />
            <Achievements />
            <MarketsReach />
            {/* <Footer /> */}




            <PeopleCultureSlider />
            <VisionSection />
            <BusinessesSection />
            <HistorySection />
            <SustainabilitySection />
            <MediaCSRSection />
            <CompanyStrip />
            <ContactUs />




        </>
    );
}
