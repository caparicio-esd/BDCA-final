import { UserCircle } from "@phosphor-icons/react"
import AlumnosList from "./AlumnosList/index.jsx"
import { useContext } from "react"
import { StateContext } from "../StateContext.mjs"
import AlumnoAutomatriculaForm from "./AlumnoAutomatriculaForm.jsx"

const AlumnosPage = () => {
  const { useRole, asignatura } = useContext(StateContext)
  const { role } = useRole(asignatura)
  const canAlumnosListBeenSeen = role == "Owner" || role == "Coordinator" || role == "Professor"

  return (
    <section className="AppAlumnos">
      {/* title */}
      <h1 className="font-bold text-lg border-b-2 my-4 py-2 flex items-center gap-2">
        <span>
          <UserCircle size={16} weight="bold" />
        </span>
        <span>Alumnos</span>
      </h1>

      {canAlumnosListBeenSeen && <AlumnosList />}
      {role == "Not Recognized" && <AlumnoAutomatriculaForm isAutomatricula={true} />}
      {role == "Owner" && <AlumnoAutomatriculaForm isAutomatricula={false} />}
    </section>
  )
}

export default AlumnosPage
