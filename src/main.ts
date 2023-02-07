import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { KafkaService } from './messaging/kafka/kafka.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const kafka = app.get(KafkaService);
  app.connectMicroservice<MicroserviceOptions>({
    strategy: kafka
  })

  await app.startAllMicroservices();
  await app.listen(process.env.port || 3000);
}
bootstrap();
