import { useEffect, useRef } from 'react'
import LogoS from '../../../assets/images/logo-p.png'
import './index.scss'

const Logo = () => {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()

  useEffect(() => {


  }, [])

  return (
    <div className="logo-container" ref={bgRef}>
      <img
        className="solid-logo"
        ref={solidLogoRef}
        src={LogoS}
        alt="JavaScript,  Developer"
      />


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
        <svg
          width="55pt"
          height="89pt"
          version="1.0"
          viewBox="0 0 400 265"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            className="svg-container"
            transform="translate(0 457) scale(.1 -.1)"
            fill="none"
          >
            <path
              ref={outlineLogoRef}
              d="M561.92,68.19l-68.3,64.39l-147.34,599.2L412.49,806l-289.01-26.05l58.16-64.39L53.69,132.58L0,102.6L298.26,50
				l-44.74,62.43l31.91,482.21l73.67-457.14l-35.79-42.27L561.92,68.19z"
            />
          </g>
        </svg>

      </g>

    </div >
  )
}

export default Logo
