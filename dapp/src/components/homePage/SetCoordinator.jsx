import { useContext, useRef, useState } from "react"
import { StateContext } from "../StateContext.mjs"

export const SetCoordinator = () => {
  const [coordinador, setCoordinador] = useState("")
  const { asignatura, useAccounts } = useContext(StateContext)
  const { allAccounts, currentAccount } = useAccounts()

  const submitHandler = async (ev) => {
    ev.preventDefault()
    try {
      await asignatura.setCoordinador(coordinador, {
        from: currentAccount,
      })
    } finally {
      ev.target.reset()
    }
  }

  return (
    <div>
      <form onSubmit={submitHandler} className="bg-gray-100 p-4">
        <h2 className="font-bold mb-4">Cambiar coordinador!</h2>
        <div className="form_control flex items-center gap-4">
          <select className="select select-bordered w-full max-w-xs" onChange={(ev) => setCoordinador(ev.target.value)}>
            {allAccounts.map((account) => (
              <option key={account} value={account}>
                {account}
              </option>
            ))}
          </select>
          <button className="btn btn-primary">Cambiar</button>
        </div>
      </form>
    </div>
  )
}
