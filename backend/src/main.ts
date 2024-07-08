import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

// TODO fake auth of mitarbeiter and patient
// TODO status checks / Query params
// TODO Tests
// TODO DOCKER MQTT
// TODO subscribe in FE to MQTT
// TODO more FE QoL features usecase based

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS
  app.enableCors({
    origin: "http://localhost:4200",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
    allowedHeaders: "Content-Type, Accept",
    credentials: true,
  });

  await app.listen(3000);
}
bootstrap();
