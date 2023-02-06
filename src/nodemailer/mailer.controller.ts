import { Controller, Get } from "@nestjs/common";
import { NodemailerService } from "./mailer.service";


@Controller("hi")
export class NodemailerController{
    constructor(private nodemailer: NodemailerService){}
    
    @Get()
    async hi(){
        return this.nodemailer.hi();
    }
}