import Image from "next/image"
import { FaGithub,FaLinkedin } from "react-icons/fa";


const Home = () => {
    return (
        <div className="flex flex-col items-center pt-[15%] h-screen bg-gray-50">
            <section className="w-[60%] grid grid-cols-12">
                <div className="col-span-6">
                    <h1>Full-Stack Web Devloper</h1>
                    <p>Hi, I'm Nakshatra Gunjyal. A passionate Full-Stack Web Developer based in UttarPradesh, India.</p>
                    <div className="flex gap-2">
                        <FaGithub size={25}/>
                        <FaLinkedin size={25}/>
                    </div>
                </div>
                <Image src="/images/myImage.jpg" width={100} height={100} alt="my-image" className="col-span-6 mx-auto"/>
            </section>
            <section className="w-[60%] mt-10 flex">
                <h1 className="text-center">Tech Stack <span>|</span></h1>
                <div className="flex gap-5">
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
