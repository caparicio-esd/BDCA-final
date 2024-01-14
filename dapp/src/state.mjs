/* eslint-disable no-undef */
import Web3 from "https://esm.sh/web3@1.10.0"
import EventEmitter from "events"
// const { ethereum, web3 } = window;

import json from "./contracts/Asignatura.json"
import { useCallback, useEffect, useState } from "react"
console.log("Inicializando estado ...")
let asignatura = null // Instancia desplegada del contrato.
// Emite un evento "tx" vez que llega un bloque que contiene
// transacciones del contrato asignatura.
let txEmitter = new EventEmitter()

try {
  // Crear una instancia nueva de web3. Usando proveedor de MetaMask.
  window.web3 = new Web3(ethereum)
  console.log("web3 =", web3.version)

  let Asignatura = TruffleContract(json) // Crear la abstraccion
  Asignatura.setProvider(window.web3.eth.currentProvider) // Provisionar abstraccion Asignatura con el proveedor web3
  asignatura = await Asignatura.deployed() // Obtener instancia del asignatura desplegado.

  const subscription = web3.eth.subscribe("newBlockHeaders")
  subscription.on("data", async (blockHeader) => {
    const block = await web3.eth.getBlock(blockHeader.hash, true)
    for (const transaction of block.transactions) {
      if (transaction.to === asignatura.address) {
        console.log("Transacción afectando al contrato.")
        txEmitter.emit("tx", transaction)
        break
      }
    }
  })

  // Muestra el Login de Metamask."
  const accounts = await ethereum.request({ method: "eth_requestAccounts" })
  console.log("Logueado con la cuenta =", accounts[0])
} catch (error) {
  console.log(error.message || error)
  alert("Se ha producido un error: " + (error.message || error))
}

/**
 *
 */
const useForceReload = () => {
  const [forceReload, setForceReload] = useState(0)
  console.log(forceReload)
  useEffect(() => {
    const eh = () => {
      const forceReload_ = forceReload + 1
      setForceReload(forceReload_)
    }
    txEmitter.on("tx", eh)
    return () => {
      txEmitter.off("tx", eh)
    }
  }, [])
  return { forceReload }
}

/**
 *
 */
const useRole = (asignatura) => {
  const [role, setRole] = useState("Not Recognized")
  const setRoleHint = async () => {
    try {
      const address = await ethereum.request({ method: "eth_requestAccounts" })
      setRole(await asignatura.getRoleByAddress(address[0]))
    } catch (e) {
      console.log(e)
    }
  }
  useEffect(() => {
    setRoleHint()
  }, [setRoleHint])
  return { role, setRole }
}

/**
 *
 */
const useAccounts = () => {
  const [owner, setOwner] = useState(null)
  const [coordinator, setCoordinator] = useState(null)
  const [alumnos, setAlumnos] = useState([])
  const [profes, setProfes] = useState([])
  const [currentAccount, setCurrentAccount] = useState(null)
  const [allAccounts, setAllAccounts] = useState([])

  const fetchOwner = useCallback(async () => {
    setOwner(await asignatura.owner())
  }, [asignatura, setOwner])
  const fetchCoordinator = useCallback(async () => {
    setCoordinator(await asignatura.coordinador())
  }, [asignatura, setCoordinator])
  const fetchAlumnos = useCallback(async () => {
    const length = +(await asignatura.matriculasLength()).toString()
    const matriculas = await Promise.all(
      Array.from(Array(length).keys()).map(async (i) => await asignatura.matriculas(i)),
    )
    setAlumnos(matriculas)
  }, [asignatura, setAlumnos])
  const fetchProfes = useCallback(async () => {
    const length = +(await asignatura.profesoresLength()).toString()
    const profes = await Promise.all(Array.from(Array(length).keys()).map(async (i) => await asignatura.profesores(i)))
    setProfes(profes)
  }, [asignatura, setProfes])
  const fetchCurrentAccount = useCallback(async () => {
    const accounts = await ethereum.request({ method: "eth_requestAccounts" })
    setCurrentAccount(accounts[0])
    setAllAccounts(accounts)
  }, [ethereum])

  useEffect(() => {
    const fetchAll = () => {
      fetchOwner()
      fetchCoordinator()
      fetchAlumnos()
      fetchProfes()
      fetchCurrentAccount()
    }
    txEmitter.on("tx", fetchAll)
    fetchAll()
    return () => {
      txEmitter.off("tx", fetchAll)
    }
  }, [fetchOwner, fetchCoordinator, fetchAlumnos, fetchProfes, fetchCurrentAccount, asignatura])

  return {
    owner,
    coordinator,
    alumnos,
    profes,
    currentAccount,
    allAccounts,
  }
}

// Es estado es un objeto con las siguiente propiedades:
//  - asignatura - abstraccion del contrato asignatura desplegado.
//  - txEmitter  - Event Emitter que emite un evento "tx" vez que llega
//                 un bloque que contiene transacciones del contrato asignatura.
const state = { asignatura, txEmitter, useForceReload, useRole, useAccounts }
export default state
