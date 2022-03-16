import { Body, Controller, Post } from '@nestjs/common';
import { DrugstoreService } from './drugstore.service';
import { Drugstore } from './entity/drugstore.entity';

@Controller('drugstore')
export class DrugstoreController {
    constructor(private readonly drugstoreService: DrugstoreService){}

    @Post()
    addTodo(@Body() drugstore: Drugstore): Promise<Drugstore>{
        return this.drugstoreService.createDrugstore(drugstore);
    }
}
