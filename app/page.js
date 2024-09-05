import About from "@/components/About"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import Home from "@/components/Home"
import Projects from "@/components/Projects"


const page = () => {
  return (
    <div>
      <Home/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default page

