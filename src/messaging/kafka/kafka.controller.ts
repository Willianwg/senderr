import { Controller } from "@nestjs/common";
import { EventPattern, Payload } from "@nestjs/microservices";
import { NodemailerService } from "src/nodemailer/mailer.service";
import { EmailPayload } from "./payload/email";

@Controller()
export class KafkaEmailController {
    constructor( private mailer: NodemailerService){}

    @EventPattern("emails")
    async emailSent(@Payload() content: EmailPayload){
        this.mailer.sendEmail(content);
    }
}