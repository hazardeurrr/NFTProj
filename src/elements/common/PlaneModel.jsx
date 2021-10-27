import React, {Suspense, useEffect, useRef} from 'react'
import * as THREE from 'three';

import { OrbitControls,useGLTF, useAnimations, Environment, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber"

// useGLTF.preload("/958.glb")
// useGLTF.preload("/3104.glb")
 useGLTF.preload("/958.glb")
// useGLTF.preload("/5052.glb")
// useGLTF.preload("/4078.glb")

function ModelE() {
  const { scene, animations } = useGLTF("/958.glb");
  const { actions } = useAnimations(animations, scene)

  useEffect(() => {
    actions.Dance2.play()
  })

  return <primitive object={scene} />;
}

const PlaneModel = () => { 

    return (
      <Canvas height='100%' width='100%' camera={{ fov: 47 }}>
           
      {/* <ambientLight intensity={1} /> */}
      {/* <OrbitControls enableZoom={false} makeDefault/> */}
     
      <Suspense fallback={null}>
        <Environment
        makeDefault
            background={false}
            files={['city.exr']}
            path={'/assets/hdr'}
            preset={'city'}
          />
        <Stage environment="city">
          <ModelE />
        </Stage>
      </Suspense>
    </Canvas>
    )
}
export default PlaneModel;