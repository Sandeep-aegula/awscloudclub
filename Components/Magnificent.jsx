import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { useGLTF, Stage, PresentationControls } from '@react-three/drei'

function Model(props) {
  // useGLTF automatically handles many extensions
  const { scene } = useGLTF('/public/assessts/models/aws_logo.glb') 
  return <primitive object={scene} {...props} />
}

export default function AWSLogoViewer() {
  return (
    <div className="h-[500px] w-full bg-slate-900 rounded-xl overflow-hidden">
      <Canvas dpr={[1, 2]} camera={{ fov: 45 }}>
        <color attach="background" args={['#0f172a']} />
        <PresentationControls speed={1.5} global zoom={0.5} polar={[-0.1, Math.PI / 4]}>
          <Stage environment="city" intensity={0.6} contactShadow={false}>
            <Suspense fallback={null}>
              <Model scale={0.01} />
            </Suspense>
          </Stage>
        </PresentationControls>
      </Canvas>
    </div>
  )
}