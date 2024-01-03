import { useState, useEffect, useContext } from "react"

import { StateContext } from "./StateContext.mjs"

const Header = () => {
  const { asignatura } = useContext(StateContext)
  const [nombre, setNombre] = useState(null)
  const [curso, setCurso] = useState(null)

  const setHeader = async () => {
    try {
      setNombre(await asignatura.nombre())
      setCurso(await asignatura.curso())
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    setHeader()
  }, [asignatura, setHeader])

  return (
    <header className="AppHeader flex justify-center items-center py-4">
      <h1 className="prose-xl text-base-content">
        Asignatura Lite: {nombre}-<em>{curso}</em>
      </h1>
    </header>
  )
}

export default Header
