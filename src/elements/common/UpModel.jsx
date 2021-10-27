import React, {Suspense, useEffect, useRef} from 'react'
import * as THREE from 'three';

import { OrbitControls,useGLTF, useAnimations, Environment, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber"

// useGLTF.preload("/958.glb")
 useGLTF.preload("/3104.glb")
// useGLTF.preload("/C1_golden.glb")
// useGLTF.preload("/5052.glb")
// useGLTF.preload("/4078.glb")

function ModelY() {
  const { scene, animations } = useGLTF("/3104.glb");
  const { actions } = useAnimations(animations, scene)

  useEffect(() => {
    actions.Dance2.play()
  })

  return <primitive rotation={[0,24.85,0]} object={scene} />;
}

const UpModel = () => {

 

    return (
      <Canvas height='100%' width='100%' camera={{ fov: 45 }}>
           
      {/* <ambientLight intensity={1} /> */}
      {/* <OrbitControls enableZoom={false} makeDefault/> */}
     
      <Suspense fallback={null}>
      <Environment
        makeDefault
            background={false}
            files={['night.exr']}
            path={'/assets/hdr'}
            preset={'night'}
          />
        <Stage environment="night" intensity={0.3} contactShadowOpacity={0}>
          <ModelY />
        </Stage>
      </Suspense>
    </Canvas>
    )
}
export default UpModel;