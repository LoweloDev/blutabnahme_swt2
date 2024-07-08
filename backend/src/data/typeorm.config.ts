import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export class DbConfig {
  public static DOCKER: TypeOrmModuleOptions = {
    type: "postgres",
    host: "postgres",
    port: 5432,
  };

  public static LOCAL: TypeOrmModuleOptions = {
    type: "sqlite",
    database: "./src/data/inspiring_newton",
    dropSchema: true,
    migrations: [__dirname + "/../../migrations/sqlite/*.{ts,js}"],
    entities: [__dirname + "/../../**/*.entity.{ts,js}"],
    subscribers: [],
    synchronize: true,
    logging: true,
  };

  public static MEMORY: TypeOrmModuleOptions = {
    type: "sqlite",
    database: ":memory:",
    dropSchema: true,
    migrations: [__dirname + "/../../migrations/sqlite/*.{ts,js}"],
    entities: [__dirname + "/../../**/*.entity.{ts,js}"],
    subscribers: [],
    synchronize: true,
    logging: true,
  };
}
