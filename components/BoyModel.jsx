import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";

export function BoyModel(props) {
    const group = useRef();
    const { nodes, materials, animations } = useGLTF("/boy-model.glb");
    const { actions } = useAnimations(animations, group);
    useEffect(() => {
        actions["Armature|mixamo.com|Layer0"].reset().fadeIn(0.5).play();
    }, []);
    return (
        <group ref={group} dispose={null} position={[0, -2, 0]}>
            <group name="Scene">
                <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.024}>
                    <skinnedMesh name="Boy01_Body_Geo" geometry={nodes.Boy01_Body_Geo.geometry} material={materials.Boy01_Body_MAT1} skeleton={nodes.Boy01_Body_Geo.skeleton} />
                    <skinnedMesh name="Boy01_Brows_Geo" geometry={nodes.Boy01_Brows_Geo.geometry} material={materials.Boy01_Brows_MAT2} skeleton={nodes.Boy01_Brows_Geo.skeleton} />
                    <skinnedMesh name="Boy01_Eyes_Geo" geometry={nodes.Boy01_Eyes_Geo.geometry} material={materials.Boy01_Eyes_MAT2} skeleton={nodes.Boy01_Eyes_Geo.skeleton} />
                    <skinnedMesh name="h_Geo" geometry={nodes.h_Geo.geometry} material={materials.Boy01_Mouth_MAT2} skeleton={nodes.h_Geo.skeleton} />
                    <primitive object={nodes.mixamorigHips} />
                </group>
            </group>
        </group>
    );
}

useGLTF.preload("/boy-model.glb");
