import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessagingModule } from './messaging/messaging.module';
import { Nodemailer } from './nodemailer/mailer.module';

@Module({
  imports: [
    Nodemailer,
     ConfigModule.forRoot({ isGlobal:true }),
     MessagingModule
    ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}