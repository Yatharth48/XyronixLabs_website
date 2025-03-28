'use client'

import { useRef, useEffect } from 'react'

interface WaveAnimationProps {
  darkMode: boolean
}

export default function WaveAnimation({ darkMode }: WaveAnimationProps) {
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
    
    // Wave properties
    const waves = [
      { amplitude: 25, period: 0.02, speed: 0.01, color: darkMode ? 'rgba(147, 51, 234, 0.2)' : 'rgba(147, 51, 234, 0.1)' },
      { amplitude: 15, period: 0.03, speed: 0.02, color: darkMode ? 'rgba(79, 70, 229, 0.2)' : 'rgba(79, 70, 229, 0.1)' },
      { amplitude: 10, period: 0.04, speed: 0.015, color: darkMode ? 'rgba(6, 182, 212, 0.2)' : 'rgba(6, 182, 212, 0.1)' }
    ]
    
    let time = 0
    
    // Draw waves
    const drawWaves = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      waves.forEach(wave => {
        ctx.beginPath()
        
        for (let x = 0; x < canvas.width; x += 5) {
          const y = canvas.height / 2 + 
                   Math.sin(x * wave.period + time * wave.speed) * wave.amplitude
          
          if (x === 0) {
            ctx.moveTo(x, y)
          } else {
            ctx.lineTo(x, y)
          }
        }
        
        // Draw horizontal waves
        for (let y = 0; y < canvas.height; y += 5) {
          const x = canvas.width / 2 + 
                   Math.sin(y * wave.period + time * wave.speed) * wave.amplitude
          
          ctx.moveTo(x, y)
          ctx.lineTo(x + 1, y)
        }
        
        ctx.strokeStyle = wave.color
        ctx.lineWidth = 2
        ctx.stroke()
      })
      
      time += 0.05
      requestAnimationFrame(drawWaves)
    }
    
    drawWaves()
    
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
