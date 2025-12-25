import nodemailer, { createTransport } from "nodemailer";
import { MailServiceContract } from "./user.types";
import dotenv from "dotenv";
import { ENV } from "../config/env";

dotenv.config();

export const MailService: MailServiceContract = {
    sendEmailToResetPassword: async (email, code) => {
        const transporter = createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
                user: ENV.HOST_EMAIL_ADDRESS,
                pass: ENV.HOST_EMAIL_PASSWORD,
            },
        });

    await transporter.sendMail({
            from: '"Drones Shop" <julia.ovcharenko2000@gmail.com>',
            to: email,
            subject: "Password reset",
            text: `Follow the link to reset your password: http://127.0.0.1:8000/recover-password?code=${code}&email=${email}`,
        });
    }
};