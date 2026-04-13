'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type Echo = { id: number; text: string; x: number; y: number }

export default function HankyoClient() {
  const [echoes, setEchoes] = useState<Echo[]>([])
  const [counter, setCounter] = useState(0)

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value
    if (!val) return
    setCounter((c) => c + 1)
    setEchoes((prev) => [
      ...prev.slice(-40),
      { id: counter, text: val, x: Math.random() * 78 + 8, y: Math.random() * 78 + 8 },
    ])
  }

  return (
    <div style={{ backgroundColor: '#f5f4f2', minHeight: '100vh', position: 'relative', overflow: 'hidden', fontFamily: '"Noto Serif JP", serif' }}>
      {/* 次: うらがわをみせて */}
      <AnimatePresence>
        {echoes.map((echo) => (
          <motion.span
            key={echo.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.13 }}
            exit={{ opacity: 0 }}
            style={{ position: 'fixed', left: `${echo.x}%`, top: `${echo.y}%`, color: '#6b6560', fontSize: '0.9rem', pointerEvents: 'none', whiteSpace: 'nowrap', userSelect: 'none' }}
          >
            {echo.text}
          </motion.span>
        ))}
      </AnimatePresence>
      <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', padding: '2rem' }}>
        <p style={{ fontSize: '0.6rem', letterSpacing: '0.3em', color: '#b0ada8', marginBottom: '3rem', textTransform: 'uppercase' }}>Zone C — 反響域</p>
        <p style={{ color: '#8a8580', fontSize: '0.85rem', marginBottom: '2rem' }}>ここでは、言葉が残ります。</p>
        <input
          type="text"
          onChange={handleInput}
          placeholder="何か入力してください"
          style={{ width: '300px', maxWidth: '90vw', border: 'none', borderBottom: '1px solid #c0bdb8', background: 'transparent', padding: '0.75rem 0', fontSize: '0.9rem', color: '#6b6560', outline: 'none', fontFamily: '"Noto Serif JP", serif', textAlign: 'center' }}
        />
      </div>
    </div>
  )
}
