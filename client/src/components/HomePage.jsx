import React from 'react'
import {NavLink} from "react-router-dom"

const HomePage = () => {
  return (
    <div>
        <h1>HomePage</h1>
        <NavLink to={"/login"}>Login</NavLink>
        <NavLink to={"/register"}>Register</NavLink>
    </div>
  )
}

export default HomePage