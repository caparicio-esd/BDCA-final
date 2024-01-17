import CalificacionesHead from "./CalificacionesHead.jsx"
import CalificacionesBody from "./CalificacionesBody.jsx"

const CalificacionesPage = ({
  openModalToCalificar
}) => {
  return (
    <section className="AppCalificaciones">
      <table className="table table-zebra">
        <CalificacionesHead />
        <CalificacionesBody
          openModalToCalificar={openModalToCalificar}
        />
      </table>
    </section>
  )
}

export default CalificacionesPage
