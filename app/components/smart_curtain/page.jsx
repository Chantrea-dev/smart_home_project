"use client";
import React from "react";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { Typography } from "@mui/material";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { MobileTimePicker } from "@mui/x-date-pickers/MobileTimePicker";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import DateRangeIcon from "@mui/icons-material/DateRange";
import Switch from "@mui/material/Switch";

import "./style.css";

export default function DigitalClockViews() {
    const label = { inputProps: { "aria-label": "Switch demo" } };

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
                    <Box>Curtain</Box>
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
                    <Typography>My Curtain</Typography>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer
                            components={[
                                "MobileDateTimePicker",
                                "MobileDateTimePicker",
                            ]}
                        >
                            <DateTimePicker
                                label={'"Date"'}
                                openTo="year"
                                sx={{
                                    display: {
                                        xs: "none",
                                        md: "flex",
                                    },
                                }}
                            />

                            <MobileTimePicker
                                label={'"hours"'}
                                openTo="hours"
                                sx={{
                                    display: {
                                        xs: "flex",
                                        md: "none",
                                    },
                                }}
                            />
                        </DemoContainer>
                    </LocalizationProvider>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            paddingTop: "10px",
                            color: "gray",
                        }}
                    >
                        <Box>Every day</Box>

                        <DateRangeIcon sx={{ color: "gray" }} />
                    </Box>
                    <Stack
                        direction="row"
                        spacing={2}
                        sx={{ width: "100%", overflow: "auto" }}
                    >
                        <Avatar sx={{ bgcolor: "#fff243" }}>M</Avatar>
                        <Avatar sx={{ bgcolor: "#d6569b" }}>T</Avatar>
                        <Avatar sx={{ bgcolor: "#52ab62" }}>W</Avatar>
                        <Avatar sx={{ bgcolor: "#e08b44" }}>T</Avatar>
                        <Avatar sx={{ bgcolor: "#3c84fa" }}>F</Avatar>
                        <Avatar sx={{ bgcolor: "#d14a43" }}>S</Avatar>
                        <Avatar sx={{ bgcolor: "#80589e" }}>S</Avatar>
                    </Stack>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            borderBottom: "1px solid #c4c4c4",
                        }}
                    >
                        <Typography>All day</Typography>
                        <Switch {...label} defaultChecked />
                    </Box>
                </Box>
            </Box>
        </>
    );
}
