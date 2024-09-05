import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const POST = async(request)=>{

    try {
        const { name, email, message } = await request.json();
        console.log(name,email,message);
        console.log(process.env.GMAIL_USER,process.env.GMAIL_PASS)
        // Setup nodemailer transporter
        const transporter = nodemailer.createTransport({
            service: 'Gmail', // You can also use other services like SendGrid, Mailgun, etc.
            auth: {
            user: process.env.GMAIL_USER, // Your Gmail account
            pass: process.env.GMAIL_PASS, // Your Gmail password or App password
            },
        });
        // Send email
        await transporter.sendMail({
        from: email, // Sender's email
        to: process.env.RECIPIENT_EMAIL, // Recipient email (your email)
        subject: `Contact Form Submission from ${name}`,
        text: message,
        html: `<p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong> ${message}</p>`,
        });
        return NextResponse.json({success:true},{status:200})
    } catch (error) {
        console.error(error);
        return NextResponse.json({ success: false, message: 'Failed to send email' },{status:500});
    }
}