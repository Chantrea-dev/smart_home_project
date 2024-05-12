"use client";
import React, { useState } from "react";
import {
    TextField,
    Button,
    Typography,
    Link,
    Container,
    CssBaseline,
    Box,
} from "@mui/material";
import "./globals.css";
export default function Home() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
        if (email === "chan@gmail.com" && password === "123") {
            window.location.href = "/components/form_login";
        } else {
            setError("Incorrect email or password. Please try again.");
        }
    };

    return (
        <Box className="bg-login">
            <Container maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        textAlign: "center",
                        height: "100vh",
                        paddingTop: "10rem",
                    }}
                >
                    <Typography component="h1" variant="h5">
                        Sign in to your account
                    </Typography>
                    {error && <Typography color="error">{error}</Typography>}
                    <form
                        onSubmit={handleSubmit}
                        action="/components/form_login"
                        autoComplete="off"
                    >
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Your email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                        >
                            Sign In
                        </Button>
                        <Typography sx={{ paddingTop: "15px" }}>
                            Don't have an account yet?
                            <Link href="#" variant="body2">
                                Sign Up
                            </Link>
                        </Typography>
                    </form>
                </Box>
            </Container>
        </Box>
    );
}
