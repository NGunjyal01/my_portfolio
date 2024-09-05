"use client"

import { useForm } from "react-hook-form";

const Contact = () => {

    const {register,handleSubmit,formState:{errors}} = useForm();

    const handleOnSubmit = (data)=>{
        console.log(data)
    }
    
    return (
        <div className="flex flex-col items-center mt-[5%]">
            <div className="w-[70%] flex flex-col items-center">
                <h1 className="font-heading font-semibold uppercase text-2xl tracking-widest">Contact</h1>
                <div className="grid grid-cols-12 mt-10">
                    <img src="/images/contact-me.png" className="col-span-7 w-full"/>
                    <form className="col-span-5 mx-auto w-[80%] font-sans tracking-wide" onSubmit={handleSubmit(handleOnSubmit)}>
                        <div className="flex flex-col">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" className="w-full border-2 rounded-lg py-1 px-2"
                            {...register("name",{required:{value:true,message:"Please Enter your Name"}})}/>
                            {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>}
                        </div>
                        <div className="flex flex-col mt-5">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" className="w-full border-2 rounded-lg py-1 px-2"
                            {...register("email",{required:{value:true,message:"Please Enter Your Email"}})}/>
                            {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>}
                        </div>
                        <div className="flex flex-col mt-5">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" className="w-full border-2 rounded-lg py-1 px-2 h-40"
                            {...register("message",{required:{value:true,message:"Please Enter Your Message"}})}/>
                            {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message.message}</p>}
                        </div>
                        <button type="submit" className="mt-10 bg-blue-500 w-full py-2 text-white rounded-lg">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
