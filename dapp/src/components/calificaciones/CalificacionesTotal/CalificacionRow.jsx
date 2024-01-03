/* eslint-disable react/prop-types */
import { useState, useEffect, useContext } from "react";

import { StateContext } from "../../StateContext.mjs";

const CalificacionRow = ({ alumnoIndex }) => {
  const { asignatura, useForceReload } = useContext(StateContext);

  const [alumnoName, setAlumnoName] = useState(null);
  const [notas, setNotas] = useState([]);
  useForceReload();

  useEffect(() => {
    (async () => {
      try {
        // Obtener la direccion del alumno:
        const addr = await asignatura.matriculas(alumnoIndex);

        // Obtener el nombre del alumno:
        const alumnoName = (await asignatura.datosAlumno(addr))?.nombre;
        setAlumnoName(alumnoName);

        // Obtener el numero de evaluaciones:
        const ne = await asignatura.evaluacionesLength();

        let notas = [];
        for (let ei = 0; ei < ne; ei++) {
          const nota = await asignatura.calificaciones(addr, ei);
          notas.push(
            <td key={"p2-" + alumnoIndex + "-" + ei}>
              {nota?.tipo.toString() === "0" ? "" : ""}
              {nota?.tipo.toString() === "1" ? "N.P." : ""}
              {nota?.tipo.toString() === "2"
                ? (nota?.calificacion / 100).toFixed(2)
                : ""}
            </td>
          );
        }
        setNotas(notas);
      } catch (e) {
        console.log(e);
      }
    })();
  }, [alumnoIndex, asignatura]); // Si cambia el valor de forceReload, se vuelven a obtener los datos a pintar.

  return (
    <tr key={"d" + alumnoIndex}>
      <th>
        A<sub>{alumnoIndex}</sub>
      </th>
      <td>{alumnoName}</td>
      {notas}
    </tr>
  );
};

export default CalificacionRow;
