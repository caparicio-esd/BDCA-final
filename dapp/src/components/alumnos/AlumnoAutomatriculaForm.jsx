import React, { useContext, useEffect, useState } from "react"
import { StateContext } from "../StateContext.mjs"
import { Plus, Warning, X } from "@phosphor-icons/react"
import { isValidAddress } from "../../utils.mjs"

const AlumnoAutomatriculaForm = (props) => {
  const { asignatura, useAccounts } = useContext(StateContext)
  const { currentAccount } = useAccounts()
  const [validationError, setValidationError] = useState("")
  const [changingCurrentAccount, setChangingCurrentAccount] = useState(currentAccount)

  useEffect(() => {
    setChangingCurrentAccount(currentAccount)
  }, [currentAccount, setChangingCurrentAccount])

  const processForm = async (ev) => {
    ev.preventDefault()
    const name = ev.target.elements.form_new_auto_alumno_name.value
    const dni = ev.target.elements.form_new_auto_alumno_dni.value
    const email = ev.target.elements.form_new_auto_alumno_email.value
    const address = ev.target.elements.form_new_auto_alumno_address.value
    const isValid = isValidAddress(address)

    if (!isValid) {
      setValidationError("Address " + address + " inválido")
      ev.target.reset()
      document.getElementById("my_modal_3").close()
      return
    }

    try {
      if (props.isAutomatricula) {
        await asignatura.automatricula(name, dni, email, {
          from: address,
        })
      } else {
        await asignatura.matricular(address, name, dni, email, {
          from: currentAccount,
        })
      }
    } catch (e) {
      console.log(e)
    } finally {
      ev.target.reset()
      document.getElementById("my_modal_3").close()
    }
  }

  useEffect(() => {
    if (validationError == "") return
    const timeOut = setTimeout(() => {
      setValidationError("")
    }, 2000)
  }, [validationError, setValidationError])

  return (
    <>
      {validationError !== "" && (
        <div className="alert alert-warning fixed top-28 max-w-sm left-1/2 -translate-x-1/2 flex gap-2 shadow-sm">
          <span>
            <Warning />
          </span>
          <span className="text-xs flex-1">{validationError}</span>
        </div>
      )}
      <div className="add_asignatura_button mt-8 flex justify-end">
        <button
          className="btn btn-primary flex items-center gap-2"
          onClick={() => document.getElementById("my_modal_3").showModal()}
        >
          <span>Matrícula</span>
          <span>
            <Plus size={16} />
          </span>
        </button>
      </div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <h3 className="font-bold text-lg border-b-2 mb-4 py-2 flex items-center gap-2">
            <span>
              <Plus size={16} weight="bold" />
            </span>
            {props.isAutomatricula && <span>AutoMatriculación</span>}
            {!props.isAutomatricula && <span>Matriculación</span>}
          </h3>
          <form className="flex flex-col gap-3" onSubmit={processForm}>
            <div className="form_control flex flex-col gap-1">
              <label htmlFor="form_new_auto_alumno_name" className="text-sm font-bold text-gray-600">
                Nombre de alumno
              </label>
              <input
                type="text"
                name="form_new_auto_alumno_name"
                id="form_new_auto_alumno_name"
                className="input input-bordered"
                placeholder="Pon un nombre"
              />
            </div>
            <div className="form_control flex flex-col gap-1">
              <label htmlFor="form_new_auto_alumno_dni" className="text-sm font-bold text-gray-600">
                DNI
              </label>
              <input
                type="text"
                name="form_new_auto_alumno_dni"
                id="form_new_auto_alumno_dni"
                className="input input-bordered"
                placeholder="Pon un DNI"
              />
            </div>
            <div className="form_control flex flex-col gap-1">
              <label htmlFor="form_new_auto_alumno_email" className="text-sm font-bold text-gray-600">
                Email
              </label>
              <input
                type="text"
                name="form_new_auto_alumno_email"
                id="form_new_auto_alumno_email"
                className="input input-bordered"
                placeholder="Pon un email"
              />
            </div>

            {/* form address input si es automatricula a */}
            {props.isAutomatricula && (
              <div className="form_control flex flex-col gap-1">
                <label htmlFor="form_new_auto_alumno_address" className="text-sm font-bold text-gray-600">
                  Tu address
                </label>
                <p className="py-2 text-sm italic text-gray-600">
                  Importante tener en cuenta que la dirección del nuevo profe, esté en la red Ganache desde el index 7
                </p>
                <input
                  type="text"
                  name="form_new_auto_alumno_address"
                  id="form_new_auto_alumno_address"
                  className="input input-bordered"
                  placeholder="Pon un Address valido"
                  value={changingCurrentAccount || "undefined"}
                  onChange={(ev) => setChangingCurrentAccount(ev.target.value)}
                />
              </div>
            )}


            {/* form address input si es automatricula a */}
            {!props.isAutomatricula && (
              <div className="form_control flex flex-col gap-1">
                <label htmlFor="form_new_auto_alumno_address" className="text-sm font-bold text-gray-600">
                  Address de alumno
                </label>
                <p className="py-2 text-sm italic text-gray-600">
                  Importante tener en cuenta que la dirección del nuevo profe, esté en la red Ganache desde el index 7
                </p>
                <input
                  type="text"
                  name="form_new_auto_alumno_address"
                  id="form_new_auto_alumno_address"
                  className="input input-bordered"
                  placeholder="Pon un Address valido"
                />
              </div>
            )}

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

export default AlumnoAutomatriculaForm
