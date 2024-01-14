import { Outlet } from "react-router-dom"

import Header from "./Header"
import Navegacion from "./Navegacion"
import RoleFloatingHint from "./roles/RoleFloatingHint"

function Layout() {
  return (
    <>
      <Header />
      <Navegacion />
      <div className="container mx-auto my-8 p-4">
        <Outlet />
      </div>
      <RoleFloatingHint floating={true} />
    </>
  )
}

export default Layout
