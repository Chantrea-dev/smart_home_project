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
                    <Typography>Smart security</Typography>
                </Box>
            </Box>
        </>
    );
}
