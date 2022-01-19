import { useRef, useEffect } from "react";
import { PerspectiveCamera } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Camera = () => {
  const camera = useRef();

  useEffect(() => {
    //console.log(camera.current.position);

    gsap.registerPlugin(ScrollTrigger);

    gsap.to(camera.current.position, {
      scrollTrigger: {
        //start: "top top",
        toggleActions: "restart pause resume reverse",
      },
      y: -25,
      duration: 2,
      ease: "Power1.easeOut",
    });
  });

  // let isScrolling = false;

  // window.onscroll = (e) => {
  //   isScrolling = true;
  // };

  // const target = new THREE.Vector3(0, -25, 24);

  // useFrame((state) => {
  //   if (isScrolling) {
  //     state.camera.position.lerp(target, 0.01);
  //   }
  // });
  //console.log(window);

  return (
    <PerspectiveCamera
      makeDefault
      ref={camera}
      aspect={window.innerWidth / window.innerHeight}
      position={[0, 2, 24]}
      far={100}
      near={0.1}
      fov={50}
      onUpdate={(self) => self.updateProjectionMatrix()}
      //lookAt={false}
    />
  );
};

export default Camera;
