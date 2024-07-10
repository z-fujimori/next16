import React from 'react'

const Header = () => {
  return (
    <div className="h-screen w-full">
        <video 
            src="/video/video.mp4" 
            loop autoPlay muted playsInline 
            className="fixed w-[1800px] top-[-50px] z-[-10]"
        ></video>
    </div>
  )
}

export default Header