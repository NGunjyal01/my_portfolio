"use client"
import Image from "next/image"
import { FaGithub,FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";


const Home = () => {
    return (
        <div className="flex flex-col items-center pt-[15%] h-screen bg-[#EEEEEE]" id="home-section">
            <section className="w-[60%] grid grid-cols-12">
                <div className="col-span-6">
                    <h1 className="font-heading text-3xl font-bold uppercase tracking-[.3rem]">Full-Stack Web Developer</h1>
                    <p className="font-sans mt-8 tracking-wide">Hi, I'm Nakshatra Gunjyal. A passionate Full-Stack Web Developer based in UttarPradesh, India.</p>
                    <div className="flex gap-5 mt-8 items-center">
                        <FaGithub size={30} className="cursor-pointer hover:text-blue-500" onClick={()=>{window.open("https://github.com/NGunjyal01", "_blank")}}/>
                        <FaLinkedin size={30} className="cursor-pointer hover:text-blue-500" onClick={()=>{window.open("https://linkedin.com/in/nakshatra-gunjyal", "_blank")}}/>
                        <IoIosMail size={40} className="cursor-pointer hover:text-blue-500" onClick={()=>{window.open("mailto:ngunjyal25@gmail.com", "_blank")}}/>
                    </div>
                </div>
                <Image src="/images/myImage.jpg" width={100} height={100} alt="my-image" className="col-span-6 mx-auto"/>
            </section>
            <section className="w-[60%] mt-24 flex">
                <h1 className="text-center text-2xl mt-2 font-code uppercase font-medium">Tech Stack <span>|</span></h1>
                <div className="flex gap-5 ml-10">
                    <img src="/images/html-icon.png" className="size-14 rounded-lg"/>
                    <img src="/images/css-icon.png" className="size-14 rounded-lg"/>
                    <img src="/images/js-icon.png" className="size-14 rounded-lg"/>
                    <div className="size-14 flex justify-center items-center bg-gray-900 rounded-lg">
                        <img src="/images/tailwind-css-icon.png" className="size-8 object-contain "/>
                    </div>
                    <div className="size-14 flex justify-center items-center bg-gray-900 rounded-lg">
                        <img src="/images/react-js-icon.png" className="size-8 object-contain "/>
                    </div>
                    <img src="/images/nextjs-icon.png" className="size-14 rounded-lg"/>
                </div>
            </section>
        </div>
    )
}

export default Home
