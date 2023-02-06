import { Injectable } from "@nestjs/common";
import * as mailer from "nodemailer";
import { } from "@nestjs/config";

@Injectable()
export class NodemailerService {
    async hi() {

        const transport = mailer.createTransport({
            host: process.env.MAIL_HOST,
            port: Number(process.env.MAIL_PORT),
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
            }
        })

        const info = await transport.sendMail({
            from: "Willian Guedes",
            to: "willian.wg70@gmail.com",
            subject: "Testing nodemailer",
            html: `
            <img style="width:100vw; height:300;" src="https://th.bing.com/th/id/OIP.4XB8NF1awQyApnQDDmBmQwHaEo?w=287&h=180&c=7&r=0&o=5&pid=1.7" />
            <h1>Everything working!!</h1>
            `
        })

        console.log("Done!");
        return "sent";
    }
}