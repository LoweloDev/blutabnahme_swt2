import { TypeOrmModule } from "@nestjs/typeorm";

export const globalSetup = async () => {
  return TypeOrmModule.forRoot({
    type: "sqlite",
    database: ":memory:", // Use an in-memory database
    entities: ["src/entity/**/*.{ts,js}"], // Specify the directory containing your entities
    synchronize: true, // Set to true for tests (avoids manual schema changes)
  });
};
