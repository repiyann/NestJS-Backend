import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule);
    await app.listen(3000);
    console.log('Nest application started successfully');
  } catch (error) {
    console.error('Failed to start Nest application:', error);
  }
}
bootstrap();
