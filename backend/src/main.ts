import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

// TODO DOCKER MQTT
// TODO subscribe in FE to MQTT

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS
  app.enableCors({
    origin: "http://localhost:4200",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
    allowedHeaders: "Content-Type, Accept, authorization",
    credentials: true,
  });

  await app.listen(3000);
}
bootstrap();
