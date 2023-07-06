import { useEffect, useState } from 'react'

const useWindowDimensions = () => {
  const getWindowDimensions = () => {
    return {
      width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
      height:
        window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
    }
  }
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions())
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const isMobileVersion = () => {
      const width =
        window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
      return width <= 768
    }

    setIsMobile(isMobileVersion())
  }, [windowDimensions])

  useEffect(() => {
    const handleResize = () => setWindowDimensions(getWindowDimensions())

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return {
    ...windowDimensions,
    isMobile,
  }
}

export default useWindowDimensions
