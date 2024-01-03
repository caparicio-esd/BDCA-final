import React, { useContext, useEffect, useState } from "react"
import { StateContext } from "../StateContext.mjs"
import clsx from "clsx"

const RoleFloatingHint = ({ floating = false }) => {
  const { asignatura } = useContext(StateContext)
  const [role, setRole] = useState("Not Recognized")
  const setRoleHint = async () => {
    try {
      const address = await ethereum.request({ method: "eth_requestAccounts" })
      setRole(await asignatura.getRoleByAddress(address[0]))
    } catch (e) {
      console.log(e)
    }
  }
  useEffect(() => {
    setRoleHint()
  }, [setRoleHint])

  const roleFloatingHingClsx = clsx({
    "top-6 right-4 fixed": floating
  }, "role_floating_hint")

  return (
    <div className={roleFloatingHingClsx}>
      <div className="role_floating_content text-sm badge badge-primary">{role}</div>
    </div>
  )
}

export default RoleFloatingHint
