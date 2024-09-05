import { projectDetails } from "@/utils/projectsDetails"
import ProjectCard from "./ProjectCard"


const Projects = () => {
    return (
        <div className="flex flex-col items-center py-14 bg-[#EEEEEE]" id="projects-section">
            <div className="w-[65%] my-20">
                <h1 className="font-heading text-3xl font-bold tracking-widest uppercase">Projects</h1>
                <div className="mt-10">
                    {projectDetails.map((project,index)=><ProjectCard key={index} project={project} index={index}/>)}
                </div>
            </div>
        </div>
    )
}

export default Projects
