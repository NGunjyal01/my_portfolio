'use client'

import { FaGithub, FaLinkedin } from "react-icons/fa"
import { IoIosMail } from "react-icons/io"

const SocalMediaLinks = () => {
    return (
        <div className="flex gap-5 mt-8 items-center">
            <FaGithub size={30} className="cursor-pointer hover:text-blue-500 duration-300" onClick={()=>{window.open("https://github.com/NGunjyal01", "_blank")}}/>
            <FaLinkedin size={30} className="cursor-pointer hover:text-blue-500 duration-300" onClick={()=>{window.open("https://linkedin.com/in/nakshatra-gunjyal", "_blank")}}/>
            <IoIosMail size={40} className="cursor-pointer hover:text-blue-500 duration-300" onClick={()=>{window.open("mailto:ngunjyal25@gmail.com", "_blank")}}/>
        </div>
    )
}

export default SocalMediaLinks
