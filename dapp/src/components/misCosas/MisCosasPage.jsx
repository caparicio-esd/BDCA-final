import MiCuenta from "./MiCuenta.jsx"
import MisDatos from "./MisDatos.jsx"
import MisNotas from "./MisNotas.jsx"
import SoyAlumno from "../roles/SoyAlumno"
import RoleFloatingHint from "../roles/RoleFloatingHint.jsx"

const MisCosasPage = () => {
  return (
    <section className="AppMisCosas">
      <h2>Mis Cosas</h2>
      <RoleFloatingHint floating={false} />

      <MiCuenta />

      <SoyAlumno>
        <MisDatos />
        <MisNotas />
      </SoyAlumno>
    </section>
  )
}

export default MisCosasPage
