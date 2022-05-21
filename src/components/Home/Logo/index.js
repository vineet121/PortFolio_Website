import { useEffect, useRef } from 'react'

import './index.scss'

const Logo = () => {
  const bgRef = useRef()

  useEffect(() => {

  }, [])

  return (
    <div className="logo-container" ref={bgRef}>


      <g
        className="svg-container"
        transform="translate(0 457) scale(1 -1)"
        fill="All"
      >
        {/* <img
          className="person-logo"
          ref={solidLogoRef}
          src={PersonalPhoto}
          alt="JavaScript,  Developer"
        /> */}

      </g>

    </div >
  )
}

export default Logo
