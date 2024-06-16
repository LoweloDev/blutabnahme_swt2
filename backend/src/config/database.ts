import { DataSource, DataSourceOptions } from "typeorm";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";
import { Injectable } from "@nestjs/common";
import { typeOrmTestConfig } from "./typeorm/typeorm.config";

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  public static dataSource: DataSource;
  public static connection: DataSource;

  async createTypeOrmOptions(): Promise<TypeOrmModuleOptions> {
    TypeOrmConfigService.dataSource = new DataSource(
      <DataSourceOptions>typeOrmTestConfig,
    );

    TypeOrmConfigService.connection =
      await TypeOrmConfigService.dataSource.initialize();

    return TypeOrmConfigService.connection.options;
  }
}
