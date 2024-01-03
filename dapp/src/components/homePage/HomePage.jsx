import { useCallback, useContext, useEffect, useState } from "react";
import { StateContext } from "../StateContext.mjs";
import { SetCoordinator } from "./SetCoordinator";

const HomePage = () => {
  const { asignatura, useForceReload } = useContext(StateContext);
  const [owner, setOwner] = useState(null);
  const [coordinator, setCoordinator] = useState(null);
  useForceReload()

  const fetchOwner = useCallback(async () => {
    const owner_ = await asignatura.owner();
    setOwner(owner_);
    const coordinator_ = await asignatura.coordinador();
    setCoordinator(coordinator_);
  }, [asignatura]);

  useEffect(() => {
    fetchOwner();
  }, [fetchOwner]);

  return (
    <>
      <p>Página Home de la Asignatura Lite</p>
      <p>El owner es {owner}</p>
      <p>El coordinador es {coordinator}</p>
      <SetCoordinator />
    </>
  );
};

export default HomePage;
