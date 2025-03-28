'use client'

import { useRef, useEffect } from 'react'

interface CircuitBackgroundProps {
  darkMode: boolean
}

export default function CircuitBackground({ darkMode }: CircuitBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    
    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)
    
    // Circuit node properties
    const nodeCount = 50
    const nodes: Node[] = []
    
    interface Node {
      x: number
      y: number
      connections: number[]
    }
    
    // Create nodes
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        connections: []
      })
    }
    
    // Create connections (each node connects to 1-3 other nodes)
    nodes.forEach((node, i) => {
      const connectionCount = Math.floor(Math.random() * 3) + 1
      
      for (let j = 0; j < connectionCount; j++) {
        let targetIndex
        do {
          targetIndex = Math.floor(Math.random() * nodeCount)
        } while (targetIndex === i || node.connections.includes(targetIndex))
        
        node.connections.push(targetIndex)
      }
    })
    
    // Draw circuit
    const drawCircuit = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Draw connections
      ctx.strokeStyle = darkMode ? 'rgba(147, 51, 234, 0.3)' : 'rgba(147, 51, 234, 0.2)'
      ctx.lineWidth = 1
      
      nodes.forEach((node, i) => {
        node.connections.forEach(targetIndex => {
          const targetNode = nodes[targetIndex]
          
          ctx.beginPath()
          ctx.moveTo(node.x, node.y)
          
          // Create a circuit-like path with right angles
          const midX = (node.x + targetNode.x) / 2
          const midY = (node.y + targetNode.y) / 2
          
          if (Math.random() > 0.5) {
            ctx.lineTo(midX, node.y)
            ctx.lineTo(midX, targetNode.y)
          } else {
            ctx.lineTo(node.x, midY)
            ctx.lineTo(targetNode.x, midY)
          }
          
          ctx.lineTo(targetNode.x, targetNode.y)
          ctx.stroke()
        })
      })
      
      // Draw nodes
      nodes.forEach(node => {
        ctx.beginPath()
        ctx.arc(node.x, node.y, 3, 0, Math.PI * 2)
        ctx.fillStyle = darkMode ? 'rgba(147, 51, 234, 0.8)' : 'rgba(147, 51, 234, 0.6)'
        ctx.fill()
      })
      
      // Draw data pulses
      const time = Date.now() / 1000
      nodes.forEach((node, i) => {
        if (i % 5 === Math.floor(time % 5)) {
          node.connections.forEach(targetIndex => {
            const targetNode = nodes[targetIndex]
            const progress = (time * 2) % 1
            
            const x = node.x + (targetNode.x - node.x) * progress
            const y = node.y + (targetNode.y - node.y) * progress
            
            ctx.beginPath()
            ctx.arc(x, y, 4, 0, Math.PI * 2)
            ctx.fillStyle = darkMode ? 'rgba(139, 92, 246, 0.8)' : 'rgba(139, 92, 246, 0.6)'
            ctx.fill()
          })
        }
      })
      
      requestAnimationFrame(drawCircuit)
    }
    
    drawCircuit()
    
    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [darkMode])
  
  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full"
    />
  )
}
