'use client'
import { useEffect, useRef } from 'react'

export default function useEventListener(
  eventType,
  callback,
  { triggerOnMounted = false, element } = {}
) {
  const callbackRef = useRef(callback)

  useEffect(() => {
    callbackRef.current = callback
  }, [callback])

  useEffect(() => {
    if (typeof window === 'undefined') return

    const node = element ?? window
    const handler = (e) => callbackRef.current(e)
    if (triggerOnMounted) {
      handler()
    }
    node.addEventListener(eventType, handler)
    return () => node.removeEventListener(eventType, handler)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [eventType, element])
}
