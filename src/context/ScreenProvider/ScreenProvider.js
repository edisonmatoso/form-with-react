import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import ScreenContext from './ScreenContext'

const ScreenProvider = ({ children }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1280)

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <ScreenContext.Provider value={{ isMobile }}>
      {children}
    </ScreenContext.Provider>
  )
}

ScreenProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export default ScreenProvider
