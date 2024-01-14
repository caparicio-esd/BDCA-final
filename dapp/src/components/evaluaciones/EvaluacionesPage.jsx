import { useContext } from "react"
import EvaluacionesForm from "./EvaluacionesForm.jsx"
import EvaluacionesList from "./EvaluacionesList/index.jsx"
import { Book } from "@phosphor-icons/react"
import { StateContext } from "../StateContext.mjs"

const EvaluacionesPage = () => {
  const { useRole, asignatura } = useContext(StateContext)
  const { role } = useRole(asignatura)

  return (
    <section className="AppEvaluaciones">
      {/* title */}
      <h1 className="font-bold text-lg border-b-2 my-4 py-2 flex items-center gap-2">
        <span>
          <Book size={16} weight="bold" />
        </span>
        <span>Evaluaciones</span>
      </h1>

      {/* evaluaciones lists */}
      <EvaluacionesList />

      {/* evaluaciones add new form */}
      {role == "Coordinator" && <EvaluacionesForm />}
    </section>
  )
}

export default EvaluacionesPage
