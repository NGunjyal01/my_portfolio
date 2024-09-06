import { projectDetails } from "@/utils/projectsDetails"
import ProjectCard from "./ProjectCard"


const Projects = () => {
    return (
        <div className="flex flex-col items-center py-14 bg-[#EEEEEE]" id="projects-section">
            <div className="w-[90%] lg:w-[75%] xl:w-[65%] my-10">
                <h1 className="font-heading text-2xl md:text-3xl font-bold tracking-widest uppercase -ml-5 md:ml-[5%] 
                text-center md:text-left">
                    Projects
                </h1>
                <div className="mt-10">
                    {projectDetails.map((project,index)=><ProjectCard key={index} project={project} index={index}/>)}
                </div>
            </div>
        </div>
    )
}

export default Projects
