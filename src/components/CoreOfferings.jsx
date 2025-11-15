import React from "react";
import { Box, Typography } from "@mui/material";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import ScienceIcon from "@mui/icons-material/Science";
import AnchorIcon from "@mui/icons-material/Anchor";
import GroupsIcon from "@mui/icons-material/Groups";

export default function CoreOfferings() {
    const items = [
        {
            icon: <PrecisionManufacturingIcon sx={{ fontSize: 30 }} />,
            title: "Mine Operations & Development",
            desc: "Overburden removal, in-pit extraction, ROM management, crushing and screening, contractor supervision, mine scheduling.",
        },
        {
            icon: <ScienceIcon sx={{ fontSize: 30 }} />,
            title: "Quality Management",
            desc: "In-pit and stockpile sampling, moisture and size control, third-party lab verification, blend management to target GAR.",
        },
        {
            icon: <AnchorIcon sx={{ fontSize: 30 }} />,
            title: "Logistics & Transshipment",
            desc: "Haulage to jetty, barge loading, transshipment to mother vessel, FOB or CFR models, weather playbooks.",
        },
        {
            icon: <GroupsIcon sx={{ fontSize: 30 }} />,
            title: "Local Trading & Offtake",
            desc: "Term and spot offtake from partner mines, structured supply programs aligned to client specifications and delivery windows.",
        },
        {
            icon: <GroupsIcon sx={{ fontSize: 30 }} />,
            title: "Compliance and HSE",
            desc: " Operations aligned to Indonesian mining, safety, and environmental regulations. HSE inductions, PPE, dust suppression, water spraying, progressive rehabilitation plans.",
        },
    ];

    return (
        <Box
            sx={{
                width: "100%",
                py: { xs: 6, md: 4 },
                px: { xs: 2, md: 6 },
                backgroundColor: "#fff",
                textAlign: "left",
                fontFamily: "Inter, sans-serif",
            }}
        >
            <Typography
                sx={{
                    fontSize: { xs: "22px", md: "32px" },
                    fontWeight: 700,
                    fontFamily: "Montserrat, sans-serif",
                    color: "#2F6F6F",
                    mb: { xs: 3, md: 3 },
                }}
            >
                Core Offerings
            </Typography>

            {/* CARD WRAPPER */}
            {/* HORIZONTAL SCROLL WRAPPER */}
            <Box
                sx={{
                    maxWidth: "1400px",
                    mx: "auto",
                    display: "flex",
                    flexDirection: "row",
                    gap: { xs: 2, md: 2 },
                    overflowX: "auto",
                   
                    scrollBehavior: "smooth",

                    /* HIDE SCROLLBAR */
                    scrollbarWidth: "none",      // Firefox
                    msOverflowStyle: "none",     // IE/Edge
                    "&::-webkit-scrollbar": {
                        display: "none"          // Chrome/Safari
                    }
                }}
            >
                {items.map((item, index) => (
                    <Box
                        key={index}
                        sx={{
                            minWidth: { xs: "80%", sm: "48%", md: "300px" }, // important
                            maxWidth: "300px",
                            backgroundColor: "#fff",
                            p: { xs: 3, md: 4 },
                            borderRadius: "14px",
                              boxShadow: "0px 4px 18px rgba(0,0,0,0.08)",
                            borderTop: "4px solid #3EA8A8",
                            textAlign: "left",
                            flexShrink: 0, // keep width fixed
                        }}
                    >
                        {/* Icon */}
                        <Box
                            sx={{
                                fontSize: { xs: "20px", md: "20px", lg: "20px" },
                                color: "#2F6F6F",
                                mb: 2,
                            }}
                        >
                            {item.icon}
                        </Box>

                        {/* Title */}
                        <Typography
                            sx={{
                                fontWeight: 700,
                                fontSize: "16px",
                                mb: 1,
                                color: "#154B4B",
                            }}
                        >
                            {item.title}
                        </Typography>

                        {/* Description */}
                        <Typography
                            sx={{
                                fontSize: "14px",
                                color: "#4a5c5c",
                                lineHeight: 1.6,
                            }}
                        >
                            {item.desc}
                        </Typography>
                    </Box>
                ))}
            </Box>


        </Box>
    );
}
