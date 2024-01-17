import React from "react"
import { GithubLogo } from "@phosphor-icons/react/dist/ssr"

const Footer = () => {
  return (
    <footer className="footer flex items-center justify-center bg-slate-800 text-white py-16 sticky bottom-0">
      <div className="footer_content flex items-center justify-center">
        <a href="https://github.com/caparicio-esd/BDCA-final" className="flex items-center justify-center gap-2">
          Follow the proyect in <GithubLogo size={24} weight="bold" />
        </a>
      </div>
    </footer>
  )
}

export default Footer
