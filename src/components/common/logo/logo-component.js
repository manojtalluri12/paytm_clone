import React from 'react' 
const  LogoComponet = ({src}) => {
  return (
    <div className="logo">
        <a href="#">
          <img src={src} alt="logo" />
        </a>
      </div>
  )
}

export default  LogoComponet