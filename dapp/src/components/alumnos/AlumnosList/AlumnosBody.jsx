import { useState, useEffect, useContext } from "react";

import { StateContext } from "../../StateContext.mjs";

import AlumnoRow from "./AlumnoRow.jsx";

const AlumnosBody = () => {
  const { asignatura, useForceReload } = useContext(StateContext);
  const { forceReload } = useForceReload()

  const [matriculasLength, setMatriculasLength] = useState(0);

  useEffect(() => {
    console.log("Obtener el numero de matriculaciones.");
    (async () => {
      try {
        const ml = await asignatura.matriculasLength();
        setMatriculasLength(ml.toNumber());
      } catch (e) {
        console.log(e);
      }
    })();
  }, [forceReload]); // [] -> Sin dependencias. Solo se llama a useEffect una vez.

  let rows = [];
  for (let i = 0; i < matriculasLength; i++) {
    rows.push(<AlumnoRow key={"ab-" + i} alumnoIndex={i} />);
  }

  return <tbody>{rows}</tbody>;
};

export default AlumnosBody;
