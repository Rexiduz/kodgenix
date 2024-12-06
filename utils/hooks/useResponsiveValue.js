import { useDeferredValue, useMemo, useState, useEffect } from 'react'
import useWindow from './useWindow'

// min-width query
export default function useResponsiveValue(defaultValue, query) {
  const { width } = useWindow()
  const _width = useDeferredValue(width)
  const [breakpoint, setBreakpoint] = useState(null)

  useEffect(() => {
    let breakpoint
    const breakpoints = Object.keys(query)
      .map(Number)
      .sort((a, b) => b - a) // desc

    for (const queryWidth of breakpoints) {
      if (!breakpoint && _width >= queryWidth) {
        breakpoint = queryWidth
        break
      }
    }
    setBreakpoint(breakpoint)
  }, [_width, query])

  return breakpoint ? query[breakpoint] : defaultValue
}
