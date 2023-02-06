import { Module } from "@nestjs/common";
import { NodemailerController } from "./mailer.controller";
import { NodemailerService } from "./mailer.service";


@Module({
    controllers:[NodemailerController],
    providers:[NodemailerService],
})

export class Nodemailer{}