"use client"

import { useState } from "react";
import { useForm } from "react-hook-form";
import { IoIosSend } from "react-icons/io";

const Contact = () => {

    const {register,handleSubmit,formState:{errors},reset} = useForm();
    const [loading,setLoading] = useState(false);

    const handleOnSubmit = async(data)=>{
        try{
            setLoading(true);
            await fetch('http://localhost:3000/api/sendMail',{
                method:"POST",
                body:JSON.stringify(data),
                headers:{"Content-Type":"application/json"}
            });
            reset();
            setLoading(false);
        }catch(error){
            console.log("Error During Sending Mail.....",error);
        }
    }
    
    return (
        <div className="flex flex-col items-center pt-[10%]" id="contact-section">
            <div className="w-[70%] flex flex-col items-center">
                <h1 className="font-heading font-semibold uppercase text-2xl tracking-widest">Contact</h1>
                <div className="grid grid-cols-12 mt-10">
                    <img src="/images/contact-me.png" className="col-span-7 w-full"/>
                    <form className="col-span-5 mx-auto w-[80%] font-sans tracking-wide" onSubmit={handleSubmit(handleOnSubmit)}>
                        <div className="flex flex-col">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" className="w-full border-2 rounded-md mt-1.5 py-1.5 px-2"
                            {...register("name",{required:{value:true,message:"Please Enter your Name"}})}/>
                            {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>}
                        </div>
                        <div className="flex flex-col mt-5">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" className="w-full border-2 rounded-md mt-1.5 py-1.5 px-2"
                            {...register("email",{required:{value:true,message:"Please Enter Your Email"}})}/>
                            {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>}
                        </div>
                        <div className="flex flex-col mt-5">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" className="w-full border-2 rounded-md mt-1.5 py-1.5 px-2 h-40"
                            {...register("message",{required:{value:true,message:"Please Enter Your Message"}})}/>
                            {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message.message}</p>}
                        </div>
                        <button type="submit" className="mt-10 bg-blue-500 w-full py-3 text-white rounded-lg">
                            {loading ? "Sending...":
                            <span className="flex justify-center items-center gap-2">
                                <IoIosSend size={20}/> 
                                Send Message
                            </span>}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
