import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function start() {
  const PORT = Number(process.env.PORT) || 8000;
  const app = await NestFactory.create(AppModule);
  app.enableCors()

  const config = new DocumentBuilder()
    .setTitle('freights API documentation')
    .setDescription('REST API Documentation')
    .setVersion('1.0.0')
    .addTag('Freights')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/swagger', app, document);

  await app.listen(PORT, () => console.log(`SERVER STARTED ON PORT ${PORT}`));
}

start();
