import { useState, useEffect, useContext } from "react"

import { StateContext } from "../../StateContext.mjs"
import { Pencil, X } from "@phosphor-icons/react"

const EvaluacionRow = ({ evaluacionIndex }) => {
  const { asignatura, useRole, useForceReload } = useContext(StateContext)
  const { role } = useRole(asignatura)
  const [evaluacion, setEvaluacion] = useState(null)
  const { forceReload } = useForceReload()

  useEffect(() => {
    console.log("Obtener la evaluacion del indice indicado.")
    ;(async () => {
      try {
        const ev = await asignatura.evaluaciones(evaluacionIndex)
        setEvaluacion(ev)
      } catch (e) {
        console.log(e)
      }
    })()
  }, [forceReload]) // [] -> Sin dependencias. Solo se llama a useEffect una vez.

  return (
    <tr key={"EVA-" + evaluacionIndex}>
      <th>
        E<sub>{evaluacionIndex}</sub>
      </th>
      <td>{evaluacion?.nombre}</td>
      <td>{evaluacion?.fecha ? new Date(+evaluacion.fecha).toLocaleString() : ""}</td>
      <td>{evaluacion?.porcentaje.toString()}</td>
      {role == "Coordinator" && (
        <td>
          <div className="actions flex gap-2">
            <span className="action">
              <button className="btn btn-circle btn-error btn-xs">
                <X color="white" />
              </button>
            </span>
            <span className="action">
              <button className="btn btn-circle btn-warning btn-xs">
                <Pencil />
              </button>
            </span>
          </div>
        </td>
      )}
    </tr>
  )
}

export default EvaluacionRow
