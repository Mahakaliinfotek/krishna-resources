import React from "react";
import { Box, Typography } from "@mui/material";

const data = [
    {
        title: "In-country leadership and faster decisions",
        desc: "A seasoned team on the ground in Samarinda and South Kalimantan with short feedback loops and clear accountability.",
        img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=60"
    },
    {
        title: "End-to-end control to the ship rail",
        desc: "One responsible counterparty from pit to barge to mother vessel. Fewer handoffs and fewer surprises.",
        img: "https://images.unsplash.com/photo-1501630834273-4b5604d2ee31?auto=format&fit=crop&w=900&q=60"
    },
    {
        title: "Specification consistency",
        desc: "Tight SOPs for sampling, moisture management, and blending provide repeatable cargo quality and clean documentation at discharge.",
        img: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=900&q=60"

    },

    {
        title: "Schedule discipline in tough weather",
        desc: "Contingency stockpiles, queue management, and established transshipment partners support continuity during rain seasons.",
        img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=60"
    },
    {
        title: "Transparent records",
        desc: "Chain-of-custody files, third-party test certificates, voyage and barge logs suitable for internal and statutory review.",
        img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=900&q=60"
    },
    {
        title: "India interface through group companies",
        desc: "Direct coordination with Indian port discharge, stevedoring, and inland evacuation for faster plant turnarounds and lower total landed cost.",
        img: "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?auto=format&fit=crop&w=900&q=60"
    }
];

export default function WhatMakesUsDifferent() {
    return (
        <Box
            sx={{
                width: "100%",
                py: { xs: 5, md: 4 },
                px: { xs: 3, md: 6 },
                background: "linear-gradient(to bottom, #e8faf7 0%, #ffffff 60%)",
            }}
        >
            {/* HEADING */}
            <Typography
                sx={{
                    fontSize: { xs: "26px", md: "32px" },
                    fontWeight: 700,
                    fontFamily: "Montserrat, sans-serif",
                    color: "#2F6F6F",
                    mb: 2,
                }}
            >
                What Makes Us Different
            </Typography>

            {/* CARD GRID */}
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 3,
                    overflowX: "auto",
                    pb: 1,
                    scrollBehavior: "smooth",
                    scrollbarWidth: "none",          // Firefox
                    msOverflowStyle: "none",         // Internet Explorer / Edge

                    "&::-webkit-scrollbar": {
                        display: "none"              // Chrome / Safari
                    }
                }}
            >
                {data.map((item, index) => (
                    <Box
                        key={index}
                        sx={{
                            minWidth: { xs: "75%", sm: "45%", md: "300px" },  // IMPORTANT
                            maxWidth: "300px",
                            background: "#fff",
                            borderRadius: "16px",
                            //boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
                            p: 1,
                            flexShrink: 0,  // prevents items from shrinking
                            transition: "0.3s",
                            "&:hover": {
                                boxShadow: "0 12px 28px rgba(0,0,0,0.12)"
                            }
                        }}
                    >
                        {/* IMAGE */}
                        <Box
                            component="img"
                            src={item.img}
                            alt={item.title}
                            sx={{
                                width: "100%",
                                height: "180px",
                                objectFit: "cover",
                                borderRadius: "12px",
                                mb: 2
                            }}
                        />

                        {/* TITLE */}
                        <Typography
                            sx={{
                                fontSize: "14px",
                                fontWeight: 700,
                                color: "#0d1b2a",
                                mb: 1
                            }}
                        >
                            {item.title}
                        </Typography>

                        {/* DESCRIPTION */}
                        <Typography
                            sx={{
                                fontSize: "13px",
                                color: "#4a4f52",
                                lineHeight: 1.6
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
