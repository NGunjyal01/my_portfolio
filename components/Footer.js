"use client"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { IoIosMail } from "react-icons/io"

const Footer = () => {
    return (
        <div className="bg-[#222831] flex justify-between text-white py-14 px-24 mt-[5%]">
            <h1>Copyright © 2024. All rights are reserved</h1>
            <div className="flex gap-5 items-center">
                <FaGithub size={30} className="cursor-pointer hover:text-blue-500" onClick={()=>{window.open("https://github.com/NGunjyal01", "_blank")}}/>
                <FaLinkedin size={30} className="cursor-pointer hover:text-blue-500" onClick={()=>{window.open("https://linkedin.com/in/nakshatra-gunjyal", "_blank")}}/>
                <IoIosMail size={40} className="cursor-pointer hover:text-blue-500" onClick={()=>{window.open("mailto:ngunjyal25@gmail.com", "_blank")}}/>
            </div>
        </div>
    )
}

export default Footer
