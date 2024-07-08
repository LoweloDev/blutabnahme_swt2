import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export class DbConfig {
  public static DOCKER: TypeOrmModuleOptions = {
    type: "sqlite",
    database: "inspiring_newton",
    dropSchema: true,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    host: "localhost",
    username: "sqlite",
    password: "sqlite",
    port: parseInt("5431", 10),
  };

  public static LOCAL: TypeOrmModuleOptions = {
    type: "sqlite",
    database: "insipring_newton",
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
    //entities: [__dirname + '/../entity/**.entity{.ts,.js}'],
    //entities: [Ressource],
    migrations: [__dirname + "/../../migrations/sqlite/*.{ts,js}"],
    entities: [__dirname + "/../../**/*.entity.{ts,js}"],
    subscribers: [],
    synchronize: true,
    logging: true,
    //migrations: ['src/migration/*{.ts,.js}'],
  };
}
