import { NavLink } from "react-router-dom";

const Navegacion = () => {
  const f = ({ isActive }) => (isActive ? "flex bg-primary text-base-200 px-4 py-2" : "flex px-4 py-2");

  return (
    <nav className="flex justify-center items-center bg-primary-content text-sm">
      <ul className="flex">
        <li>
          <NavLink className={f} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={f} to="/evaluaciones/">
            Evaluaciones
          </NavLink>
        </li>
        <li>
          <NavLink className={f} to="/alumnos/">
            Alumnos
          </NavLink>
        </li>
        <li>
          <NavLink className={f} to="/calificaciones/">
            Calificaciones
          </NavLink>
        </li>
        <li>
          <NavLink className={f} to="/miscosas/">
            Mis Cosas
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navegacion;
