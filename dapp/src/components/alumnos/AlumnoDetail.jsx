import { useState, useEffect, useContext } from "react"
import { useParams, Link } from "react-router-dom"

import { StateContext } from "../StateContext.mjs"
import { UserCircle } from "@phosphor-icons/react"
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr"

const AlumnoDetail = () => {
  const { asignatura } = useContext(StateContext)

  let { addr } = useParams()

  const [alumnoDatos, setAlumnoDatos] = useState(null)

  useEffect(() => {
    ;(async () => {
      try {
        console.log("Obtener los datos del alumno.")
        const datos = await asignatura.datosAlumno(addr)
        setAlumnoDatos(datos)
      } catch (e) {
        console.log(e)
      }
    })()
  }, []) // [] -> Sin dependencias. Solo se llama a useEffect una vez.

  return (
    <>
      <button className="btn btn-primary btn-sm">
        <span>
          <ArrowLeft size={16} />
        </span>
        <span>
          <Link to="/alumnos">Volver</Link>
        </span>
      </button>

      <header className="AppAlumno">
        {/* title */}
        <h1 className="font-bold text-lg border-b-2 my-4 py-2 flex items-center gap-2">
          <span>
            <UserCircle size={16} weight="bold" />
          </span>
          <span>Alumno info</span>
        </h1>
      </header>
      <ul>
        <li className="p-4 bg-slate-100 mb-2">
          <b>Nombre:</b> {alumnoDatos?.nombre ?? "Desconocido"}
        </li>
        <li className="p-4 bg-slate-100 mb-2">
          <b>Email:</b> {alumnoDatos?.email ?? "Desconocido"}
        </li>
        <li className="p-4 bg-slate-100 mb-2">
          <b>Address:</b> {addr}
        </li>
      </ul>
    </>
  )

  /*
    let {addr} = useParams();

    const datos = useCacheCall("Asignatura", "datosAlumno", addr);

    return <>
        <header className="AppAlumno">
            <h2>Alumno Info</h2>
        </header>
        <ul>
            <li><b>Nombre:</b> {datos?.nombre ?? "Desconocido"}</li>
            <li><b>Email:</b> {datos?.email ?? "Desconocido"}</li>
            <li><b>Address:</b> {addr}</li>
        </ul>
        <Link to="/alumnos">Volver</Link>
    </>

     */
}

export default AlumnoDetail
