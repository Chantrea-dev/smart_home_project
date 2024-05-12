"use client";
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CloseHanger from "@/app/components/cloth_hanger/page";
import Curtains from "@/app/components/smart_curtain/page";
import Door from "@/app/components/smart_security/page";
import Light from "@/app/components/smart_larmp/page";
import WbTwilightIcon from "@mui/icons-material/WbTwilight";
import DryCleaningIcon from "@mui/icons-material/DryCleaning";
import VerticalShadesIcon from "@mui/icons-material/VerticalShades";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import LogoutIcon from "@mui/icons-material/Logout";
import PhoneIcon from "@mui/icons-material/Phone";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import Image from "next/image";
import "./style.css";
function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Box
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </Box>
    );
}

export default function VerticalTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box
            sx={{
                // flexGrow: 1,
                bgcolor: "background.paper",
                height: "50vh",
                // display: "flex",
                width: "100%",
                display: {
                    sm: "flex",
                },
            }}
        >
            <Box
                sx={{
                    boxShadow: 2,
                    borderRadius: "5px",
                    display: {
                        xs: "none",
                        sm: "block",
                    },
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        paddingTop: "10px",
                        marginLeft: "20px",
                    }}
                >
                    <Image
                        src="/headerLogo-arduino 1.png"
                        width={100}
                        height={50}
                    />
                </Box>
                <Tabs
                    className="tab"
                    orientation="vertical"
                    variant="scrollable"
                    value={value}
                    onChange={handleChange}
                    aria-label="Vertical tabs example"
                    sx={{
                        borderRight: 1,
                        borderColor: "divider",
                        width: "250px",
                    }}
                >
                    <Tab
                        label={
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "5px",
                                    textTransform: "capitalize",
                                }}
                            >
                                <WbTwilightIcon style={{ marginLeft: "5px" }} />
                                Light
                            </Box>
                        }
                    />
                    <Tab
                        label={
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "5px",
                                    textTransform: "capitalize",
                                }}
                            >
                                <DryCleaningIcon
                                    style={{ marginLeft: "5px" }}
                                />
                                Close hanger
                            </Box>
                        }
                    />
                    <Tab
                        label={
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "5px",
                                    textTransform: "capitalize",
                                }}
                            >
                                <VerticalShadesIcon
                                    style={{ marginLeft: "5px" }}
                                />
                                Curtains
                            </Box>
                        }
                    />
                    <Tab
                        label={
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "5px",
                                    textTransform: "capitalize",
                                }}
                            >
                                <MeetingRoomIcon
                                    style={{ marginLeft: "5px" }}
                                />
                                Door
                            </Box>
                        }
                    />
                    <Tab
                        label={
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "5px",
                                    textTransform: "capitalize",
                                    objectFit: "cover",
                                }}
                            >
                                <Image
                                    src="/user.jpg"
                                    width={30}
                                    height={30}
                                    style={{ borderRadius: "100%" }}
                                />
                                chantrea
                            </Box>
                        }
                    />
                    <Tab
                        label={
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "5px",
                                    textTransform: "capitalize",
                                    objectFit: "cover",
                                }}
                            >
                                <LogoutIcon />
                                Log out
                            </Box>
                        }
                    />
                </Tabs>
            </Box>
            <Box sx={{ width: "100%" }}>
                <TabPanel value={value} index={0}>
                    <Light />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <CloseHanger />
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <Curtains />
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <Door />
                </TabPanel>
            </Box>
            <Box
                sx={{
                    display: {
                        xs: "block",
                        sm: "none",
                        xs: "flex",
                    },
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "10rem",
                    width: "100%",
                    overflow: "auto",
                }}
            >
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="icon label tabs example"
                >
                    <Tab icon={<WbTwilightIcon />} label="Light" />
                    <Tab icon={<DryCleaningIcon />} label=" Close hanger" />
                    <Tab icon={<VerticalShadesIcon />} label="Curtains" />
                    <Tab icon={<MeetingRoomIcon />} label="Door" />
                </Tabs>
            </Box>
        </Box>
    );
}
