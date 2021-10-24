import React, {Suspense, useEffect, useRef} from 'react'
import * as THREE from 'three';

import { OrbitControls,useGLTF, useAnimations, Environment, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber"


function OneModel(props) {
  console.log(props.url)
  const { scene, animations } = useGLTF(props.url);
  const { actions } = useAnimations(animations, scene)

  useEffect(() => {
    //do 1 to 1 match with real dance name 
    switch(props.dance){
      case 1:
        actions.Dance1.play()
        break;
      case 2:
        actions.Dance2.play()
        break;
      case 3:
        actions.Dance3.play()
        break;
      case 4:
        actions.Dance4.play()
        break;
      case 5:
        actions.Dance5.play()
        break;
      default:
        break;
    }
  })

  return <primitive object={scene} />;
}


const FourCrabs = (props) => {

 

    return (
      <Canvas height='100%' width='100%' camera={{ fov: 90 }}>
           
      {/* <ambientLight intensity={1} /> */}
      
      <Suspense fallback={null}>
        <Stage intensity={0.4} position={[0, -10, 25]}>
          <OneModel url="/4078.glb" dance={4}/>
        </Stage>
        <Stage intensity={0.4} position={[10, -10, 25]}>
          <OneModel url="/5018.glb" dance={4}/>
        </Stage>
        
      </Suspense>
      {/* <OrbitControls /> */}
    </Canvas>
    )
}
export default FourCrabs;