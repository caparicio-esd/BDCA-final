import { Pencil } from "@phosphor-icons/react"
import CalificacionesTotal from "./CalificacionesTotal/index.jsx"
import CalificacionesForm from "./CalificacionesForm.jsx"
import { useEffect, useRef, useState } from "react"

const CalificacionesPage = () => {
  const modalRef = useRef(null)
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

  return (
    <section className="AppCalificaciones">
      {/* title */}
      <h1 className="font-bold text-lg border-b-2 my-4 py-2 flex items-center gap-2">
        <span>
          <Pencil size={16} weight="bold" />
        </span>
        <span>Calificaciones</span>
      </h1>

      <CalificacionesTotal openModalToCalificar={openModalToCalificar} />

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
