import { Module } from '@nestjs/common';
import { QaController } from './qa.controller';
import { QaService } from './qa.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { QA } from './entity/qa.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([QA]),
  ],
  controllers: [QaController],
  providers: [QaService]
})
export class QaModule {}
