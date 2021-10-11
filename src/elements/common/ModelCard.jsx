import React, {Suspense, useEffect, useRef} from 'react'
import * as THREE from 'three';

import { OrbitControls,useGLTF, useAnimations } from "@react-three/drei";
import { Canvas } from "@react-three/fiber"


function Model(props) {
  console.log(props.url)
  const { scene, animations } = useGLTF(props.url);
  const { actions } = useAnimations(animations, scene)

  useEffect(() => {
    actions.Dance4.play()
  })

  return <primitive object={scene} />;
}


const ModelCard = (props) => {

 

    return (
      <Canvas height='100%' width='100%' camera={{ position: [0, 1.7, 2], fov: 50 }}>
      <pointLight position={[10, 10, 10]} intensity={1.3} />

      <ambientLight intensity={1} />
      <Suspense fallback={null}>
        <Model url={props.url}/>
      </Suspense>
      <OrbitControls />
    </Canvas>
    )
}
export default ModelCard;