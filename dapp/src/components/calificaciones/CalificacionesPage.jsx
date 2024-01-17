import { Pencil } from "@phosphor-icons/react"
import CalificacionesTotal from "./CalificacionesTotal/index.jsx"
import CalificacionesForm from "./CalificacionesForm.jsx"
import { useContext, useEffect, useRef, useState } from "react"
import { StateContext } from "../StateContext.mjs"
import CalificacionesModal from "./CalificacionesModal.jsx"

const CalificacionesPage = () => {
  const { asignatura } = useContext(StateContext)
  const [calificaciones, setCalificaciones] = useState([])
  const [calificacionesAddres, setCalificacionesAddress] = useState([])
  const modalRef = useRef(null)
  const modalCalificacionesRef = useRef(null)
  const [selectedStudentAddress, setSelectedStudentAddress] = useState(0)
  const [selectedCalificationIndex, setSelectedCalificationIndex] = useState(-1)
  const [selectedCalificationType, setSelectedCalificationType] = useState(-1)
  const [selectedCalificationNote, setSelectedCalificationNote] = useState(null)

  const openModalToCalificar = (address, nota, index) => {
    setSelectedStudentAddress(address)
    setSelectedCalificationIndex(index)
    setSelectedCalificationType(nota?.tipo.toNumber())
    setSelectedCalificationNote(nota?.calificacion.toNumber())
    modalRef.current.showModal()
  }
  const getModalData = () => ({
    selectedStudentAddress,
    selectedCalificationIndex,
    selectedCalificationType,
    selectedCalificationNote,
  })
  const resetModalData = () => {
    setSelectedStudentAddress(0)
    setSelectedCalificationIndex(-1)
    setSelectedCalificationIndex(-1)
    setSelectedCalificationNote(0)
  }
  const getCalificationsAndShowInModal = async (address) => {
    try {
      const evaluaciones = await asignatura.evaluacionesLength()
      const calificaciones__ = await Promise.all(
        Array.from(Array(evaluaciones.toNumber()).keys()).map(async (n) => {
          return await asignatura.calificaciones(address, n)
        }),
      )
      const calificaciones_ = calificaciones__.map((c) => [c.calificacion.toNumber(), c.tipo.toNumber()])
      setCalificaciones(calificaciones_)
      setCalificacionesAddress(address)
      modalCalificacionesRef.current.showModal()
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <section className="AppCalificaciones">
      {/* title */}
      <h1 className="font-bold text-lg border-b-2 my-4 py-2 flex items-center gap-2">
        <span>
          <Pencil size={16} weight="bold" />
        </span>
        <span>Calificaciones</span>
      </h1>

      <CalificacionesTotal
        openModalToCalificar={openModalToCalificar}
        getCalificationsAndShowInModal={getCalificationsAndShowInModal}
      />

      <CalificacionesModal
        calificaciones={calificaciones}
        modalCalificacionesRef={modalCalificacionesRef}
        calificacionesAddres={calificacionesAddres}
      />

      <CalificacionesForm
        modalRef={modalRef}
        getModalData={getModalData}
        openModalToCalificar={openModalToCalificar}
        resetModalData={resetModalData}
        setSelectedCalificationType={setSelectedCalificationType}
      />
    </section>
  )
}

export default CalificacionesPage
