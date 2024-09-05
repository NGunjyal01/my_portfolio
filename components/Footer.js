"use client"
import { FaGithub, FaLinkedin } from "react-icons/fa"

const Footer = () => {
    return (
        <div className="bg-[#222831] flex justify-between text-white py-14 px-24 mt-[5%]">
            <h1>Copyright © 2024. All rights are reserved</h1>
            <div className="flex gap-4">
                <FaGithub size={25} className="cursor-pointer" onClick={()=>{window.open("https://github.com/NGunjyal01", "_blank")}}/>
                <FaLinkedin size={25} className="cursor-pointer" onClick={()=>{window.open("https://linkedin.com/in/nakshatra-gunjyal", "_blank")}}/>
            </div>
        </div>
    )
}

export default Footer
