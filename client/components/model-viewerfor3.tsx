"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { useGLTF, OrbitControls, Environment } from "@react-three/drei"

interface ModelViewerProps {
  modelPath: string
  scale?: number
  position?: [number, number, number]
  rotation?: [number, number, number]
  autoRotate?: boolean
}

function Model({ modelPath, scale = 1, position = [0, 0, 0], rotation = [0, 0, 0], autoRotate = true }) {
  const ref = useRef()
  const { scene } = useGLTF(modelPath)

  useFrame((state, delta) => {
    if (autoRotate && ref.current) {
      ref.current.rotation.y += delta * 0.5
    }
  })

  return <primitive ref={ref} object={scene} scale={scale} position={position} rotation={rotation} />
}

export default function ModelViewer({
  modelPath = "/robot.glb",
  scale = 2,
  position = [0, -1, 0],
  rotation = [0, 0, 0],
  autoRotate = true,
}: ModelViewerProps) {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Model modelPath={modelPath} scale={scale} position={position} rotation={rotation} autoRotate={autoRotate} />
        <OrbitControls enableZoom={false} enablePan={false} />
        <Environment preset="city" />
      </Canvas>
    </div>
  )
}

