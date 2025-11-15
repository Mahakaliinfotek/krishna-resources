import React from "react";
import { Box, Typography } from "@mui/material";
import FactoryIcon from "@mui/icons-material/Factory";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import BuildIcon from "@mui/icons-material/Build";

export default function MarketsReach() {
    return (
        <Box sx={{ background: "#e8faf7" }}>
            <Box
                sx={{
                    width: "100%",
                    py: { xs: 6, md: 4 },
                    px: { xs: 3, md: 6 },
                    mx: "auto",

                }}
            >
                {/* TITLE */}
                <Typography
                    sx={{
                        fontSize: { xs: "22px", md: "32px" },
                        fontWeight: 700,
                        fontFamily: "Montserrat, sans-serif",
                        color: "#2F6F6F",
                        mb: 2,
                    }}
                >
                    Markets & Reach
                </Typography>

                {/* PARAGRAPH */}
                <Typography
                    sx={{
                        fontSize: { xs: "16px", md: "20px" },
                        lineHeight: 1.7,
                        color: "#333",
                        maxWidth: "900px",
                        mb: 4,
                    }}
                >
                    From our strategic base in Indonesia, we serve a diverse portfolio of
                    clients across key global markets, powering industries essential for
                    modern development.
                </Typography>

                {/* WORLD MAP IMAGE */}
                <Box
                    component="img"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQDtT1e2-j0m8p8avjxE1cTVc_ex__ssE1bswE1Z3qZ0exHNUJ0Jx6Sh2xtih_Cu_bfYAWTELR6G9iRyOwMObRa4XBbVivw_N7LGBJdR6JCgnm6tgJnG7MNLWWwXnt-McDuC16j822lwV_rtv4hziZTdzCHYrUo_19JThJufuP5cPfGJYVJhB6jF4Woy2UIVNM-4eiOOmKCHpITWdklUvZl96GR_9QRrsLqHXtHUvtBV0b3BnXIMRunDJduzmZArdIH1f7pX9llzoq"
                    alt="World Map"
                    sx={{
                        width: "100%",
                        height: { xs: 180, md: 480, lg: 480 },
                        borderRadius: "16px",
                        mb: 4,
                        objectFit: "fill"
                        // objectFit: "fit"
                    }}
                />

                {/* ICON ROW */}
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: {
                            xs: "space-between",
                            sm: "flex-start"
                        },
                        gap: { xs: 3, sm: 8 },
                        px: { xs: 1, md: 0 },

                    }}
                >

                </Box>
            </Box>
        </Box>
    );
}
