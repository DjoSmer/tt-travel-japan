import { ValidationPipe, BadRequestException } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.useGlobalPipes(
    new ValidationPipe({
      exceptionFactory: (errors) => {
        /**
         * меняем формат вывода ошибок, и в сообщениях указывается имя переменной, 
         * пользователь не поймет, поэтому заменяем его на The Field,
         */
        const result = errors.map((error) => ({
          property: error.property,
          message: error.constraints[Object.keys(error.constraints)[0]].replace(
            error.property,
            'The field'
          ),
        }));
        return new BadRequestException(result);
      },
    })
  );
  await app.listen(3000);
}
bootstrap();
