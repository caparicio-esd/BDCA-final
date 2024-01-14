import { UserCircle } from "@phosphor-icons/react"
import React, { useContext } from "react"
import ProfesoresList from "./ProfesoresList"
import ProfesoresForm from "./ProfesoresForm"
import { StateContext } from "../StateContext.mjs"

const ProfesoresPage = () => {
  const { useRole, asignatura } = useContext(StateContext)
  const { role } = useRole(asignatura)
  
  return (
    <>
      {/* title */}
      <h1 className="font-bold text-lg border-b-2 my-4 py-2 flex items-center gap-2">
        <span>
          <UserCircle size={16} weight="bold" />
        </span>
        <span>Profesores</span>
      </h1>

      {/* list */}
      <ProfesoresList />

      {/* form */}
      {role == "Owner" && <ProfesoresForm />}
    </>
  )
}

export default ProfesoresPage
