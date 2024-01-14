import AlumnosHead from "./AlumnosHead.jsx";
import AlumnosBody from "./AlumnosBody.jsx";

const AlumnosList = () => (
  <section className="AppAlumnos">
    <table className="table table-zebra">
      <AlumnosHead />
      <AlumnosBody />
    </table>
  </section>
);

export default AlumnosList;
