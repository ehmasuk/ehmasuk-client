"use client";

import BackgroundText from "@/components/BackgroundText";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import { Icon } from "@iconify-icon/react";
import { BackTop, Tooltip } from "antd";
import { useEffect, useState } from "react";

function Home() {
    const [scrolled, setScrolled] = useState(0);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScrolled(window.scrollY);
        });
    }, []);

    return (
        <div>
            <HeroSection />

            {/* hero bottom bar */}
            <div className={`absolute bottom-0 left-0 w-full px-5 hidden lg:block ${scrolled > 10 ? "h-0 opacity-0" : "h-16 opacity-100"} duration-500 overflow-hidden`}>
                <div className="flex max-w-7xl items-center justify-between mx-auto">
                    <a href="#about-section" className="flex gap-2 items-center justify-center cursor-pointer text-link">
                        <Icon icon="iconoir:page-down" width="25" height="25" />
                        <span>Scroll to explore</span>
                    </a>
                    <div className="flex lg:gap-10 gap-4 items-center justify-center ">
                        <Tooltip title="Github">
                            <button className="text-link">
                                <a href="https://github.com/ehmasuk">
                                    <Icon icon="hugeicons:github" width="25" height="25" />
                                </a>
                            </button>
                        </Tooltip>
                        <Tooltip title="Linkedin">
                            <button className="text-link">
                                <a href="https://www.linkedin.com/in/ehmasuk">
                                    <Icon icon="ri:linkedin-fill" width="25" height="25" />
                                </a>
                            </button>
                        </Tooltip>
                        <Tooltip title="Mail">
                            <button className="text-link">
                                <a href="mailto:ehmasuk@gmail.com">
                                    <Icon icon="ic:outline-email" width="25" height="25" />
                                </a>
                            </button>
                        </Tooltip>
                    </div>
                </div>
            </div>

            {/* about section */}
            <section className="max-w-4xl mx-auto lg:min-h-[100vh] flex flex-col justify-center lg:py-10 relative mb-16 lg:mb-0" id="about-section">
                <p className="lg:text-6xl text-3xl font-extrabold">About me</p>
                <p className="text-xl text-des my-6 leading-relaxed max-w-lg">
                    I have a strong background in both frontend and backend technologies. Im a self-taught developer with a passion for problem-solving and continuous learning new technologies.
                </p>

                <b className="text-xl block mb-3">Knowledges:</b>

                <div className="flex flex-wrap gap-3">
                    <div className="rounded-lg border border-[#2E2E2E] px-2 bg-black py-1.5 flex gap-1 items-center text-sm">
                        <Icon icon="hugeicons:bootstrap" className="text-violet-600" width="25" height="25" />
                        BOOTSTRAP
                    </div>
                    <div className="rounded-lg border border-[#2E2E2E] px-2 bg-black py-1.5 flex gap-1 items-center text-sm">
                        <Icon icon="devicon:tailwindcss" width="25" height="25" />
                        TAILWIND CSS
                    </div>
                    <div className="rounded-lg border border-[#2E2E2E] px-2 bg-black py-1.5 flex gap-1 items-center text-sm">
                        <Icon icon="logos:react" width="20" height="20" />
                        REACT JS
                    </div>
                    <div className="rounded-lg border border-[#2E2E2E] px-2 bg-black py-1.5 flex gap-1 items-center text-sm">
                        <Icon icon="logos:redux" width="20" height="20" />
                        REDUX
                    </div>
                    <div className="rounded-lg border border-[#2E2E2E] px-2 bg-black py-1.5 flex gap-1 items-center text-sm">
                        <Icon icon="tabler:brand-typescript" className="text-sky-600" width="25" height="25" />
                        TYPESCRIPT
                    </div>
                    <div className="rounded-lg border border-[#2E2E2E] px-2 bg-black py-1.5 flex gap-1 items-center text-sm">
                        <Icon icon="ri:nextjs-line" width="25" height="25" />
                        NEXT JS
                    </div>
                    <div className="rounded-lg border border-[#2E2E2E] px-2 bg-black py-1.5 flex gap-1 items-center text-sm">
                        <Icon icon="logos:nodejs-icon" width="20" height="20" />
                        NODE JS
                    </div>
                    <div className="rounded-lg border border-[#2E2E2E] px-2 bg-black py-1.5 flex gap-1 items-center text-sm">
                        <Icon icon="devicon:mongoose" width="20" height="20" />
                        MONGOOSE
                    </div>
                    <div className="rounded-lg border border-[#2E2E2E] px-2 bg-black py-1.5 flex gap-1 items-center text-sm">
                        <Icon icon="logos:jwt-icon" width="15" height="15" />
                        JWT
                    </div>
                    <div className="rounded-lg border border-[#2E2E2E] px-2 bg-black py-1.5 flex gap-1 items-center text-sm">
                        <Icon icon="simple-icons:prisma" width="20" height="20" />
                        PRISMA
                    </div>
                </div>

                <BackgroundText text="about" />
            </section>

            {/* projects section */}
            <ProjectsSection />

            {/* contact section */}
            <section className="max-w-4xl mx-auto py-10 lg:min-h-[100vh] flex flex-col justify-center relative" id="contact-section">
                <p className="lg:text-6xl text-3xl font-extrabold">Let&apos;s connect</p>
                <p className="text-xl text-des my-6 leading-relaxed max-w-lg">Feel free to ask me any questions related to my activities. i will be happy to answer you.</p>
                <a className="lg:text-3xl text-2xl mb-5 flex items-center gap-5 hover:text-sky-500 duration-300" href="mailto:ehmasuk@gmail.com">
                    <Icon icon="skill-icons:gmail-light" width="40" height="50" />
                    ehmasuk@gmail.com
                </a>
                <a className="lg:text-3xl text-2xl mb-5 flex items-center gap-5 hover:text-sky-500 duration-300" href="mailto:ehmasuk@gmail.com">
                    <Icon icon="logos:whatsapp-icon" width="40" height="50" />
                    +8801723266507
                </a>
                <BackgroundText text="hello" />
            </section>
            {scrolled > 10 && (
                <BackTop>
                    <Icon icon="cil:arrow-circle-top" className="text-white" width="30" height="30" />
                </BackTop>
            )}
        </div>
    );
}

export default Home;
