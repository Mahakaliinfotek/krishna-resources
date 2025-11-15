import React from "react";
import { Box, Typography, Button } from "@mui/material";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import DirectionsBoatIcon from "@mui/icons-material/DirectionsBoat";
import SailingIcon from "@mui/icons-material/Sailing";

export default function KrishnaResourcesHero() {
    return (
        <Box
            sx={{
                width: "100%",
                minHeight: { xs: "80vh", md: "70vh" },
                display: "flex",
                alignItems: "center",
                px: { xs: 2, md: 8 },
                py: { xs: 6, md: 0 },
                background: `
                    linear-gradient(
                        180deg,
                        #dfeceb 0%,
                        #a8bcbc 30%,
                        #779695 60%,
                        #3e6668 100%
                    )
                `,
            }}
        >
            <Box sx={{ maxWidth: "700px" }}>
                {/* Heading */}
                <Typography
                    sx={{
                        fontSize: { xs: "32px", md: "52px" },
                        fontWeight: 700,
                        color: "#fff",
                        lineHeight: 1.2,
                    }}
                >
                    Krishna Resources <br />
                    (Indonesia)
                </Typography>

                {/* Subtitle */}
                <Typography
                    sx={{
                        mt: 2,
                        color: "#e8e8e8",
                        fontSize: { xs: "15px", md: "18px" },
                        maxWidth: "90%",
                    }}
                >
                    Upstream coal mining and in-country trading in East and South
                    Kalimantan — pit to transshipment with predictable specifications
                    and clear documentation.
                </Typography>

                {/* Features Row */}
                <Box
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 2,
                        mt: 4,
                    }}
                >
                    <FeatureItem icon={<LocalShippingIcon />} label="Mine Ops" />
                    <FeatureItem icon={<CheckCircleOutlineIcon />} label="QA & Blending" />
                    <FeatureItem icon={<DirectionsBoatIcon />} label="Barge Logistics" />
                    <FeatureItem icon={<SailingIcon />} label="Vessel Loading" />
                </Box>

                {/* Buttons */}
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column", sm: "row" },
                        gap: 2,
                        mt: 5,
                    }}
                >
                    <Button
                        variant="contained"
                        sx={{
                            background: "#ffffff",
                            color: "#194b4e",
                            fontWeight: 600,
                            px: 3,
                            py: 1.5,
                            borderRadius: "10px",
                            ":hover": { background: "#e8e8e8" },
                            width: { xs: "100%", sm: "auto" },
                        }}
                    >
                        Contact Sales / Request Quote
                    </Button>

                    <Button
                        variant="outlined"
                        sx={{
                            borderColor: "#fff",
                            color: "#fff",
                            fontWeight: 600,
                            px: 3,
                            py: 1.5,
                            borderRadius: "10px",
                            ":hover": { borderColor: "#e8e8e8" },
                            width: { xs: "100%", sm: "auto" },
                        }}
                    >
                        Download Capabilities PDF
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}

const FeatureItem = ({ icon, label }) => {
    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                px: 2,
                py: 1,
                borderRadius: "8px",
                background: "rgba(255,255,255,0.15)",
                color: "#fff",
                fontSize: "14px",
                backdropFilter: "blur(4px)",
            }}
        >
            {icon}
            <Typography sx={{ fontSize: "14px", fontWeight: 500 }}>{label}</Typography>
        </Box>
    );
};
