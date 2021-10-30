import React, {Suspense, useEffect, useRef} from 'react'
import * as THREE from 'three';

import { OrbitControls,useGLTF, useAnimations, useProgress, Html, Environment, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber"
import CircularProgress from '@mui/material/CircularProgress'
import Typography from '@mui/material/Typography'
// import PropTypes from 'props-types'
import Box from '@mui/material/Box'

// useGLTF.preload("/958.glb")
// useGLTF.preload("/3104.glb")
 useGLTF.preload("/C1_golden.glb")
// useGLTF.preload("/5052.glb")
// useGLTF.preload("/4078.glb")


function CircularProgressWithLabel(props) {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="caption" component="div" color="white">
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}


function Loader(){
  const {progress} = useProgress()
  return <Html center><CircularProgressWithLabel value={progress} /> </Html>
}

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
      <OrbitControls enableZoom={true} makeDefault/>
     
      <Suspense fallback={<Loader />}>
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