import Web3 from "https://esm.sh/web3@1.10.0"

export const isValidAddress = (adr) => {
  try {
    const web3 = new Web3()
    web3.utils.toChecksumAddress(adr)
    return true
  } catch (e) {
    return false
  }
}
