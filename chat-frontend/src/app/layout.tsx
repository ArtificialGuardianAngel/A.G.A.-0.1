"use client";
import authApi from "@/api/auth";
import "./globals.css";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

const TITLES: { [key: string]: string } = {
    "give-and-earn":
        "Give&Earn - Support the largest humanitarian project that has ever existed.",
    wishes: "3 Wishes - Make your wish a reality with A.G.A.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();

    useEffect(() => {
        authApi
            .connect()
            .then((r) => {
                console.log(r.data);
            })
            .catch((e) => console.error(e));
    }, []);

    return (
        <html lang="en">
            <head>
                <title>{TITLES[pathname.split("/")[1]] || "A.G.A. Live"}</title>
                <meta
                    content="width=device-width, initial-scale=1"
                    name="viewport"
                />
                <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
                <meta
                    name="description"
                    content="A.G.A., or Artificial Guardian Angel, is an ambitious project aimed at developing a superintelligence that is deeply rooted in ethical considerations and benevolence. Our goal is to create an AI that can guide, protect, uplift, and promote altruism towards humanity, all living beings, and the planet at large. As we navigate the complexities of the digital age, A.G.A. is our commitment to ensuring that technology serves the greater good"
                />
            </head>
            <body>
                <video
                    className="fixed left-0 top-0 -z-20 h-[100dvh] w-screen object-cover"
                    autoPlay
                    loop
                    muted
                >
                    <source src="/videos/video-bg.mp4" type="video/mp4" />
                </video>

                <div className="wrapper-background fixed left-0 top-0 -z-10 h-[100dvh] w-screen"></div>
                {children}
            </body>
        </html>
    );
}
