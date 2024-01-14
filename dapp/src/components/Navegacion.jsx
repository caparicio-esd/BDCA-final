import { NavLink } from "react-router-dom"
import { House, Book, Pencil, UserCircle, Gear } from "@phosphor-icons/react"

const Navegacion = () => {
  const f = ({ isActive }) => (isActive ? "flex bg-primary text-base-200 px-4 py-2" : "flex px-4 py-2")

  return (
    <nav className="flex justify-center items-center bg-primary-content text-sm">
      <ul className="flex">
        <li>
          <NavLink className={f} to="/">
            <div className="nav_link_content flex gap-2 items-center">
              <div className="nav_link_icon">
                <House size={16} weight="bold" />
              </div>
              <div className="nav_link_label">Home</div>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink className={f} to="/evaluaciones/">
            <div className="nav_link_content flex gap-2 items-center">
              <div className="nav_link_icon">
                <Book size={16} weight="bold" />
              </div>
              <div className="nav_link_label">Evaluaciones</div>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink className={f} to="/profesores/">
            <div className="nav_link_content flex gap-2 items-center">
              <div className="nav_link_icon">
                <UserCircle size={16} weight="bold" />
              </div>
              <div className="nav_link_label">Profesores</div>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink className={f} to="/alumnos/">
            <div className="nav_link_content flex gap-2 items-center">
              <div className="nav_link_icon">
                <UserCircle size={16} weight="bold" />
              </div>
              <div className="nav_link_label">Alumnos</div>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink className={f} to="/calificaciones/">
            <div className="nav_link_content flex gap-2 items-center">
              <div className="nav_link_icon">
                <Pencil size={16} weight="bold" />
              </div>
              <div className="nav_link_label">Calificaciones</div>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink className={f} to="/miscosas/">
            <div className="nav_link_content flex gap-2 items-center">
              <div className="nav_link_icon">
                <Gear size={16} weight="bold" />
              </div>
              <div className="nav_link_label">Mis cosas</div>
            </div>
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navegacion
