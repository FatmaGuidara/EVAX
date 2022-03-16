import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import "reflect-metadata";
import { QaModule } from './qa/qa.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QA } from './qa/entity/qa.entity';
import { CityEntity } from './dashboard/entity/cities.entity';
import { CitoyenEntity } from './dashboard/entity/citoyen.entity';
import { DrugstoreController } from './drugstore/drugstore.controller';
import { DrugstoreService } from './drugstore/drugstore.service';
import { Drugstore } from './drugstore/entity/drugstore.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'evax',
      entities: ["dist/**/*.entity{.ts,.js}"],
      synchronize: true,
      keepConnectionAlive: true,
    }),
    TypeOrmModule.forFeature([QA, CityEntity, CitoyenEntity, Drugstore]),
    QaModule, DashboardModule],
  controllers: [AppController, DrugstoreController],
  providers: [AppService, DrugstoreService],
})
export class AppModule {}
