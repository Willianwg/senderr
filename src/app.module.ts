import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Nodemailer } from './nodemailer/mailer.module';

@Module({
  imports: [
    Nodemailer,
     ConfigModule.forRoot({ isGlobal:true }),
    ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}