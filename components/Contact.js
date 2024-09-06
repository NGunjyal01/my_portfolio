"use client"

import { useState } from "react";
import { useForm } from "react-hook-form";
import { IoIosSend } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { CiAt } from "react-icons/ci";
import { FiMessageSquare } from "react-icons/fi";

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
        <div className="flex flex-col items-center pt-[15%] md:pt-[8%]" id="contact-section">
            <div className="w-[90%] md:w-[70%] flex flex-col items-center">
                <h1 className="font-heading font-semibold uppercase text-2xl tracking-widest">Let's Connect</h1>
                <div className="grid grid-cols-12 mt-10">
                    <img src="/images/contact-me.png" className="hidden md:block col-span-7 w-full"/>
                    <form className="col-span-full md:col-span-5 mx-auto w-full md:w-[80%] font-sans tracking-wide" onSubmit={handleSubmit(handleOnSubmit)}>
                        <div className="flex flex-col">
                            <label htmlFor="name" className="flex gap-1.5 items-center"><FaRegUser size={18}/>Name</label>
                            <input type="text" id="name" name="name" className="w-full border-2 rounded-md mt-1.5 py-1.5 px-2"
                            {...register("name",{required:{value:true,message:"Please Enter your Name"}})} required={true}/>
                            {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>}
                        </div>
                        <div className="flex flex-col mt-5">
                            <label htmlFor="email" className="flex gap-1.5 items-center"><CiAt size={20}/>Email</label>
                            <input type="email" id="email" name="email" className="w-full border-2 rounded-md mt-1.5 py-1.5 px-2"
                            {...register("email",{required:{value:true,message:"Please Enter Your Email"}})} required={true}/>
                            {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>}
                        </div>
                        <div className="flex flex-col mt-5">
                            <label htmlFor="message" className="flex gap-1.5 items-center"><FiMessageSquare/>Message</label>
                            <textarea id="message" name="message" className="w-full border-2 rounded-md mt-1.5 py-1.5 px-2 h-40"
                            {...register("message",{required:{value:true,message:"Please Enter Your Message"}})} required={true}/>
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
