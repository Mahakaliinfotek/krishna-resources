import React from "react";
import { Box, Typography } from "@mui/material";

export default function Achievements() {
    return (
        <Box
            sx={{
                width: "100%",
                py: { xs: 3, md: 4 },
                px: { xs: 3, md: 6 },
                background: "#f8fdfc",
            }}
        >
            <Typography
                sx={{
                    fontSize: { xs: "15px", md: "18px" },
                    lineHeight: 1.7,
                    color: "#444",
                }}
            >
                Launched mining and sourcing operations across Samarinda and South
                Kalimantan, supported by a new on-ground trading desk.
            </Typography>
        </Box>
    );
}
