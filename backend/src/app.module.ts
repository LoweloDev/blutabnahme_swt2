import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LaborauftragModule } from './laborauftrag/laborauftrag.module';
import { BlutabnahmeModule } from './blutabnahme/blutabnahme.module';
import { ProbeModule } from './probe/probe.module';
import { MitarbeiterModule } from './mitarbeiter/mitarbeiter.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    LaborauftragModule,
    BlutabnahmeModule,
    ProbeModule,
    MitarbeiterModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
