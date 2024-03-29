/* eslint-disable react/prop-types */
import { useState, useEffect, useContext } from "react"

import { StateContext } from "../../StateContext.mjs"
import { FrameCorners, Pencil } from "@phosphor-icons/react"

const CalificacionRow = ({ alumnoIndex, openModalToCalificar, getCalificationsAndShowInModal }) => {
  const { asignatura, useForceReload, useRole } = useContext(StateContext)
  const { forceReload } = useForceReload()
  const { role } = useRole(asignatura)
  const [alumnoName, setAlumnoName] = useState(null)
  const [notas, setNotas] = useState([])
  const [addr, setAddr] = useState("")

  useEffect(() => {
    ;(async () => {
      try {
        // Obtener la direccion del alumno:
        const addr_ = await asignatura.matriculas(alumnoIndex)
        setAddr(addr_)

        // Obtener el nombre del alumno:
        const alumnoName = (await asignatura.datosAlumno(addr_))?.nombre
        setAlumnoName(alumnoName)

        // Obtener el numero de evaluaciones:
        const ne = await asignatura.evaluacionesLength()

        let notas = []
        for (let ei = 0; ei < ne; ei++) {
          const nota = await asignatura.calificaciones(addr_, ei)
          notas.push(
            <td key={"p2-" + alumnoIndex + "-" + ei}>
              <div className="notas_content flex gap-2">
                {role == "Professor" && (
                  <button
                    className="btn btn-ghost btn-circle btn-xs"
                    onClick={() => openModalToCalificar(addr_, nota, ei)}
                  >
                    <Pencil />
                  </button>
                )}

                <span>
                  {nota?.tipo.toString() === "0" ? "-" : ""}
                  {nota?.tipo.toString() === "1" ? "N.P." : ""}
                  {nota?.tipo.toString() === "2" ? (nota?.calificacion / 100).toFixed(2) : ""}
                </span>
              </div>
            </td>,
          )
        }
        setNotas(notas)
      } catch (e) {
        console.log(e)
      }
    })()
  }, [alumnoIndex, asignatura, forceReload, role]) // Si cambia el valor de forceReload, se vuelven a obtener los datos a pintar.

  return (
    <tr key={"d" + alumnoIndex}>
      <th>
        A<sub>{alumnoIndex}</sub>
      </th>
      {(role == "Professor" || role == "Coordinator" || role == "Owner") && (
        <td>
          <button className="btn btn-primary btn-xs" onClick={() => getCalificationsAndShowInModal(addr)}>
            <span>
              Resumen A<sub>{alumnoIndex}</sub>
            </span>
            <span>
              <FrameCorners />
            </span>
          </button>
        </td>
      )}
      <td>{alumnoName}</td>
      {notas}
    </tr>
  )
}

export default CalificacionRow
