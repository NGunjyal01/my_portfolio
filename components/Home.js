import SocalMediaLinks from "@/utils/SocalMediaLinks"


const Home = () => {
    return (
        <div className="flex flex-col items-center sm:pt-[22%] pt-[40%] md:pt-[20%] lg:pt-[15%] xl:pt-[12%] min-h-screen bg-[#EEEEEE]" id="home-section">
            <section className="w-[90%] sm:w-[80%] lg:w-[70%] xl:w-[60%] grid grid-cols-12">
                <img src="/images/myImage.jpg" alt="my-image" className="morphing-img flex md:hidden col-span-full mx-auto w-[80%] sm:w-[70%]"/>
                <div className="col-span-full md:col-span-6 mt-10 md:mt-16 text-center md:text-left">
                    <h1 className="font-heading text-2xl sm:text-3xl md:text-2xl lg:text-3xl xl:text-4xl font-bold uppercase tracking-widest sm:tracking-[.3rem] leading-10 md:leading-[3rem]">
                        Full-Stack Web Developer
                    </h1>
                    <p className="font-sans my-5 tracking-wide">
                        Hi, I'm Nakshatra Gunjyal. A passionate Full-Stack Web Developer based in UttarPradesh, India.
                    </p>
                    <div className="w-full flex justify-center md:justify-start">
                        <SocalMediaLinks/>
                    </div>
                </div>
                <img src="/images/myImage.jpg" alt="my-image" className="morphing-img hidden md:flex col-span-6 mx-auto w-[90%] ml-20"/>
            </section>
            <section className="w-[90%] sm:w-[80%] lg:w-[70%] xl:w-[60%] mt-10 md:mt-24 mb-20 lg:mb-0 flex flex-col md:flex-row items-center">
                <h1 className="text-center text-lg lg:text-2xl font-code uppercase font-semibold whitespace-nowrap flex gap-5">
                    Tech Stack 
                    <span className="hidden md:block">|</span>
                </h1>
                <hr className="flex md:hidden w-24 h-[0.1rem] bg-black mt-2 mb-5"/>
                <div className="flex flex-wrap gap-5 ml-5 sm:ml-0 md:ml-10 mt-5 md:mt-0">
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
                    <img src="/images/mongodb-icon.png" className="size-14 object-contain"/>
                </div>
            </section>
        </div>
    )
}

export default Home
