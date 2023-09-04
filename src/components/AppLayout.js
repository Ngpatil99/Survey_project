import React from 'react'
import HeaderFile from '../layout/HeaderFile'
import { Outlet } from 'react-router-dom'

function AppLayout() {
  return (
   <>
   <HeaderFile/>
   <Outlet/>
   </>
  )
}

export default AppLayout