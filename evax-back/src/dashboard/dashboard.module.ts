import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DashboardController } from './dashboard.controller';
import { DashboardService } from './dashboard.service';
import { CityEntity } from './entity/cities.entity';
import { CitoyenEntity } from './entity/citoyen.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([CitoyenEntity, CityEntity]),
  ],
  controllers: [DashboardController],
  providers: [DashboardService]
})
export class DashboardModule {}
