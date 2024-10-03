"use client";

import { Icon } from "@iconify-icon/react";

import Image from "next/image";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import BackgroundText from "./BackgroundText";

import SkeletonImage from "antd/es/skeleton/Image";
import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";

function ProjectsSection() {
    let sliderRef = useRef(null);

    const [allProjects, setAllProjects] = useState();
    const [isLoaded, setIsLoaded] = useState(false);
    const [loaded, setLoaded] = useState(false);
    const getProjects = async () => {
        setIsLoaded(true);
        const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/projects");
        const data = await res.json();
        setAllProjects(data);
        setIsLoaded(false);
    };
    useEffect(() => {
        getProjects();
        setLoaded(true);
    }, []);

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        arrows: false,
        dots: false,

        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <section id="projects-section" className="max-w-4xl mx-auto lg:min-h-[100vh] flex flex-col justify-center py-10 relative mb-16 lg:mb-0">
            <div className="flex justify-between items-center">
                <p className="lg:text-6xl text-3xl font-extrabold">Projects</p>
                <a href="#contact-section" className="rounded-full lg:text-md lg:px-6 lg:py-3 text-sm px-3 py-2 h-fit border-2 border-[#494747] hover:bg-[#494747] duration-300">
                    See all
                </a>
            </div>
            <p className="text-xl text-des mt-6 leading-relaxed max-w-lg">I have worked on many projects since the beginning of my journey. Here are some of the remarkable ones.</p>
            <div className="ml-auto flex gap-2 items-center">
                <Icon className="text-link cursor-pointer" onClick={() => sliderRef.slickPrev()} icon="iconoir:page-left" width="30" height="30" />
                <Icon className="text-link cursor-pointer" onClick={() => sliderRef.slickNext()} icon="iconoir:page-right" width="30" height="30" />
            </div>

            <div className="mt-6">
                <Slider
                    {...settings}
                    ref={(slider) => {
                        sliderRef = slider;
                    }}
                >
                    {allProjects?.map((project, index) => {
                        return (
                            <div key={index} className="px-5">
                                <div className="max-h-80 mb-5 overflow-hidden group">
                                    <Image
                                        className="cursor-pointer group-hover:-translate-y-[calc(100%-320px)] w-full duration-[10s] ease-linear transition"
                                        src={project.image}
                                        alt="project"
                                        width={500}
                                        height={500}
                                        sizes="(min-width: 808px) 50vw, 100vw"
                                    />
                                    {isLoaded && <SkeletonImage active />}
                                </div>
                                <p className="text-4xl font-bold mb-3 text-white">{project.title}</p>
                                <p className="text-xl text-des leading-relaxed max-w-lg">{project.subTitle}</p>
                                <a href={project.liveLink} className="mt-3 text-sm text-sky-400 hover:text-blue-600">
                                    View on live
                                </a>
                            </div>
                        );
                    })}
                </Slider>
            </div>

            <BackgroundText text="projects" />
        </section>
    );
}

export default ProjectsSection;
