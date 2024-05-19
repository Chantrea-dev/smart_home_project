"use client";
import React, { useState } from "react";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { Typography } from "@mui/material";
import Image from "next/image";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import DryCleaningIcon from "@mui/icons-material/DryCleaning";
import "./style.css";
export default function Home() {
    const [value, setValue] = useState();

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <>
            <Box sx={{ display: "grid", gap: "20px" }}>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        boxShadow: 2,
                        padding: 1.5,
                        borderRadius: "5px",
                    }}
                >
                    <Box>Cloth Hanger</Box>
                    <Button
                        variant="outlined"
                        href="#outlined-buttons"
                        sx={{ width: "20px" }}
                    >
                        <NotificationsNoneIcon />
                    </Button>
                </Box>
                <Box
                    sx={{
                        boxShadow: 2,
                        padding: 1.5,
                        borderRadius: "5px",
                        display: "grid",
                        gap: "10px",
                    }}
                >
                    <Typography>My Location</Typography>
                    <Box
                        className="bg-weather"
                        sx={{
                            padding: "10px",
                            color: "white",
                            width: {
                                xs: "100%",
                                md: "29%",
                            },
                            height: "24vh",
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                            }}
                        >
                            <Typography sx={{ fontSize: "20px" }}>
                                19°
                            </Typography>
                            <Image
                                src="/Sun cloud angled rain.png"
                                width={80}
                                height={80}
                            />
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                            }}
                        >
                            <Box>
                                <Typography sx={{ fontSize: "10px" }}>
                                    H:24° L:18°
                                </Typography>

                                <Box
                                    sx={{
                                        fontSize: "10px",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "3rem",
                                    }}
                                >
                                    <Typography sx={{ fontSize: "15px" }}>
                                        Phnom Penh, Cambodia
                                    </Typography>
                                    <Typography sx={{ fontSize: "10px" }}>
                                        Mid Rain
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Typography>Today</Typography>
                    <Box
                        sx={{
                            display: "flex",
                            gap: "10px",
                            width: "100%",
                            overflow: "auto",
                        }}
                    >
                        <Button
                            size="small"
                            variant="contained"
                            disableElevation
                            sx={{
                                display: "flex",
                                borderRadius: "60px",
                                height: "10rem",
                                flexDirection: "column",
                                gap: "10px",
                            }}
                        >
                            <Typography>22 AM</Typography>
                            <Box
                                sx={{
                                    display: "grid",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20px"
                                    height="20px"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fill="yellow"
                                        d="M13.002 6.01c3.169 0 4.966 2.097 5.228 4.63h.08a3.687 3.687 0 0 1 3.692 3.682a3.687 3.687 0 0 1-3.692 3.683h-.515l-1.646 2.627a.75.75 0 0 1-1.344-.659l.045-.091l1.213-1.877h-2.136l-1.646 2.627a.75.75 0 0 1-1.344-.659l.045-.091l1.213-1.877h-2.136l-1.646 2.627a.75.75 0 0 1-1.344-.659l.045-.091l1.213-1.877h-.632a3.687 3.687 0 0 1-3.692-3.682a3.687 3.687 0 0 1 3.692-3.683h.08c.263-2.55 2.059-4.63 5.227-4.63m-8.634 4.155a.75.75 0 0 1-.315.935l-.091.045l-.926.384a.75.75 0 0 1-.666-1.34l.092-.046l.926-.384a.75.75 0 0 1 .98.406m6.487-4.833l-.172.058C8.9 6.02 7.621 7.395 7.068 9.213l-.07.25l-.058.238l-.206.038a4.6 4.6 0 0 0-1.67.715a3.942 3.942 0 0 1 5.791-5.122m-7.914.031l.106.035l.926.384a.75.75 0 0 1-.469 1.42L3.4 7.168l-.926-.384a.75.75 0 0 1 .468-1.42m3.815-2.986l.046.091l.383.926a.75.75 0 0 1-1.34.666L5.8 3.968l-.384-.926a.75.75 0 0 1 1.34-.665m4.354-.319a.75.75 0 0 1 .44.875l-.034.105l-.384.926a.75.75 0 0 1-1.42-.468l.034-.106l.384-.926a.75.75 0 0 1 .98-.406"
                                    />
                                </svg>
                                30%
                            </Box>
                            <Typography>19°</Typography>
                        </Button>
                        <Button
                            size="small"
                            variant="contained"
                            disableElevation
                            sx={{
                                display: "flex",
                                borderRadius: "60px",
                                height: "10rem",
                                flexDirection: "column",
                                gap: "10px",
                            }}
                        >
                            <Typography>22 AM</Typography>
                            <Box
                                sx={{
                                    display: "grid",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20px"
                                    height="20px"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fill="yellow"
                                        d="M13.002 6.01c3.169 0 4.966 2.097 5.228 4.63h.08a3.687 3.687 0 0 1 3.692 3.682a3.687 3.687 0 0 1-3.692 3.683h-.515l-1.646 2.627a.75.75 0 0 1-1.344-.659l.045-.091l1.213-1.877h-2.136l-1.646 2.627a.75.75 0 0 1-1.344-.659l.045-.091l1.213-1.877h-2.136l-1.646 2.627a.75.75 0 0 1-1.344-.659l.045-.091l1.213-1.877h-.632a3.687 3.687 0 0 1-3.692-3.682a3.687 3.687 0 0 1 3.692-3.683h.08c.263-2.55 2.059-4.63 5.227-4.63m-8.634 4.155a.75.75 0 0 1-.315.935l-.091.045l-.926.384a.75.75 0 0 1-.666-1.34l.092-.046l.926-.384a.75.75 0 0 1 .98.406m6.487-4.833l-.172.058C8.9 6.02 7.621 7.395 7.068 9.213l-.07.25l-.058.238l-.206.038a4.6 4.6 0 0 0-1.67.715a3.942 3.942 0 0 1 5.791-5.122m-7.914.031l.106.035l.926.384a.75.75 0 0 1-.469 1.42L3.4 7.168l-.926-.384a.75.75 0 0 1 .468-1.42m3.815-2.986l.046.091l.383.926a.75.75 0 0 1-1.34.666L5.8 3.968l-.384-.926a.75.75 0 0 1 1.34-.665m4.354-.319a.75.75 0 0 1 .44.875l-.034.105l-.384.926a.75.75 0 0 1-1.42-.468l.034-.106l.384-.926a.75.75 0 0 1 .98-.406"
                                    />
                                </svg>
                                30%
                            </Box>
                            <Typography>19°</Typography>
                        </Button>
                        <Button
                            size="small"
                            variant="contained"
                            disableElevation
                            sx={{
                                display: "flex",
                                borderRadius: "60px",
                                height: "10rem",
                                flexDirection: "column",
                                gap: "10px",
                            }}
                        >
                            <Typography>22 AM</Typography>
                            <Box
                                sx={{
                                    display: "grid",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20px"
                                    height="20px"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fill="yellow"
                                        d="M13.002 6.01c3.169 0 4.966 2.097 5.228 4.63h.08a3.687 3.687 0 0 1 3.692 3.682a3.687 3.687 0 0 1-3.692 3.683h-.515l-1.646 2.627a.75.75 0 0 1-1.344-.659l.045-.091l1.213-1.877h-2.136l-1.646 2.627a.75.75 0 0 1-1.344-.659l.045-.091l1.213-1.877h-2.136l-1.646 2.627a.75.75 0 0 1-1.344-.659l.045-.091l1.213-1.877h-.632a3.687 3.687 0 0 1-3.692-3.682a3.687 3.687 0 0 1 3.692-3.683h.08c.263-2.55 2.059-4.63 5.227-4.63m-8.634 4.155a.75.75 0 0 1-.315.935l-.091.045l-.926.384a.75.75 0 0 1-.666-1.34l.092-.046l.926-.384a.75.75 0 0 1 .98.406m6.487-4.833l-.172.058C8.9 6.02 7.621 7.395 7.068 9.213l-.07.25l-.058.238l-.206.038a4.6 4.6 0 0 0-1.67.715a3.942 3.942 0 0 1 5.791-5.122m-7.914.031l.106.035l.926.384a.75.75 0 0 1-.469 1.42L3.4 7.168l-.926-.384a.75.75 0 0 1 .468-1.42m3.815-2.986l.046.091l.383.926a.75.75 0 0 1-1.34.666L5.8 3.968l-.384-.926a.75.75 0 0 1 1.34-.665m4.354-.319a.75.75 0 0 1 .44.875l-.034.105l-.384.926a.75.75 0 0 1-1.42-.468l.034-.106l.384-.926a.75.75 0 0 1 .98-.406"
                                    />
                                </svg>
                                30%
                            </Box>
                            <Typography>19°</Typography>
                        </Button>
                        <Button
                            size="small"
                            variant="contained"
                            disableElevation
                            sx={{
                                display: "flex",
                                borderRadius: "60px",
                                height: "10rem",
                                flexDirection: "column",
                                gap: "10px",
                            }}
                        >
                            <Typography>22 AM</Typography>
                            <Box
                                sx={{
                                    display: "grid",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20px"
                                    height="20px"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fill="yellow"
                                        d="M13.002 6.01c3.169 0 4.966 2.097 5.228 4.63h.08a3.687 3.687 0 0 1 3.692 3.682a3.687 3.687 0 0 1-3.692 3.683h-.515l-1.646 2.627a.75.75 0 0 1-1.344-.659l.045-.091l1.213-1.877h-2.136l-1.646 2.627a.75.75 0 0 1-1.344-.659l.045-.091l1.213-1.877h-2.136l-1.646 2.627a.75.75 0 0 1-1.344-.659l.045-.091l1.213-1.877h-.632a3.687 3.687 0 0 1-3.692-3.682a3.687 3.687 0 0 1 3.692-3.683h.08c.263-2.55 2.059-4.63 5.227-4.63m-8.634 4.155a.75.75 0 0 1-.315.935l-.091.045l-.926.384a.75.75 0 0 1-.666-1.34l.092-.046l.926-.384a.75.75 0 0 1 .98.406m6.487-4.833l-.172.058C8.9 6.02 7.621 7.395 7.068 9.213l-.07.25l-.058.238l-.206.038a4.6 4.6 0 0 0-1.67.715a3.942 3.942 0 0 1 5.791-5.122m-7.914.031l.106.035l.926.384a.75.75 0 0 1-.469 1.42L3.4 7.168l-.926-.384a.75.75 0 0 1 .468-1.42m3.815-2.986l.046.091l.383.926a.75.75 0 0 1-1.34.666L5.8 3.968l-.384-.926a.75.75 0 0 1 1.34-.665m4.354-.319a.75.75 0 0 1 .44.875l-.034.105l-.384.926a.75.75 0 0 1-1.42-.468l.034-.106l.384-.926a.75.75 0 0 1 .98-.406"
                                    />
                                </svg>
                                30%
                            </Box>
                            <Typography>19°</Typography>
                        </Button>
                        <Button
                            size="small"
                            variant="contained"
                            disableElevation
                            sx={{
                                display: "flex",
                                borderRadius: "60px",
                                height: "10rem",
                                flexDirection: "column",
                                gap: "10px",
                            }}
                        >
                            <Typography>22 AM</Typography>
                            <Box
                                sx={{
                                    display: "grid",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20px"
                                    height="20px"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fill="yellow"
                                        d="M13.002 6.01c3.169 0 4.966 2.097 5.228 4.63h.08a3.687 3.687 0 0 1 3.692 3.682a3.687 3.687 0 0 1-3.692 3.683h-.515l-1.646 2.627a.75.75 0 0 1-1.344-.659l.045-.091l1.213-1.877h-2.136l-1.646 2.627a.75.75 0 0 1-1.344-.659l.045-.091l1.213-1.877h-2.136l-1.646 2.627a.75.75 0 0 1-1.344-.659l.045-.091l1.213-1.877h-.632a3.687 3.687 0 0 1-3.692-3.682a3.687 3.687 0 0 1 3.692-3.683h.08c.263-2.55 2.059-4.63 5.227-4.63m-8.634 4.155a.75.75 0 0 1-.315.935l-.091.045l-.926.384a.75.75 0 0 1-.666-1.34l.092-.046l.926-.384a.75.75 0 0 1 .98.406m6.487-4.833l-.172.058C8.9 6.02 7.621 7.395 7.068 9.213l-.07.25l-.058.238l-.206.038a4.6 4.6 0 0 0-1.67.715a3.942 3.942 0 0 1 5.791-5.122m-7.914.031l.106.035l.926.384a.75.75 0 0 1-.469 1.42L3.4 7.168l-.926-.384a.75.75 0 0 1 .468-1.42m3.815-2.986l.046.091l.383.926a.75.75 0 0 1-1.34.666L5.8 3.968l-.384-.926a.75.75 0 0 1 1.34-.665m4.354-.319a.75.75 0 0 1 .44.875l-.034.105l-.384.926a.75.75 0 0 1-1.42-.468l.034-.106l.384-.926a.75.75 0 0 1 .98-.406"
                                    />
                                </svg>
                                30%
                            </Box>
                            <Typography>19°</Typography>
                        </Button>
                        <Button
                            size="small"
                            variant="contained"
                            disableElevation
                            sx={{
                                display: "flex",
                                borderRadius: "60px",
                                height: "10rem",
                                flexDirection: "column",
                                gap: "10px",
                            }}
                        >
                            <Typography>22 AM</Typography>
                            <Box
                                sx={{
                                    display: "grid",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20px"
                                    height="20px"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fill="yellow"
                                        d="M13.002 6.01c3.169 0 4.966 2.097 5.228 4.63h.08a3.687 3.687 0 0 1 3.692 3.682a3.687 3.687 0 0 1-3.692 3.683h-.515l-1.646 2.627a.75.75 0 0 1-1.344-.659l.045-.091l1.213-1.877h-2.136l-1.646 2.627a.75.75 0 0 1-1.344-.659l.045-.091l1.213-1.877h-2.136l-1.646 2.627a.75.75 0 0 1-1.344-.659l.045-.091l1.213-1.877h-.632a3.687 3.687 0 0 1-3.692-3.682a3.687 3.687 0 0 1 3.692-3.683h.08c.263-2.55 2.059-4.63 5.227-4.63m-8.634 4.155a.75.75 0 0 1-.315.935l-.091.045l-.926.384a.75.75 0 0 1-.666-1.34l.092-.046l.926-.384a.75.75 0 0 1 .98.406m6.487-4.833l-.172.058C8.9 6.02 7.621 7.395 7.068 9.213l-.07.25l-.058.238l-.206.038a4.6 4.6 0 0 0-1.67.715a3.942 3.942 0 0 1 5.791-5.122m-7.914.031l.106.035l.926.384a.75.75 0 0 1-.469 1.42L3.4 7.168l-.926-.384a.75.75 0 0 1 .468-1.42m3.815-2.986l.046.091l.383.926a.75.75 0 0 1-1.34.666L5.8 3.968l-.384-.926a.75.75 0 0 1 1.34-.665m4.354-.319a.75.75 0 0 1 .44.875l-.034.105l-.384.926a.75.75 0 0 1-1.42-.468l.034-.106l.384-.926a.75.75 0 0 1 .98-.406"
                                    />
                                </svg>
                                30%
                            </Box>
                            <Typography>19°</Typography>
                        </Button>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            color: "gray",
                        }}
                    >
                        <Box>Cloth Hanger</Box>
                        <Button sx={{ width: "20px" }}>
                            <CheckroomIcon sx={{ color: "gray" }} />
                        </Button>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: {
                                xs: "center",
                                md: "start",
                            },
                            color: "gray",
                            gap: "5px",
                        }}
                    >
                        <Button
                            variant="contained"
                            sx={{
                                display: "grid",
                                fontSize: "8px",
                                textAlign: "center",
                                width: "60px",
                                textTransform: "capitalize",
                            }}
                        >
                            <DryCleaningIcon
                                sx={{
                                    width: "40px",
                                    height: "40px",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            />
                        </Button>
                        <Typography>Cloth Hanger</Typography>
                    </Box>
                </Box>
            </Box>
        </>
    );
}
