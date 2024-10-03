"use client";

import { logoutAction } from "@/actions/authActions";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";

function Header() {
    const [menu, setMenu] = useState(false);

    const { data: session } = useSession();

    return (
        <>
            <header className="lg:py-3 py-5 lg:mt-7 z-20 relative">
                <nav className="max-w-7xl mx-auto flex justify-between items-center">
                    {/* logo */}
                    <Link href="/" className="font-black text-2xl tracking-normal">
                        EH MASUK
                    </Link>

                    {/* links */}
                    <div suppressHydrationWarning className="lg:flex lg:gap-x-16 gap-5 hidden">
                        <a href="#about-section" className="text-link font-semibold">
                            About
                        </a>
                        <a href="#projects-section" className="text-link font-semibold">
                            projects
                        </a>
                        <a href="#contact-section" className="text-link font-semibold">
                            Contact
                        </a>
                        {session && (
                            <a onClick={() => logoutAction({})} href="#" className="text-link font-semibold">
                                Logout
                            </a>
                        )}
                    </div>

                    {/* hamburger menu */}
                    <div className={`lg:hidden flex flex-col gap-3 group ${menu ? "active" : ""}`} onClick={() => setMenu(!menu)}>
                        <span className="inline-block h-0.5 w-8 bg-white rounded-full group-[&.active]:rotate-45 group-[&.active]:-mb-[7px] origin-center transition-all duration-300"></span>
                        <span className="inline-block h-0.5 w-8 bg-white rounded-full group-[&.active]:-rotate-45 group-[&.active]:-mt-[7px] origin-center transition-all duration-300"></span>
                    </div>
                </nav>
            </header>
            {/* small screen menu */}

            <div className={`fixed duration-500 p-10 overflow-hidden h-screen z-10 top-0 ${menu ? "right-0" : "-right-full"} w-full bg-[#000000]`}>
                <div className="flex flex-col gap-10 items-center text-3xl justify-center h-full text-white">
                    <a onClick={() => setMenu(false)} href="#about-section" className="text-link font-semibold">
                        About
                    </a>
                    <a onClick={() => setMenu(false)} href="#services-section" className="text-link font-semibold">
                        Services
                    </a>
                    <a onClick={() => setMenu(false)} href="#projects-section" className="text-link font-semibold">
                        projects
                    </a>
                    <a onClick={() => setMenu(false)} href="#contact-section" className="text-link font-semibold">
                        Contact
                    </a>
                </div>
            </div>
        </>
    );
}

export default Header;
