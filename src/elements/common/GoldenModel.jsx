import React, {Suspense, useEffect, useRef} from 'react'
import * as THREE from 'three';

import { OrbitControls,useGLTF, useAnimations, Environment, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber"

// useGLTF.preload("/958.glb")
// useGLTF.preload("/3104.glb")
 useGLTF.preload("/C1_golden.glb")
// useGLTF.preload("/5052.glb")
// useGLTF.preload("/4078.glb")

function ModelX() {
  const { scene, animations } = useGLTF("/C1_golden.glb");
  const { actions } = useAnimations(animations, scene)

  useEffect(() => {
    actions.Dance3.play()
  })

  return <primitive object={scene} />;
}

const GoldenModel = () => {

 

    return (
      <Canvas height='100%' width='100%' camera={{ fov: 45 }}>
           
      {/* <ambientLight intensity={1} /> */}
      <OrbitControls enableZoom={false} makeDefault/>
     
      <Suspense fallback={null}>
        <Environment
        makeDefault
            background={false}
            files={['forest.exr']}
            path={'/assets/hdr'}
            preset={'forest'}
          />
        <Stage environment="forest">
          <ModelX />
        </Stage>
      </Suspense>
    </Canvas>
    )
}
export default GoldenModel;