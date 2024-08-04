"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box } from "@mui/material";
import { Gauge } from "@mui/x-charts/Gauge";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import LightIcon from "@mui/icons-material/Light";
import SingleBedIcon from "@mui/icons-material/SingleBed";
import CurtainsIcon from "@mui/icons-material/Curtains";
import CloudIcon from "@mui/icons-material/Cloud";
import "./style.css";
import app from "@/app/firebaseConfig";
import { getDatabase, ref, set, push, get, update } from "firebase/database";
export default function Curtain() {
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(true);
    const [curtain, setCurtain] = useState(undefined);

    const saveCurtain = async () => {
        const db = getDatabase(app);
        const dbRef = ref(db, "curtain/state");
        const snapshot = await get(dbRef);
        if (snapshot.exists()) {
            const currentState = snapshot.val();
            await set(dbRef, !currentState);
            setCurtain(!currentState);
        } else {
            await set(dbRef, true);
            setCurtain(true);
        }
    };
    const fetchCutain = async () => {
        const db = getDatabase(app);
        const dbRef = ref(db, "curtain/state");
        const snapshort = await get(dbRef);
        if (snapshort.exists()) {
            setCurtain(Object.values(snapshort.val())[0]);
        }
    };
    useEffect(() => {
        fetchCutain();
    }, []);
    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const response = await axios.get(
                    `https://api.openweathermap.org/data/2.5/weather?q=Cambodia&units=metric&appid=ff311eb0b0ba3853e2235527b49a2ea6`
                );
                setWeather(response.data);
                setLoading(false);
            } catch (error) {
                setLoading(false);
            }
        };

        fetchWeather();
    }, []);

    return (
        <>
            <Box sx={{ display: "grid", gap: "20px", width: "370px" }}>
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
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                    }}
                >
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
                                color: "#403e3e",
                                fontFamily: "initial",
                            }}
                        >
                            Curtain
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
                            onClick={saveCurtain}
                            color={curtain ? "success" : "error"}
                            sx={{
                                display: "grid",
                                fontSize: "10px",
                                textAlign: "center",
                                width: "67px",
                                textTransform: "capitalize",
                            }}
                        >
                            <CurtainsIcon
                                sx={{
                                    width: "35px",
                                    height: "35px",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            />
                            <Box sx={{ fontSize: "10px" }}>Curtain</Box>
                        </Button>
                    </Box>

                    <Box
                        sx={{
                            fontSize: "20px",
                            textAlign: "center",
                            background: "rgb(2,0,36)",
                            background:
                                "linear-gradient(90deg, rgba(2,0,36,1) 1%, rgba(11,90,153,1) 32%, rgba(17,144,232,0.3786764705882353) 100%, rgba(0,212,255,1) 100%)",
                            height: "57px",
                            borderRadius: "9px",
                            padding: "10px",
                            color: "white",
                            display: "flex",
                            gap: "10px",
                        }}
                    >
                        <CloudIcon
                            sx={{
                                width: "40px",
                                height: "40px",
                            }}
                        />
                        {loading ? (
                            <Box>Loading...</Box>
                        ) : weather ? (
                            <>
                                <Box>{weather.main.temp}°C</Box>
                                <Box
                                    sx={{
                                        paddingTop: "15px",
                                        whiteSpace: "nowrap",
                                    }}
                                >
                                    {weather.name}
                                </Box>
                            </>
                        ) : (
                            <Box>Error fetching weather</Box>
                        )}
                    </Box>
                </Box>
            </Box>
        </>
    );
}
