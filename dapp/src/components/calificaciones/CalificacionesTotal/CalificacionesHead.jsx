import { useState, useEffect, useContext } from "react"
import {FrameCorners} from "@phosphor-icons/react"
import { StateContext } from "../../StateContext.mjs"

const CalificacionesHead = () => {
  const { asignatura } = useContext(StateContext)

  const [evaluacionesLength, setEvaluacionesLength] = useState(0)

  useEffect(() => {
    // Obtener el numero de evaluaciones:
    ;(async () => {
      try {
        const ne = await asignatura.evaluacionesLength()
        setEvaluacionesLength(ne.toNumber())
      } catch (e) {
        console.log(e)
      }
    })()
  }, []) // [] -> Sin dependencias. Solo se llama a useEffect una vez.

  let thead = []
  thead.push(<th key={"chae"}>A-E</th>)
  thead.push(<th key={"actions"}>Actions</th>)
  thead.push(<th key={"chn"}>Nombre</th>)

  for (let i = 0; i < evaluacionesLength; i++) {
    thead.push(
      <th key={"chev-" + i}>
        <div className="th_content flex items-baseline gap-2">
          <span>
            E<sub>{i}</sub>
          </span>
          <button className="btn btn-primary btn-xs">
            <span>Resumen E<sub>{i}</sub></span>
            <span><FrameCorners /></span>
          </button>
        </div>
      </th>,
    )
  }

  return (
    <thead>
      <tr>{thead}</tr>
    </thead>
  )
}

export default CalificacionesHead
