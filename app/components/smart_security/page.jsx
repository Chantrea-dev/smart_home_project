"use client";
import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Button from "@mui/material/Button";
import LightIcon from "@mui/icons-material/Light";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";

import "./style.css";
import app from "@/app/firebaseConfig";
import { getDatabase, ref, set, push, get, update } from "firebase/database";
export default function DigitalClockViews() {
    const [door, setDoor] = useState(undefined);
    const saveDoor = async () => {
        const db = getDatabase(app);
        const dbRef = ref(db, "door/state");
        const snapshot = await get(dbRef);
        if (snapshot.exists()) {
            const currentState = snapshot.val();
            await set(dbRef, !currentState);
            setDoor(!currentState);
        } else {
            await set(dbRef, true);
            setDoor(true);
        }
    };
    const fetchDoor = async () => {
        const db = getDatabase(app);
        const dbRef = ref(db, "door/state");
        const snapshort = await get(dbRef);
        if (snapshort.exists()) {
            setDoor(Object.values(snapshort.val())[0]);
        }
    };
    useEffect(() => {
        fetchDoor();
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
                    <Box>Smart Door</Box>
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
                                color: "#403e3e",
                                fontFamily: "initial",
                            }}
                        >
                            Door
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
                            onClick={saveDoor}
                            color={door ? "success" : "error"}
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
                                    width: "60px",
                                    height: "35px",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            />
                            <Box sx={{ fontSize: "9px", whiteSpace: "nowrap" }}>
                                Outdoor Areas
                            </Box>
                        </Button>
                    </Box>
                </Box>
            </Box>
        </>
    );
}
