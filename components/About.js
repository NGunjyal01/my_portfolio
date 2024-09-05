

const About = () => {
    return (
        <div className="flex flex-col items-center py-[10%]" id="about-section">
            <div className="w-[60%] flex gap-10">
                <img src="/images/myImage.jpg" className="size-40"/>
                <div className="text-center">
                    <h1 className="font-heading text-2xl font-bold uppercase tracking-widest">About Me</h1>
                    <p className="mt-4 font-sans tracking-wider">
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
