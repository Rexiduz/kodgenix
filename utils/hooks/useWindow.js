'use client'
import { useState } from 'react'
import useEventListener from './useEventListener'

export default function useWindow() {
  const [sizes, setSizes] = useState(() => {
    if (typeof window === 'undefined') return {}
    return { width: window.innerWidth, height: window.innerHeight }
  })

  useEventListener(
    'resize',
    () => {
      if (typeof window !== 'undefined') {
        setSizes({ width: window.innerWidth, height: window.innerHeight })
      }
    },
    { triggerOnMounted: true }
  )

  return sizes
}
