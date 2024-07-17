import { DataSource, DataSourceOptions } from "typeorm";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";
import { Injectable } from "@nestjs/common";
import { DbConfig } from "./typeorm.config";

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  public static dataSource: DataSource;
  public static connection: DataSource;
  public static dbConfigOverride: DbConfig = DbConfig.LOCAL;

  async createTypeOrmOptions(): Promise<TypeOrmModuleOptions> {
    TypeOrmConfigService.dataSource = new DataSource(
      <DataSourceOptions>(<unknown>TypeOrmConfigService.dbConfigOverride),
    );

    TypeOrmConfigService.connection =
      await TypeOrmConfigService.dataSource.initialize();

    return TypeOrmConfigService.connection.options;
  }
}
