import CalificacionesHead from "./CalificacionesHead.jsx"
import CalificacionesBody from "./CalificacionesBody.jsx"

const CalificacionesPage = ({ openModalToCalificar, getCalificationsAndShowInModal }) => {
  return (
    <section className="AppCalificaciones">
      <table className="table table-zebra">
        <CalificacionesHead />
        <CalificacionesBody
          openModalToCalificar={openModalToCalificar}
          getCalificationsAndShowInModal={getCalificationsAndShowInModal}
        />
      </table>
    </section>
  )
}

export default CalificacionesPage
