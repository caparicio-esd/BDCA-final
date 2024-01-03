import CalificacionesHead from "./CalificacionesHead.jsx";
import CalificacionesBody from "./CalificacionesBody.jsx";

const CalificacionesPage = () => {
  return (
    <section className="AppCalificaciones">
      <h3>Todas las Calificaciones</h3>
      <table className="table table-zebra">
        <CalificacionesHead />
        <CalificacionesBody />
      </table>
    </section>
  );
};

export default CalificacionesPage;
