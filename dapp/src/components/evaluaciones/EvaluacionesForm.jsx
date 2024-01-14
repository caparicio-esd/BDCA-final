import { Plus, X } from "@phosphor-icons/react"
import React, { useContext } from "react"
import { StateContext } from "../StateContext.mjs"

const EvaluacionesForm = () => {
  const { asignatura, useAccounts } = useContext(StateContext)
  const { currentAccount } = useAccounts()

  const processForm = async (ev) => {
    ev.preventDefault()
    const name = ev.target.elements.form_new_eval_name.value
    const fecha = new Date(ev.target.elements.form_new_eval_date.value).getTime()
    const porcentaje = +ev.target.elements.form_new_eval_percent.value
    const notaMin = +ev.target.elements.form_new_eval_min_note.value

    try {
      await asignatura.creaEvaluacion(name, fecha, porcentaje, notaMin, {
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
      <div className="add_asignatura_button mt-8 flex justify-end">
        <button
          className="btn btn-primary flex items-center gap-2"
          onClick={() => document.getElementById("my_modal_2").showModal()}
        >
          <span>Añadir evaluación</span>
          <span>
            <Plus size={16} />
          </span>
        </button>
      </div>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <h3 className="font-bold text-lg border-b-2 mb-4 py-2 flex items-center gap-2">
            <span>
              <Plus size={16} weight="bold" />
            </span>
            <span>Añadir nueva evaluación</span>
          </h3>
          <form className="flex flex-col gap-3" onSubmit={processForm}>
            <div className="form_control flex flex-col gap-1">
              <label htmlFor="form_new_eval_name" className="text-sm font-bold text-gray-600">
                Nombre de la evaluación
              </label>
              <input
                type="text"
                name="form_new_eval_name"
                id="form_new_eval_name"
                className="input input-bordered"
                placeholder="Pon un nombre"
              />
            </div>
            <div className="form_control flex flex-col gap-1">
              <label htmlFor="form_new_eval_date" className="text-sm font-bold text-gray-600">
                Fecha de entrega
              </label>
              <input
                type="datetime-local"
                name="form_new_eval_date"
                id="form_new_eval_date"
                className="input input-bordered"
                placeholder="Elige una fecha"
              />
            </div>
            <div className="form_control flex flex-col gap-1">
              <label htmlFor="form_new_eval_percent" className="text-sm font-bold text-gray-600">
                Porcentaje
              </label>
              <input
                type="number"
                min={0}
                max={100}
                step={10}
                name="form_new_eval_percent"
                id="form_new_eval_percent"
                className="input input-bordered"
                placeholder="Añade un porcentaje"
              />
            </div>
            <div className="form_control flex flex-col gap-1">
              <label htmlFor="form_new_eval_min_note" className="text-sm font-bold text-gray-600">
                Nota mínima
              </label>
              <input
                type="number"
                min={0}
                max={100}
                step={10}
                name="form_new_eval_min_note"
                id="form_new_eval_min_note"
                className="input input-bordered"
                placeholder="Pon una nota mínima de 0 a 100"
              />
            </div>
            <div className="form_control flex justify-end gap-2">
              <button className="btn btn-primary" type="submit">
                <span>
                  <Plus />
                </span>
                <span>Envía</span>
              </button>
              <button className="btn btn-gray btn-outline" type="reset">
                <span>
                  <X />
                </span>
                <span>Reset</span>
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

export default EvaluacionesForm
