"use client"
import { FaGithub,FaLink  } from "react-icons/fa";

const ProjectCard = ({project,index}) => {
    const{title,src,description,techStack,github,live} = project;
    return (
        <div className={`grid grid-cols-12 mt-20 ${index % 2 === 0 ? "" : "md:flex-row-reverse"}`}>
            <img src={src} className={`col-span-full md:col-span-5 w-[85%] sm:w-[70%] md:w-[90%] md:hover:scale-[120%] cursor-pointer transition-transform 
            ease-in-out duration-300 mx-auto ${index % 2 === 0 ? "md:order-1" : "md:order-2"}`}
            onClick={()=>{window.open(live, "_blank")}}/>
            <div className={`col-span-full md:col-span-7 mt-10 md:mt-0 flex flex-col items-center gap-5 ${index % 2 === 0 ? "md:order-2" : "md:order-1"}`}>
                <h1 className="text-xl font-heading font-bold tracking-wider">{title}</h1>
                <p className="font-sans text-center tracking-wide text-sm lg:text-base">{description}</p>
                <div className="flex flex-wrap gap-2 ml-[5%]">
                    {techStack.map((tech,index) =><p key={index} className="border-2 border-gray-300 py-2 px-3 rounded-full shadow-sm text-xs lg:text-sm">#{tech}</p>)}
                </div>
                <div className="flex gap-8 mt-2 sm:mt-0">
                    <div className="flex gap-1 items-center cursor-pointer hover:text-blue-500 hover:scale-90 transition-transform ease-in-out" onClick={()=>{window.open(github, "_blank")}}>
                        <h1>Code</h1>
                        <FaGithub size={20}/>
                    </div>
                    <div className="flex gap-1 items-center cursor-pointer hover:text-blue-500 hover:scale-90 transition-transform ease-in-out" onClick={()=>{window.open(live, "_blank")}}>
                        <h1>Live Demo</h1>
                        <FaLink size={15}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
