import React, {Suspense, useEffect, useRef} from 'react'
import * as THREE from 'three';

import { OrbitControls,useGLTF, useAnimations, Environment, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber"

// useGLTF.preload("/958.glb")
// useGLTF.preload("/3104.glb")
//  useGLTF.preload("/C1_golden.glb")
// useGLTF.preload("/5052.glb")
// useGLTF.preload("/4078.glb")

function Model(props) {
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

const ModelCard = (props) => {

 

    return (
      <Canvas height='100%' width='100%' camera={{ fov: 45 }}>
           
      {/* <ambientLight intensity={1} /> */}
      <OrbitControls makeDefault/>

      <Suspense fallback={null}>
        <Stage contactShadowOpacity={props.shadowOpacity} intensity={props.intensity}>
          <Model url={props.url} dance={props.dance}/>
        </Stage>
      </Suspense>
    </Canvas>
    )
}
export default ModelCard;