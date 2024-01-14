import { useContext } from "react"
import { StateContext } from "../../StateContext.mjs"

const EvaluacionesHead = () => {
  const { asignatura, useRole } = useContext(StateContext)
  const { role } = useRole(asignatura)

  return (
    <thead>
      <tr>
        <th>#</th>
        <th>Nombre</th>
        <th>Fecha</th>
        <th>%</th>

        {role == "Coordinator" && <th>Actions</th>}
      </tr>
    </thead>
  )
}

export default EvaluacionesHead
