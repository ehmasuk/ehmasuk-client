"use client";

import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Spin } from "antd";
import { Suspense } from "react";
import { BoyModel } from "./BoyModel";

function HeroModel() {
    return (
        <div className="lg:absolute lg:right-0 lg:top-0 lg:max-w-xl lg:h-[80vh] hidden lg:block">
            <Suspense fallback={<Spin className="animate-spin absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white" size="large" />}>
                <Canvas>
                    <Environment preset="studio" />
                    <OrbitControls enableZoom={false} />
                    <BoyModel />
                </Canvas>
            </Suspense>
        </div>
    );
}

export default HeroModel;
