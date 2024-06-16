import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typeOrmTestConfig: TypeOrmModuleOptions = {
  type: "sqlite",
  database: ":memory:",
  dropSchema: true,
  //entities: [__dirname + '/../entity/**.entity{.ts,.js}'],
  //entities: [Ressource],
  migrations: [__dirname + "/../../migrations/sqlite/*.{ts,js}"],
  entities: [__dirname + "/../../**/*.entity.{ts,js}"],
  subscribers: [],
  synchronize: true,
  logging: true,
  //migrations: ['src/migration/*{.ts,.js}'],
};
