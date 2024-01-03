import { useContext, useRef, useState } from "react";
import { StateContext } from "../StateContext.mjs";

export const SetCoordinator = () => {
  const [coordinador, setCoordinador] = useState("");
  const { asignatura } = useContext(StateContext);
  const input = useRef();

  const submitHandler = async (ev) => {
    ev.preventDefault();
    try {
      console.log(coordinador);
      await asignatura.setCoordinador(coordinador, {
        from: "0x8fEA26c091DCec5fA7D1817159903D8cc68a5EbA"
      });
    } finally {
      ev.target.reset();
    }
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <h2>Cambiar coordinador!</h2>
        <input
          className="input input-bordered w-full max-w-xs"
          ref={input}
          name="input"
          type="text"
          value={coordinador}
          onChange={(ev) => setCoordinador(ev.target.value)}
        />
      </form>
    </div>
  );
};
