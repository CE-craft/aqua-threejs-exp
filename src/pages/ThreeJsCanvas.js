import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import texture1 from "../textures/texture_01.png";
import texture2 from "../textures/texture_02.jpg";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import Camera from "../components/Camera";
import WaterPlane from "../components/WaterPlane";
import { useRef, useEffect } from "react";

import { useHelper } from "@react-three/drei";
import { DirectionalLightHelper } from "three";

import { gsap } from "gsap";

const DirLightComponent = () => {
  const directionalLightRef = useRef();

  //useHelper(directionalLightRef, DirectionalLightHelper, "red");
  return (
    <directionalLight
      ref={directionalLightRef}
      intensity={0.2}
      color={"#ffffff"}
      position={[0, 20, 15]}
    />
  );
};

const HeroImageBackground = () => {
  const colorMap1 = useLoader(TextureLoader, texture1);
  const heroImage = useRef();
  useEffect(() => {
    console.log(heroImage);
    gsap.from(heroImage.current.material, {
      opacity: 0,
      duration: 1,
    });
    gsap.from(heroImage.current.position, {
      y: -2,
      duration: 2,
      ease: "Power3.easeOut",
    });
  });
  return (
    <mesh position={[0, 1, 0]} ref={heroImage}>
      <planeBufferGeometry args={[10, 15]} />
      <meshStandardMaterial transparent map={colorMap1} />
    </mesh>
  );
};

const ThreeJsScene = () => {
  const colorMap2 = useLoader(TextureLoader, texture2);

  return (
    <div className="ThreeJsCanvas">
      <Canvas pixelRation={[1, 2]}>
        <Camera />
        <ambientLight intensity={0.2} />
        <DirLightComponent />
        {/* <mesh rotation={[-Math.PI * 0.5, 0, 0]} position={[0, -5, 0]}>
        <planeBufferGeometry args={[100, 100]} />
        <Water />
      </mesh> */}

        <WaterPlane />
        <HeroImageBackground />
        <mesh position={[7, -25, 0]}>
          <planeBufferGeometry args={[18, 19]} />
          <meshStandardMaterial map={colorMap2} />
        </mesh>

        {/* <OrbitControls /> */}
      </Canvas>
    </div>
  );
};

export default ThreeJsScene;
