import { Plus } from "@phosphor-icons/react/dist/ssr"
import React from "react"

const CalificacionesModal = ({ calificaciones, modalCalificacionesRef, calificacionesAddres }) => {
  return (
    <div>
      <dialog id="my_modal_4" className="modal" ref={modalCalificacionesRef}>
        <div className="modal-box">
          {/* close x floating button */}
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>

          {/* form header */}
          <h3 className="font-bold text-lg border-b-2 mb-4 py-2 flex items-center gap-2">
            <span>
              <Plus size={16} weight="bold" />
            </span>
            <span className="break-all">Calificaciones de <br />{calificacionesAddres}</span>
          </h3>

          {/* table */}
          <table className="table table-zebra">
            <tr>
              <th>Evaluación</th>
              <th>Tipo</th>
              <th>Nota</th>
            </tr>
            <tbody>
              {calificaciones.map((c, i) => (
                <tr key={i}>
                  <td>
                    E<sub>{i}</sub>
                  </td>
                  <td>{c[0] / 100}</td>
                  <td>{c[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  )
}

export default CalificacionesModal
