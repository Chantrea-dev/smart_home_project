"use client";
import React, { useEffect, useState } from "react";
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
import app from "@/app/firebaseConfig";
import { getDatabase, ref, set, push, get, update } from "firebase/database";
export default function Home() {
    const [lamp, setLamp] = useState(undefined);
    const [kitchen, setKitchen] = useState(undefined);
    const [bedroom, setBedroom] = useState(undefined);
    const saveLamp = async () => {
        const db = getDatabase(app);
        const dbRef = ref(db, "smart/home");
        const snapshort = await get(dbRef);
        if (snapshort.exists()) {
            await update(dbRef, {
                lamp: !Object.values(snapshort.val())[0],
            });
            fetchLamp();
        } else {
            await set(dbRef, {
                lamp: true,
            });
            fetchLamp();
        }
    };
    const fetchLamp = async () => {
        const db = getDatabase(app);
        const dbRef = ref(db, "smart/home");
        const snapshort = await get(dbRef);
        if (snapshort.exists()) {
            setLamp(Object.values(snapshort.val())[0]);
        }
    };
    const Kitchen = async () => {
        const db = getDatabase(app);
        const dbRef = ref(db, "Kitchen/Kitchen");
        const snapshort = await get(dbRef);
        if (snapshort.exists()) {
            await update(dbRef, {
                kitchen: !Object.values(snapshort.val())[0],
            });
            fetchKitchen();
        } else {
            await set(dbRef, {
                kitchen: true,
            });
            fetchKitchen();
        }
    };

    const fetchKitchen = async () => {
        const db = getDatabase(app);
        const dbRef = ref(db, "Kitchen/Kitchen");
        const snapshort = await get(dbRef);
        if (snapshort.exists()) {
            setKitchen(Object.values(snapshort.val())[0]);
        }
    };

    const bedRoom = async () => {
        const db = getDatabase(app);
        const dbRef = ref(db, "bedroom/bedroom");
        const snapshort = await get(dbRef);
        if (snapshort.exists()) {
            await update(dbRef, {
                bedroom: !Object.values(snapshort.val())[0],
            });
            fetchBedroom();
        } else {
            await set(dbRef, {
                bedroom: true,
            });
            fetchBedroom();
        }
    };

    const fetchBedroom = async () => {
        const db = getDatabase(app);
        const dbRef = ref(db, "bedroom/bedroom");
        const snapshort = await get(dbRef);
        if (snapshort.exists()) {
            setBedroom(Object.values(snapshort.val())[0]);
        }
    };
    useEffect(() => {
        fetchLamp();
        fetchKitchen();
        fetchBedroom();
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
                            Lamp
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
                            onClick={saveLamp}
                            variant="contained"
                            color={lamp ? "error" : "success"}
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
                            <Box
                                sx={{
                                    fontSize: "6px",
                                    whiteSpace: "nowrap",
                                }}
                            >
                                Living Room
                            </Box>
                        </Button>

                        <Button
                            onClick={Kitchen}
                            variant="contained"
                            color={kitchen ? "error" : "success"}
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
                            onClick={bedRoom}
                            color={bedroom ? "error" : "success"}
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
                </Box>
            </Box>
        </>
    );
}
