import AuthProvider from "@/components/AuthProvider";
import Header from "@/components/Header";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import localFont from "next/font/local";
import "./globals.css";

const sfPro = localFont({
    src: [
        {
            path: "./fonts/SFPRODISPLAYBOLD.otf",
            weight: "900",
        },
        {
            path: "./fonts/SFPRODISPLAYMEDIUM.otf",
            weight: "600",
        },
        {
            path: "./fonts/SFPRODISPLAYREGULAR.otf",
            weight: "500",
        },
        {
            path: "./fonts/sfprodisplaylight.ttf",
            weight: "400",
        },
        {
            path: "./fonts/sfprodisplayultralight.ttf",
            weight: "300",
        },
    ],
    variable: "--font-sfPro",
});

export const metadata = {
    title: "Eh masuk",
    description:
        "I’m a passionate fullstack web developer specializing in MERN stack (MongoDB, Express, React, Node.js) and Next.js. I thrive on building efficient, scalable, and user-friendly web applications that offer seamless experiences across devices. With a strong foundation in both frontend and backend technologies, I transform ideas into fully functional digital solutions.Explore my projects to see how I craft innovative and robust applications that push the boundaries of modern web development.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <AuthProvider>
                <AntdRegistry>
                    <body className={`${sfPro.variable} antialiased`}>
                        <main>
                            <Header />
                            {children}
                        </main>
                    </body>
                </AntdRegistry>
            </AuthProvider>
        </html>
    );
}
