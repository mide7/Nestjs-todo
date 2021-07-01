import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
  .setTitle('Todo App')
  .setDescription('My Todo API description')
  .setVersion('0.0.1')
  .addTag('tasks')
  .build();
const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('api', app, document);


  app.enableCors()
  await app.listen(process.env.PORT || 5000);
}
bootstrap();
