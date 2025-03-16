import React from 'react'
import FooterSection from '../components/Footer.jsx'
import NavbarSection from '../components/Navbar.jsx'
import {Outlet} from 'react-router-dom'

const MainLayout = () => {
  return (
    <>
        <NavbarSection/>
        <Outlet/>
        <FooterSection/>
    </>


  )
}

export default MainLayout