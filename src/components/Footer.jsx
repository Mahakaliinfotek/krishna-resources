import React from "react";
import { Box, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

export default function Footer() {
    return (
        <Box
            sx={{
                backgroundColor: "#1e4a4a",
                color: "#d9e6e6",
                pt: 6,
                pb: 3,
                px: { xs: 3, md: 6 },
                mt: 0
            }}
        >
            {/* MAIN GRID */}
            <Box
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: { xs: "flex-start", md: "space-between" },
                    gap: { xs: 4, md: 2 },
                    mb: 4
                }}
            >
                {/* COMPANY INFO */}
                <Box sx={{ width: { xs: "100%", sm: "50%", md: "22%" } }}>
                    <Typography sx={{ fontWeight: 700, mb: 1, fontSize: "18px" }}>
                        Krishna Resources
                    </Typography>

                    <Typography sx={{ fontSize: "14px", lineHeight: 1.6 }}>
                        End-to-end coal mining, logistics, and trading from the heart of Indonesia.
                    </Typography>
                </Box>

                {/* SERVICES */}
                <Box sx={{ width: { xs: "100%", sm: "50%", md: "22%" } }}>
                    <Typography sx={{ fontWeight: 700, mb: 1, fontSize: "17px" }}>
                        Services
                    </Typography>

                    <Typography sx={{ fontSize: "14px", mb: 1 }}>Mine Operations</Typography>
                    <Typography sx={{ fontSize: "14px", mb: 1 }}>Quality Management</Typography>
                    <Typography sx={{ fontSize: "14px", mb: 1 }}>Logistics & Transshipment</Typography>
                    <Typography sx={{ fontSize: "14px", mb: 1 }}>Trading & Offtake</Typography>
                </Box>

                {/* COMPANY */}
                <Box sx={{ width: { xs: "100%", sm: "50%", md: "22%" } }}>
                    <Typography sx={{ fontWeight: 700, mb: 1, fontSize: "17px" }}>
                        Company
                    </Typography>

                    <Typography sx={{ fontSize: "14px", mb: 1 }}>About Us</Typography>
                    <Typography sx={{ fontSize: "14px", mb: 1 }}>HSE & Compliance</Typography>
                    <Typography sx={{ fontSize: "14px", mb: 1 }}>Contact Us</Typography>
                </Box>

                {/* CONNECT */}
                <Box sx={{ width: { xs: "100%", sm: "50%", md: "22%" } }}>
                    <Typography sx={{ fontWeight: 700, mb: 2, fontSize: "17px" }}>
                        Connect
                    </Typography>

                    <Box sx={{ display: "flex", gap: 2 }}>
                        <LinkedInIcon sx={{ fontSize: 30, color: "#d9e6e6" }} />
                        <EmailOutlinedIcon sx={{ fontSize: 30, color: "#d9e6e6" }} />
                    </Box>
                </Box>
            </Box>

            {/* DIVIDER */}
            <Box sx={{ height: "1px", width: "100%", backgroundColor: "#2a5a5a", mb: 3 }} />

            {/* COPYRIGHT */}
            <Typography
                sx={{
                    textAlign: "center",
                    fontSize: "14px",
                    color: "#cfe0e0"
                }}
            >
                © 2025 Krishna Resources (Indonesia). All rights reserved.
            </Typography>
        </Box>
    );
}
