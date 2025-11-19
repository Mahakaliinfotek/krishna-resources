import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import LandscapeIcon from "@mui/icons-material/Landscape";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import TransferWithinAStationIcon from "@mui/icons-material/TransferWithinAStation";
import SailingIcon from "@mui/icons-material/Sailing";

export default function BusinessFocusSection() {
    const items = [
        {
            icon: <LandscapeIcon />,
            title: "Pit",
            desc: "Extraction & ROM Management",
        },
        {
            icon: <AirportShuttleIcon />,
            title: "Haul & Jetty",
            desc: "Transport to Loading Point",
        },
        {
            icon: <LocalShippingIcon />,
            title: "Barge",
            desc: "River & Coastal Logistics",
        },
        {
            icon: <TransferWithinAStationIcon />,
            title: "Transshipment",
            desc: "Barge to Vessel Transfer",
        },
        {
            icon: <SailingIcon />,
            title: "Mother Vessel",
            desc: "International Shipping",
        },
    ];

    return (
        <Box
            sx={{
                width: "100%",
                py: { xs: 6, md: 4 },
                px: { xs: 2, md: 6 },
                backgroundColor: "#E6FBFA",
                fontFamily: "Manrope !important",
            }}
        >
            <Box
                sx={{
                    maxWidth: "1400px",
                    mx: "auto",
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    gap: { xs: 6, md: 10 },
                    alignItems: { xs: "flex-start", md: "center" },
                }}
            >
                {/* LEFT SIDE */}
                <Box sx={{ flex: 1 }}>
                    <Typography
                        sx={{

                            fontSize: { xs: "22px", md: "32px" },
                            fontWeight: 700,
                            fontFamily: "Manrope !important",
                            color: "#2F6F6F",
                            mb: 2,
                        }}
                    >
                        Business Focus
                    </Typography>

                    <Typography
                        sx={{
                            fontSize: { xs: "14px", md: "16px" },
                            lineHeight: 1.6,
                            color: "#1f2d2d",
                            maxWidth: "95%",
                            fontFamily: "Manrope !important",
                        }}
                    >
                        Upstream coal mining and in-country trading in East and South
                        Kalimantan. The team, led by Mr. D. K. Prasad, manages the chain
                        from pit to transshipment, including mine operations, quality
                        assurance, barge logistics, and vessel loading. The objective is
                        consistent specifications, predictable schedules, and clear
                        documentation for buyers.
                    </Typography>
                </Box>


            </Box>
        </Box>
    );
}
