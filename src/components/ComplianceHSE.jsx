// import React from "react";
// import { Box, Typography, Stack, Button } from "@mui/material";
// import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
// import SpaIcon from "@mui/icons-material/Spa"; // FIXED
// import GavelIcon from "@mui/icons-material/Gavel";
// import DownloadIcon from "@mui/icons-material/Download";

// export default function ComplianceHSE() {
//     const points = [
//         "Operations aligned to Indonesian mining, safety, and environmental regulations.",
//         "HSE inductions, PPE, dust suppression, water spraying.",
//         "Progressive rehabilitation plans.",
//     ];

//     const icons = [
//         { icon: <HealthAndSafetyIcon />, label: "Safety First" },
//         { icon: <SpaIcon />, label: "Environmental" },
//         { icon: <GavelIcon />, label: "Regulatory" },
//     ];

//     return (
//         <Box
//             sx={{
//                 width: "100%",
//                 py: { xs: 6, md: 10 },
//                 px: { xs: 2, md: 6 },
//                 backgroundColor: "#E6FBFA",
//                 fontFamily: "Inter, sans-serif",
//             }}
//         >
//             <Box
//                 sx={{
//                     maxWidth: "1400px",
//                     mx: "auto",
//                     backgroundColor: "#fff",
//                     borderRadius: "16px",
//                     p: { xs: 3, md: 6 },
//                     boxShadow: "0px 4px 24px rgba(0,0,0,0.08)",
//                 }}
//             >
//                 <Stack
//                     direction={{ xs: "column", md: "row" }}
//                     justifyContent="space-between"
//                     alignItems={{ xs: "flex-start", md: "center" }}
//                     spacing={{ xs: 4, md: 0 }}
//                 >
//                     {/* LEFT SIDE - TEXT */}
//                     <Box sx={{ flex: 1 }}>
//                         <Typography
//                             sx={{
//                                 fontSize: { xs: "24px", md: "32px" },
//                                 fontWeight: 700,
//                                 fontFamily: "Montserrat, sans-serif",
//                                 color: "#2F6F6F",
//                                 mb: 2,
//                             }}
//                         >
//                             Compliance and HSE
//                         </Typography>

//                         <Box
//                             component="ul"
//                             sx={{
//                                 pl: 3,
//                                 m: 0,
//                                 color: "#1f2d2d",
//                                 lineHeight: 1.6,
//                                 fontSize: { xs: "14px", md: "15px" },
//                             }}
//                         >
//                             {points.map((item, index) => (
//                                 <li key={index} style={{ marginBottom: "10px" }}>
//                                     {item}
//                                 </li>
//                             ))}
//                         </Box>
//                     </Box>

//                     {/* RIGHT SIDE - ICONS + BUTTON */}
//                     <Stack
//                         sx={{ flex: 1 }}
//                         spacing={2}
//                         alignItems={{ xs: "flex-start", md: "flex-end" }}
//                     >
//                         {/* Icons row */}
//                         <Stack
//                             direction="row"
//                             spacing={4}
//                             sx={{ mb: 1 }}
//                         >
//                             {icons.map((it, index) => (
//                                 <Stack
//                                     key={index}
//                                     spacing={0.5}
//                                     alignItems="center"
//                                     sx={{ color: "#2F6F6F" }}
//                                 >
//                                     <Box sx={{ fontSize: "42px" }}>{it.icon}</Box>
//                                     <Typography
//                                         sx={{
//                                             fontWeight: 600,
//                                             fontSize: "14px",
//                                         }}
//                                     >
//                                         {it.label}
//                                     </Typography>
//                                 </Stack>
//                             ))}
//                         </Stack>

//                         {/* BUTTON */}
//                         <Button
//                             variant="contained"
//                             startIcon={<DownloadIcon />}
//                             sx={{
//                                 backgroundColor: "#CFE6E4",
//                                 color: "#154B4B",
//                                 textTransform: "none",
//                                 fontWeight: 600,
//                                 fontSize: "14px",
//                                 px: 3,
//                                 py: 1.2,
//                                 borderRadius: "10px",
//                                 ":hover": {
//                                     backgroundColor: "#B9D7D4",
//                                 },
//                             }}
//                         >
//                             Download HSE Policy PDF
//                         </Button>
//                     </Stack>
//                 </Stack>
//             </Box>
//         </Box>
//     );
// }


import React from "react";
import { Box, Typography } from "@mui/material";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import SpaIcon from "@mui/icons-material/Spa";
import GavelIcon from "@mui/icons-material/Gavel";

export default function ComplianceHSE() {
    const items = [
        { icon: <HealthAndSafetyIcon sx={{ fontSize: 30 }} />, label: "Safety First" },
        { icon: <SpaIcon sx={{ fontSize: 30 }} />, label: "Environmental Care" },
        { icon: <GavelIcon sx={{ fontSize: 30 }} />, label: "Regulatory Adherence" },
    ];

    return (
        <Box
            sx={{
                width: "100%",
                py: { xs: 6, md: 4 },
                px: { xs: 3, md: 6 },
                fontFamily: "Inter, sans-serif",
                backgroundColor: "#E6FBFA",

            }}
        >
            <Box
                sx={{
                    maxWidth: "1300px",
                    mx: "auto",
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    gap: { xs: 4, md: 8 },
                }}
            >
                {/* LEFT SIDE: TITLE + PARAGRAPH */}
                <Box sx={{ flex: 1 }}>
                    <Typography
                        sx={{
                            fontSize: { xs: "26px", md: "34px" },
                            fontWeight: 700,
                            fontFamily: "Montserrat, sans-serif",
                            color: "#2F6F6F",
                            mb: 2,
                        }}
                    >
                        Compliance & HSE
                    </Typography>

                    <Typography

                        sx={{
                            fontSize: { xs: "15px", md: "17px" },
                            lineHeight: 1.7,
                            color: "#1f2d2d",
                            maxWidth: "550px",
                            fontFamily: "Inter, sans-serif",
                        }}
                    >
                        Our commitment to Health, Safety, and Environment (HSE) is unwavering.
                        We follow international regulations and best practices to ensure safety
                        for our people, partners, and the planet.
                    </Typography>
                </Box>

                {/* RIGHT SIDE: ICON CARDS */}
                <Box
                    sx={{
                        flex: 1,
                        display: "flex",
                        flexWrap: "wrap",

                        gap: { xs: 1, md: 2, lg: 2 },
                        justifyContent: { xs: "left", md: "flex-start" },
                    }}
                >
                    {items.map((item, index) => (
                        <Box
                            key={index}
                            sx={{
                                width: { xs: "48%", md: "180px" },
                                backgroundColor: "#ffffff",
                                p: 1,

                                borderRadius: "14px",
                                boxShadow: "0px 4px 20px rgba(0,0,0,0.08)",
                                textAlign: "center",
                            }}
                        >
                            <Box
                                sx={{
                                    fontSize: { xs: "30px", lg: "50px", md: "50px" },
                                    color: "#2F6F6F",

                                }}
                            >
                                {item.icon}
                            </Box>
                            <Typography
                                sx={{
                                    fontWeight: 600,
                                    fontSize: "16px",
                                    color: "#1f2d2d",
                                }}
                            >
                                {item.label}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    );
}
