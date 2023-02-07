import { Module } from "@nestjs/common";
import { NodemailerService } from "src/nodemailer/mailer.service";
import { KafkaEmailController } from "./kafka/kafka.controller";
import { KafkaService } from "./kafka/kafka.service";

@Module({
    providers:[KafkaService, NodemailerService],
    controllers:[KafkaEmailController],
})

export class MessagingModule {}