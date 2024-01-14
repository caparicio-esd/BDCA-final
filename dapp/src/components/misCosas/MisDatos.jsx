import { useState, useEffect, useContext } from "react";
import { StateContext } from "../StateContext.mjs";

const MisDatos = () => {
  const { asignatura } = useContext(StateContext);

  const [nombre, setNombre] = useState(null);
  const [email, setEmail] = useState(null);
  const [dni, setDni] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const accounts = await window.web3.eth.getAccounts();
        const account = accounts[0];
        // Obtener  datos del alumno:
        const datos = await asignatura.quienSoy({ from: account });
        setNombre(datos.nombre);
        setEmail(datos.email);
        setDni(datos.dni)
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  return (
    <article className="AppMisDatos">
      <h3 className="font-bold text-lg mb-2">Mis Datos</h3>
      <ul>
        <li className="p-4 bg-slate-100 mb-2">
          Nombre: <br></br><span className="font-bold">{nombre}</span>
        </li>
        <li className="p-4 bg-slate-100 mb-2">
          DNI: <br></br><span className="font-bold">{dni}</span>
        </li>
        <li className="p-4 bg-slate-100 mb-2">
          Email: <br></br><span className="font-bold">{email}</span>
        </li>
      </ul>
    </article>
  );
};

export default MisDatos;
