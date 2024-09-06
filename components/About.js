

const About = () => {
    return (
        <div className="flex flex-col items-center py-[25%] sm:py-[20%] md:py-[12%]" id="about-section">
            <div className="w-[80%] lg:w-[70%] xl:w-[65%] grid grid-cols-12">
                <div className="col-span-full md:col-span-6 flex justify-center md:justify-start">
                    <img src="/images/about.jpg" className="w-[80%] h-60 sm:h-80 rounded-lg"/>
                </div>
                <div className="text-center col-span-full md:col-span-6">
                    <h1 className="font-heading text-xl md:text-2xl font-bold uppercase tracking-widest mt-10 md:mt-5">About Me</h1>
                    <p className="mt-5 md:mt-10 font-sans tracking-wider text-xs md:text-base">
                        Hi, I'm Nakshatra Gunjyal, a full-stack web developer with experience in building both frontend and backend 
                        applications. I enjoy creating user-friendly websites and scalable solutions using technologies like React, Next.js, 
                        Node.js, and MongoDB. I'm passionate about turning ideas into functional and efficient digital products.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About
