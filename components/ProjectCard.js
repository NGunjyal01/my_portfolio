"use client"
import { FaGithub,FaLink  } from "react-icons/fa";

const ProjectCard = ({project,index}) => {
    const{title,src,description,techStack,github,live} = project;
    return (
        <div className={`grid grid-cols-12 mt-20 ${index % 2 === 0 ? "" : "flex-row-reverse"}`}>
            <img src={src} className={`col-span-5 w-[90%] hover:scale-[120%] cursor-pointer transition-transform ease-in-out duration-300 mx-auto ${index % 2 === 0 ? "order-1" : "order-2"}`}
            onClick={()=>{window.open(live, "_blank")}}/>
            <div className={`col-span-7 flex flex-col items-center gap-5 ${index % 2 === 0 ? "order-2" : "order-1"}`}>
                <h1 className="text-xl font-heading font-bold tracking-wider">{title}</h1>
                <p className="font-sans text-center tracking-wide">{description}</p>
                <div className="flex gap-2">
                    {techStack.map((tech,index) =><p key={index} className="border-2 border-gray-300 py-2 px-3 rounded-full shadow-sm text-sm">#{tech}</p>)}
                </div>
                <div className="flex gap-8">
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
