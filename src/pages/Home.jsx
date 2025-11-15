



import { Box } from "@mui/material";
import KrishnaResourcesHero from "../components/KrishnaResourcesHero";
import BusinessFocusSection from "../components/BusinessFocusSection";
import CoreOfferings from "../components/CoreOfferings";
import ComplianceHSE from "../components/ComplianceHSE";
import WhatMakesUsDifferent from "../components/WhatMakesUsDifferent";
import MarketsReach from "../components/MarketsReach";
import Footer from "../components/Footer";
import Achievements from "../components/Achievements";

export default function HomePage() {
    return (
        <>

            <Box xs={{

            }}>
                <KrishnaResourcesHero />
                <BusinessFocusSection />
                <CoreOfferings />
                <ComplianceHSE />
                <WhatMakesUsDifferent />
                <Achievements />
                <MarketsReach />
                <Footer />


            </Box>



        </>
    );
}
