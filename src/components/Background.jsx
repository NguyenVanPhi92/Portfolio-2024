import { useCallback, useContext, useEffect, useMemo } from 'react'
import Particles from 'react-particles'
import { loadSlim } from 'tsparticles-slim'
import { MyContext } from '../contexts/app.context'

export default function Background({ children }) {
  const { darkMode: theme } = useContext(MyContext)
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine)
  }, [])
  const options = useMemo(() => {
    return {
      background: { color: { value: `${theme === 'dark' ? '#0B001C' : '#ffffff'}` } },
      fpsLimit: 120,
      particles: {
        color: { value: `${theme === 'dark' ? '#ffffff' : '#15916f'}` },
        links: {
          enable: true,
          distance: 150,
          color: `${theme === 'dark' ? '#ffffff' : '#404040'}`,
          opacity: 0.5,
          width: 1
        },
        move: { enable: true, speed: 1, outModes: { default: 'bounce' } },
        number: { value: 80, density: { enable: true, area: 800 } },
        opacity: { value: 0.5 },
        size: { value: { min: 1, max: 5 } }
      }
    }
  }, [theme])

  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
      <Particles
        init={particlesInit}
        options={options}
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}
      />
      {/* Nội dung khác */}
      <div style={{ position: 'relative', zIndex: 1 }}>{children}</div>
    </div>
  )
}
