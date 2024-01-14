import MiCuenta from "./MiCuenta.jsx"
import MisDatos from "./MisDatos.jsx"
import MisNotas from "./MisNotas.jsx"
import SoyAlumno from "../roles/SoyAlumno"
import RoleFloatingHint from "../roles/RoleFloatingHint.jsx"
import { Gear } from "@phosphor-icons/react"

const MisCosasPage = () => {
  return (
    <section className="AppMisCosas">
      {/* title */}
      <h1 className="font-bold text-lg border-b-2 my-4 py-2 flex items-center gap-2">
        <span>
          <Gear size={16} weight="bold" />
        </span>
        <span>Mis cosas</span>
        <RoleFloatingHint floating={false} />
      </h1>

      <div className="grid grid-cols-3 gap-4">
        <div>
          <MiCuenta />
        </div>
        <SoyAlumno>
          <MisDatos />
        </SoyAlumno>
        <SoyAlumno>
          <MisNotas />
        </SoyAlumno>
      </div>
    </section>
  )
}

export default MisCosasPage
