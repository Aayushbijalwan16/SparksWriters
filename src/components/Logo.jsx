import React from 'react'
import logo from "../img/logo.png"

function Logo({width = '15px'}) {
  return (
    <div><img src={logo} alt="SparksWriters"/></div>
  )
}

export default Logo