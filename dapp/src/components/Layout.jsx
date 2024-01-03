import { Outlet } from "react-router-dom"

import Header from "./Header"
import Navegacion from "./Navegacion"

function Layout() {
  return (
    <>
      <Header />
      <Navegacion />
      <div className="container mx-auto my-8">
        <Outlet />
      </div>
    </>
  )
}

export default Layout
