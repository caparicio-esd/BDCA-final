import { Plus, X } from "@phosphor-icons/react"
import React, { useContext } from "react"
import { StateContext } from "../StateContext.mjs"

const CalificacionesForm = ({ modalRef, getModalData, setSelectedCalificationType }) => {
  const { asignatura, useAccounts } = useContext(StateContext)
  const { currentAccount } = useAccounts()

  const processForm = async (ev) => {
    ev.preventDefault()
    const el = ev.target.elements
    const addr = el.form_calificacion_address.value
    const evalu = +el.form_calificacion_index.value.replace("E", "")
    const calType = +el.form_calificacion_type.value
    const catNote = +el.form_calificacion_note.value

    try {
      await asignatura.califica(addr, evalu, calType, catNote, {
        from: currentAccount,
      })
    } catch (e) {
      console.log(e)
    } finally {
      ev.target.reset()
      document.getElementById("my_modal_2").close()
    }
  }
  return (
    <>
      <dialog id="my_modal_2" className="modal" ref={modalRef}>
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
            <span>Calificar</span>
          </h3>

          {/* form */}
          <form className="flex flex-col gap-3" onSubmit={processForm}>
            <div className="form_control flex flex-col gap-1">
              <label htmlFor="form_calificacion_name" className="text-sm font-bold text-gray-600">
                Dirección del alumno:
              </label>
              <input
                type="text"
                name="form_calificacion_address"
                id="form_calificacion_address"
                className="input input-bordered"
                placeholder="Dirección de alumno"
                value={getModalData().selectedStudentAddress}
                readOnly
              />
            </div>
            <div className="form_control flex flex-col gap-1">
              <label htmlFor="form_calificacion_date" className="text-sm font-bold text-gray-600">
                Índice de la evaluación
              </label>
              <input
                type="text"
                name="form_calificacion_index"
                id="form_calificacion_index"
                className="input input-bordered"
                placeholder="Índice de evaluación"
                value={`E${getModalData().selectedCalificationIndex}`}
                readOnly
              />
            </div>
            <div className="form_control flex flex-col gap-1">
              <label htmlFor="form_calificacion_percent" className="text-sm font-bold text-gray-600">
                Tipo: (0=Pendiente 1=N.P. 2=Normal)
              </label>
              <select
                name="form_calificacion_type"
                id="form_calificacion_type"
                className="select select-bordered"
                value={getModalData().selectedCalificationType?.toString().replace("undefined", "")}
                onChange={(ev) => setSelectedCalificationType(ev.target.value)}
              >
                <option value="0">0 = Pendiente</option>
                <option value="1">1 = NP</option>
                <option value="2">2 = Normal</option>
              </select>
            </div>
            <div className="form_control flex flex-col gap-1">
              <label htmlFor="form_calificacion_min_note" className="text-sm font-bold text-gray-600">
                Nota (x100)
              </label>
              <input
                type="text"
                name="form_calificacion_note"
                id="form_calificacion_note"
                className="input input-bordered"
                placeholder="Pon una nota de 0 a 1000"
                defaultValue={getModalData().selectedCalificationNote}
              />
            </div>
            <div className="form_control flex justify-end gap-2">
              <button className="btn btn-primary" type="submit">
                <span>
                  <Plus />
                </span>
                <span>Califica</span>
              </button>
            </div>
          </form>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  )
}

export default CalificacionesForm
