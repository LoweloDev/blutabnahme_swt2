// import { Test, TestingModule } from "@nestjs/testing";
// import { TypeOrmModule } from "@nestjs/typeorm";
// import { getConnection } from "typeorm";
// import { AppModule } from "../src/app.module";
// import { typeOrmTestConfig } from "../src/config/typeorm.config";
//
// global.beforeAll(async () => {
//   const module: TestingModule = await Test.createTestingModule({
//     imports: [TypeOrmModule.forRoot(typeOrmTestConfig), AppModule],
//   }).compile();
//
//   const app = module.createNestApplication();
//   await app.init();
// });
//
// global.afterAll(async () => {
//   const connection = getConnection();
//   await connection.close();
// });
