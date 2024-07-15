import React from 'react'
import { Outlet } from 'react-router-dom'

function Main() {
  return (
    <div>
      <nav>Navbar</nav>
      <Outlet/>
      <footer>Footer</footer>
    </div>
  )
}

export default Main
