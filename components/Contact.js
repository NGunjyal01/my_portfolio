"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { IoIosSend } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { CiAt } from "react-icons/ci";
import { FiMessageSquare } from "react-icons/fi";
import { motion } from "framer-motion";

const Contact = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState('idle'); // 'idle', 'loading', 'success', 'error'

    const handleOnSubmit = async (data) => {
        try {
            setLoading(true);
            setStatus('loading'); // Set button to loading state

            const response = await fetch('http://localhost:3000/api/sendMail', {
                method: "POST",
                body: JSON.stringify(data),
                headers: { "Content-Type": "application/json" }
            });

            if (response.ok) {
                setStatus('success'); // On success, set the status to success
            } 
            else {
                setStatus('error'); // On failure, set the status to error
            }

            setLoading(false);
            reset();

            // Reset button to initial state after 3 seconds
            setTimeout(() => {
                setStatus('idle');
            }, 3000);

        } catch (error) {
            console.log("Error During Sending Mail.....", error);
            setLoading(false);
            setStatus('error'); // Set the status to error in case of failure

            // Reset button to initial state after 3 seconds
            setTimeout(() => {
                setStatus('idle');
            }, 3000);
        }
    };

    const renderButtonContent = () => {
        if (status === 'loading') {
            return (
            <span className="flex justify-center items-center gap-2">
                <motion.svg className="animate-spin h-5 w-5 mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C6.477 0 2 4.477 2 10.5S6.477 21 12 21v-2a8 8 0 01-8-8z"></path>
                </motion.svg>
                Sending
            </span>
            );
        } 
        else if (status === 'success') {
            return "Sent Successfully!";
        } 
        else if (status === 'error') {
            return "Failed to Send!";
        } 
        else {
            return (
            <span className="flex justify-center items-center gap-2">
                <IoIosSend size={20} />
                Send Message
            </span>
            );
        }
    };

    return (
        <div className="flex flex-col items-center pt-[15%] md:pt-[8%]" id="contact-section">
            <div className="w-[90%] md:w-[70%] flex flex-col items-center">
                <h1 className="font-heading font-semibold uppercase text-2xl tracking-widest">Let&apos;s Connect</h1>
                <div className="grid grid-cols-12 mt-10">
                    <img src="/images/contact-me.png" className="hidden md:block col-span-7 w-full" />
                    <form className="col-span-full md:col-span-5 mx-auto w-full md:w-[80%] font-sans tracking-wide" onSubmit={handleSubmit(handleOnSubmit)}>
                        <div className="flex flex-col">
                            <label htmlFor="name" className="flex gap-1.5 items-center"><FaRegUser size={18} />Name</label>
                            <input type="text" id="name" name="name" className="w-full border-2 rounded-md mt-1.5 py-1.5 px-2"
                            {...register("name", { required: { value: true, message: "Please Enter your Name" } })} required={true} />
                            {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>}
                        </div>
                        <div className="flex flex-col mt-5">
                            <label htmlFor="email" className="flex gap-1.5 items-center"><CiAt size={20} />Email</label>
                            <input type="email" id="email" name="email" className="w-full border-2 rounded-md mt-1.5 py-1.5 px-2"
                            {...register("email", { required: { value: true, message: "Please Enter Your Email" } })} required={true} />
                            {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>}
                        </div>
                        <div className="flex flex-col mt-5">
                            <label htmlFor="message" className="flex gap-1.5 items-center"><FiMessageSquare />Message</label>
                            <textarea id="message" name="message" className="w-full border-2 rounded-md mt-1.5 py-1.5 px-2 h-40"
                            {...register("message", { required: { value: true, message: "Please Enter Your Message" } })} required={true} />
                            {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message.message}</p>}
                        </div>
                        <motion.button type="submit" className={`mt-10 w-full py-3 text-white rounded-lg
                            ${status === 'loading' ? 'bg-blue-300' : status === 'success' ? 'bg-green-500' :
                            status === 'error' ? 'bg-red-500' : 'bg-blue-500'} transition-all duration-300 ease-in-out 
                            ${status !== 'idle' && 'cursor-not-allowed'}`} // Change cursor when disabled
                            disabled={status !== 'idle'} // Disable button when not in 'idle' state
                            whileTap={status === 'idle' ? { scale: 0.95 } : {}}>
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}>
                                {renderButtonContent()}
                            </motion.div>
                        </motion.button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
