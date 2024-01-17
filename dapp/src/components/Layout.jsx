import { Outlet } from "react-router-dom"

import Header from "./Header"
import Navegacion from "./Navegacion"
import RoleFloatingHint from "./roles/RoleFloatingHint"
import Footer from "./Footer"

function Layout() {
  return (
    <>
      <Header />
      <Navegacion />
      <div className="container mx-auto my-8 p-4 min-h-[calc(100vh-260px)]">
        <Outlet />
      </div>
      <RoleFloatingHint floating={true} />
      <Footer />

    </>
  )
}

export default Layout
