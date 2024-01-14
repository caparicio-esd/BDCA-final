import { useState, useEffect } from "react"
import RoleFloatingHint from "../roles/RoleFloatingHint"

const MiCuenta = () => {
  const [addr, setAddr] = useState(null)
  const [balance, setBalance] = useState(null)

  useEffect(() => {
    ;(async () => {
      try {
        const accounts = await window.web3.eth.getAccounts()
        const account = accounts[0]
        setAddr(account)

        const balance = await window.web3.eth.getBalance(account)
        setBalance(web3.utils.fromWei(balance, "ether"))
      } catch (e) {
        console.log(e)
      }
    })()
  }, [])

  return (
    <article className="AppMiCuenta">
      <h3 className="font-bold text-lg mb-2">Mi Cuenta</h3>
      <ul>
        <li className="p-4 bg-slate-100 mb-2">
          Dirección: <br></br><span className="font-bold">{addr}</span>
        </li>
        <li className="p-4 bg-slate-100 mb-2">
          Balance: <br></br><span className="font-bold">{balance ?? "??"}</span> ethers
        </li>
      </ul>
    </article>
  )
}

export default MiCuenta
