"use client";
import React, { useState } from "react";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import LightIcon from "@mui/icons-material/Light";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import WeekendIcon from "@mui/icons-material/Weekend";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import SingleBedIcon from "@mui/icons-material/SingleBed";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import LightModeIcon from "@mui/icons-material/LightMode";
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
                    <Box>LIGHT</Box>
                    <Button
                        variant="outlined"
                        href="#outlined-buttons"
                        sx={{ width: "20px" }}
                    >
                        <NotificationsNoneIcon />
                    </Button>
                </Box>
                <Box sx={{ boxShadow: 2, padding: 1.5, borderRadius: "5px" }}>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            textTransform: "capitalize",
                            fontSize: "13px",
                        }}
                    >
                        <Box
                            sx={{
                                color: "gray",
                                fontFamily: "initial",
                            }}
                        >
                            Led temporary
                        </Box>
                        <LightIcon />
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            gap: "10px",
                            alignItems: "center",
                            cursor: "pointer",
                        }}
                    >
                        <Button
                            variant="contained"
                            disabled
                            sx={{
                                display: "grid",
                                fontSize: "8px",
                                textAlign: "center",
                                width: "67px",
                                textTransform: "capitalize",
                            }}
                        >
                            <MeetingRoomIcon
                                sx={{
                                    width: "35px",
                                    height: "35px",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            />
                            <Box sx={{ fontSize: "6px", whiteSpace: "nowrap" }}>
                                Outdoor Areas
                            </Box>
                        </Button>
                        <Button
                            variant="contained"
                            disabled
                            sx={{
                                display: "grid",
                                fontSize: "8px",
                                textAlign: "center",
                                width: "67px",
                                textTransform: "capitalize",
                            }}
                        >
                            <WeekendIcon
                                sx={{
                                    width: "35px",
                                    height: "35px",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            />
                            <Box sx={{ fontSize: "6px", whiteSpace: "nowrap" }}>
                                Living Room
                            </Box>
                        </Button>
                        <Button
                            variant="contained"
                            disabled
                            sx={{
                                display: "grid",
                                fontSize: "8px",
                                textAlign: "center",
                                width: "67px",
                                textTransform: "capitalize",
                            }}
                        >
                            <RestaurantIcon
                                sx={{
                                    width: "35px",
                                    height: "35px",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            />
                            <Box sx={{ fontSize: "6px" }}>Kitchen</Box>
                        </Button>
                        <Button
                            variant="contained"
                            disabled
                            sx={{
                                display: "grid",
                                fontSize: "8px",
                                textAlign: "center",
                                width: "67px",
                                textTransform: "capitalize",
                            }}
                        >
                            <SingleBedIcon
                                sx={{
                                    width: "35px",
                                    height: "35px",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            />
                            <Box sx={{ fontSize: "6px" }}>Bedroom</Box>
                        </Button>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            textTransform: "capitalize",
                            fontSize: "10px",
                            paddingTop: "20px",
                        }}
                    >
                        <Box
                            sx={{
                                color: "gray",
                                fontFamily: "initial",
                                fontSize: "12px",
                            }}
                        >
                            Lamp Control
                        </Box>
                        <LightIcon />
                    </Box>
                    <Box sx={{ display: "grid", gap: "7px" }}>
                        <Box sx={{ color: "gray", fontFamily: "initial" }}>
                            Bedroom
                        </Box>
                        <Stack
                            spacing={2}
                            direction="row"
                            sx={{
                                mb: 1,
                                border: "1px solid #1976d2",
                                borderRadius: "10px",
                                padding: "5px",
                            }}
                            alignItems="center"
                        >
                            <LightModeIcon
                                sx={{ color: "gray", width: "20px" }}
                            />
                            <Slider
                                aria-label="Volume"
                                value={value}
                                onChange={handleChange}
                            />
                            <LightModeIcon
                                sx={{ color: "gray", width: "20px" }}
                            />
                        </Stack>
                    </Box>
                    <Box sx={{ display: "grid", gap: "7px" }}>
                        <Box sx={{ color: "gray", fontFamily: "initial" }}>
                            Living Room
                        </Box>
                        <Stack
                            spacing={2}
                            direction="row"
                            sx={{
                                mb: 1,
                                border: "1px solid #1976d2",
                                borderRadius: "10px",
                                padding: "5px",
                            }}
                            alignItems="center"
                        >
                            <LightModeIcon
                                sx={{ color: "gray", width: "20px" }}
                            />
                            <Slider
                                aria-label="Volume"
                                value={value}
                                onChange={handleChange}
                            />
                            <LightModeIcon
                                sx={{ color: "gray", width: "20px" }}
                            />
                        </Stack>
                    </Box>
                </Box>
            </Box>
        </>
    );
}
