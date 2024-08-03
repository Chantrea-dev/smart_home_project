// "use client";
// import React, { useState } from "react";
// import {
//     TextField,
//     Button,
//     Typography,
//     Link,
//     Container,
//     CssBaseline,
//     Box,
// } from "@mui/material";
// import "./globals.css";
// export default function Home() {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [error, setError] = useState("");
//     const handleSubmit = (event) => {
//         event.preventDefault();
//         if (email === "chan@gmail.com" && password === "123") {
//             window.location.href = "/components/form_login";
//         } else {
//             setError("Incorrect email or password. Please try again.");
//         }
//     };

//     return (
//         <Box className="bg-login">
//             <Container maxWidth="xs">
//                 <CssBaseline />
//                 <Box
//                     sx={{
//                         textAlign: "center",
//                         height: "100vh",
//                         paddingTop: "10rem",
//                     }}
//                 >
//                     <Typography component="h1" variant="h5">
//                         Sign in to your account
//                     </Typography>
//                     {error && <Typography color="error">{error}</Typography>}
//                     <form
//                         onSubmit={handleSubmit}
//                         action="/components/form_login"
//                         autoComplete="off"
//                     >
//                         <TextField
//                             variant="outlined"
//                             margin="normal"
//                             required
//                             fullWidth
//                             id="email"
//                             label="Your email"
//                             name="email"
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                         />
//                         <TextField
//                             variant="outlined"
//                             margin="normal"
//                             required
//                             fullWidth
//                             name="password"
//                             label="Password"
//                             type="password"
//                             id="password"
//                             autoComplete="current-password"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                         />
//                         <Button
//                             type="submit"
//                             fullWidth
//                             variant="contained"
//                             color="primary"
//                         >
//                             Sign In
//                         </Button>
//                         <Typography sx={{ paddingTop: "15px" }}>
//                             Don't have an account yet?
//                             <Link href="#" variant="body2">
//                                 Sign Up
//                             </Link>
//                         </Typography>
//                     </form>
//                 </Box>
//             </Container>
//         </Box>
//     );
// }
"use client";
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Curtains from "@/app/components/smart_curtain/page";
import Door from "@/app/components/smart_security/page";
import Light from "@/app/components/smart_lamp/page";
import WbTwilightIcon from "@mui/icons-material/WbTwilight";
import DryCleaningIcon from "@mui/icons-material/DryCleaning";
import VerticalShadesIcon from "@mui/icons-material/VerticalShades";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import LogoutIcon from "@mui/icons-material/Logout";
import Image from "next/image";
// import "./style.css";
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
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
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
                display: "flex",
                justifyContent: "center",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    flexDirection: "column",
                    height: "100vh",
                    alignItems: "center",
                }}
            >
                <Box sx={{ width: "100%" }}>
                    <TabPanel value={value} index={0}>
                        <Light />
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <Curtains />
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <Door />
                    </TabPanel>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: "10rem",
                    }}
                    className="tab-bar"
                >
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        aria-label="icon label tabs example"
                        sx={{ width: "100%", overflow: "auto" }}
                    >
                        <Tab icon={<WbTwilightIcon />} label="Light" />
                        <Tab icon={<VerticalShadesIcon />} label="Curtains" />
                        <Tab icon={<MeetingRoomIcon />} label="Door" />
                    </Tabs>
                </Box>
            </Box>
        </Box>
    );
}
