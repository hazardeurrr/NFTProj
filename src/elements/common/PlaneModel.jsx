import React, {Suspense, useEffect, useRef} from 'react'
import * as THREE from 'three';

import { OrbitControls,useGLTF, useAnimations, Html, useProgress,Environment, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber"
import CircularProgress from '@mui/material/CircularProgress'
import Typography from '@mui/material/Typography'
// import PropTypes from 'props-types'
import Box from '@mui/material/Box'

// useGLTF.preload("/958.glb")
// useGLTF.preload("/3104.glb")
 useGLTF.preload("/958.glb")
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

// CircularProgressWithLabel.propTypes = {
//   /**
//    * The value of the progress indicator for the determinate variant.
//    * Value between 0 and 100.
//    * @default 0
//    */
//   value: PropTypes.number.isRequired,
// };

function Loader(){
  const {progress} = useProgress()
  return <Html center><CircularProgressWithLabel value={progress} /> </Html>
}

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
     
      <Suspense fallback={<Loader />}>
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