"use client";
import React, { useState } from "react";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import LightIcon from "@mui/icons-material/Light";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import "./style.css";
export default function Home() {
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
                            textTransform: "uppercase",
                            fontSize: "10px",
                        }}
                    >
                        <Box>LED temporary</Box>
                        <LightIcon />
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            gap: "10px",
                            textAlign: "center",
                        }}
                    >
                        <Button
                            variant="contained"
                            disabled
                            sx={{ display: "grid", fontSize: "8px" }}
                        >
                            <MeetingRoomIcon
                                sx={{ width: "40px", height: "40px" }}
                            />
                            Outdoor Areas
                        </Button>
                        <Button variant="contained" disabled>
                            Link
                        </Button>
                        <Button variant="contained" disabled>
                            Link
                        </Button>
                        <Button variant="contained" disabled>
                            Link
                        </Button>
                    </Box>
                </Box>
            </Box>
        </>
    );
}
