import React, { useContext, useEffect, useState } from "react"
import { StateContext } from "../StateContext.mjs"
import clsx from "clsx"

const RoleFloatingHint = ({ floating = false }) => {
  const { asignatura, useRole } = useContext(StateContext)
  const { role } = useRole(asignatura)

  const roleFloatingHingClsx = clsx(
    {
      "top-6 right-4 fixed": floating,
    },
    "role_floating_hint",
  )

  return (
    <div className={roleFloatingHingClsx}>
      <div className="role_floating_content text-sm badge badge-primary">{role}</div>
    </div>
  )
}

export default RoleFloatingHint
