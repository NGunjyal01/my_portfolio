import SocalMediaLinks from "@/utils/SocalMediaLinks"

const Footer = () => {
    return (
        <div className="bg-[#222831] flex sm:flex-row flex-col items-center justify-between text-white py-14 px-10 md:px-24 mt-[20%] md:mt-[5%]">
            <h1 className="whitespace-nowrap">Copyright © 2024. All rights are reserved</h1>
            <div className="mt-10">
                <SocalMediaLinks/>
            </div>
        </div>
    )
}

export default Footer
