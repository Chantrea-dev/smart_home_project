import { Inter } from "next/font/google";
import "./globals.css";
import Home from "./components/smart_lamp/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Samrt Home",
    description: "Samrt Home",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <main>{children}</main>
            </body>
        </html>
    );
}
