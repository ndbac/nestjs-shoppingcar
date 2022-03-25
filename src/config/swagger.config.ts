import { INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

export const SwaggerConfig = (app: INestApplication) => {
  const config = new DocumentBuilder()
    .setTitle('Car shopping API')
    .setDescription('API for car shopping - BacRR')
    .setVersion('1.0')
    // .addTag('cars')
    .addSecurity('bearer', {
      type: 'http',
      scheme: 'bearer',
    })
    .addBasicAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs/api', app, document);
};
