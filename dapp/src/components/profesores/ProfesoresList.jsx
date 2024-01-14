import React, { useCallback, useContext, useEffect, useMemo, useState } from "react"
import { StateContext } from "../StateContext.mjs"

const ProfesoresList = () => {
  const { useAccounts, useForceReload, asignatura, useRole } = useContext(StateContext)
  const { profes } = useAccounts()
  const { forceReload } = useForceReload()
  const [profesData, setProfesData] = useState([])
  const { role } = useRole(asignatura)

  useEffect(() => {
    const fetchData = async () => {
      const data = await Promise.all(
        profes.map(async (profeAddress) => {
          const profeName = await asignatura.datosProfesor(profeAddress)
          return {
            name: profeName,
            address: profeAddress,
          }
        }),
      )
      setProfesData(data)
    }

    fetchData()
  }, [profes, asignatura, forceReload])

  return (
    <>
      <table className="table table-zebra">
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Address</th>
            {role == "Owner" && <th>Actions</th>}
          </tr>
        </thead>
        <tbody>
          {profesData.map((profe, i) => (
            <tr key={profe.address}>
              <td className="font-bold">
                P<sub>{i + 1}</sub>
              </td>
              <td>{profe.name}</td>
              <td>{profe.address}</td>
              {role == "Owner" && <td>Actions</td>}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default ProfesoresList
