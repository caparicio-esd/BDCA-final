import EvaluacionesHead from "./EvaluacionesHead.jsx"
import EvaluacionesBody from "./EvaluacionesBody.jsx"

const EvaluacionesList = () => (
  <section className="AppEvaluaciones">
    <table className="table table-zebra">
      <EvaluacionesHead />
      <EvaluacionesBody />
    </table>
  </section>
)

export default EvaluacionesList
