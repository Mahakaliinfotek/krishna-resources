import React from "react";
import { Box, Typography } from "@mui/material";

export default function Achievements() {
    return (
        <Box
            sx={{
                width: "100%",
                py: { xs: 3, md: 2 },
                px: { xs: 3, md: 6 },
                background: "#f8fdfc",
            }}
        >
            {/* Heading */}
            <Typography
                sx={{
                    fontSize: { xs: "22px", md: "32px" },
                    fontWeight: 700,
                    fontFamily: "Manrope !important",
                    color: "#2F6F6F",
                    mb: 2,
                }}
            >
                Achievements
            </Typography>

            {/* Description */}
            <Typography
                sx={{
                    fontSize: { xs: "15px", md: "18px" },
                    lineHeight: 1.7,
                    color: "#444",
                    fontFamily: "Manrope !important",
                }}
            >
                2023
                Mining and sourcing initiated in Samarinda and South Kalimantan. Local trading desk established..
            </Typography>
        </Box>
    );
}
