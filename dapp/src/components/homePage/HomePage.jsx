import { useCallback, useContext, useEffect, useState } from "react"
import { StateContext } from "../StateContext.mjs"
import { SetCoordinator } from "./SetCoordinator"
import { ClosedCaptioning, House, XCircle } from "@phosphor-icons/react"

const HomePage = () => {
  const { asignatura, useForceReload, useRole, useAccounts } = useContext(StateContext)
  const [isAsignaturaOpen, setAsignaturaOpened] = useState(false)
  const { role } = useRole(asignatura)
  const { currentAccount, coordinator, owner } = useAccounts()
  useForceReload()

  const fetchOpenOrCloseAsignatura = useCallback(async () => {
    const asignaturaCerrada = await asignatura.cerrada()
    setAsignaturaOpened(!asignaturaCerrada)
  }, [asignatura])

  const closeAsignatura = async (ev) => {
    console.log(ev)
    try {
      await asignatura.cerrar({
        from: currentAccount
      })
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    // fetchOwner()
    fetchOpenOrCloseAsignatura()
  }, [fetchOpenOrCloseAsignatura])

  return (
    <>
      {/* title */}
      <h1 className="font-bold text-lg border-b-2 my-4 py-2 flex items-center gap-2">
        <span>
          <House size={16} weight="bold" />
        </span>
        <span>Página Home de la Asignatura Lite</span>
      </h1>

      {/* owner */}
      <div className="owner_object p-4 bg-slate-100 mb-2">
        <p>
          El owner es <span className="font-bold">{owner}</span>
        </p>
      </div>

      {/* coordinator */}
      <div className="owner_object p-4 bg-slate-100 mb-2">
        <p>
          El coordinador es <span className="font-bold">{coordinator}</span>
        </p>
      </div>

      {/* asignatura cerrada hint */}
      <div className="home_open_asignatura mb-2">
        {isAsignaturaOpen ? (
          <div className="bg-blue-100 flex items-center gap-4 p-4">
            <p>La asignatura está abierta</p>
            {role == "Coordinator" && (
              <button className="btn btn-primary" onClick={closeAsignatura}>
                <XCircle size={24} />
                Cerrar asignatura
              </button>
            )}
          </div>
        ) : (
          <div className="bg-red-100 p-4">
            <p>La asignatura está cerrada</p>
          </div>
        )}
      </div>

      {/* cambiar coordinador form */}
      {role == "Owner" ? <SetCoordinator /> : null}
    </>
  )
}

export default HomePage
