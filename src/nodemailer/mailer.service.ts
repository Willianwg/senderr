import { Injectable } from "@nestjs/common";
import * as mailer from "nodemailer";
import { } from "@nestjs/config";
import { EmailPayload } from "src/messaging/kafka/payload/email";

@Injectable()
export class NodemailerService {
    private transport: mailer.Transporter;
    private from = "Guedes Dev <devguedes844@gmail.com>";

    constructor(){
        this.transport = mailer.createTransport({
            host: process.env.MAIL_HOST,
            port: Number(process.env.MAIL_PORT),
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
            }
        });

    }
    async hi() {

        await this.transport.sendMail({
            from: this.from,
            to: process.env.MAIL_TO,
            subject: "Testing nodemailer",
            html: `
            <img style="width:100vw; height:300;" src="https://th.bing.com/th/id/OIP.4XB8NF1awQyApnQDDmBmQwHaEo?w=287&h=180&c=7&r=0&o=5&pid=1.7" />
            <h1>Everything working!!</h1>
            `
        })

        console.log("Done!\n");
        return "sent";
    }

    async sendEmail(content: EmailPayload){
        const { to, subject, message } = content;

        await this.transport.sendMail({
            from: this.from,
            to,
            subject,
            html: message,
        })
    }
}