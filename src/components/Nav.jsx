import React from 'react'
import "./nav.scss"
import DateTime from './components/DateTime'
const Nav = () => {
  return (
    <nav>
      <div className="left">
        <div className="icon-name">
          <img src="./icons/apple.svg" alt="" />
        </div>
        <div className="nav-item">
          <p>Vivek Channe</p>
        </div>
        <div className="nav-item">
          <p>File</p>
        </div>
        <div className="nav-item">
          <p>Window</p>
        </div>
        <div className="nav-item">
          <p>Terminal</p>
        </div>
      </div>
      <div className="right">
        <img src="./icons/wifi.svg" alt="" />
        <div className="nav-item">
          <DateTime />
        </div>
      </div>

    </nav>
  )
}

export default Nav
