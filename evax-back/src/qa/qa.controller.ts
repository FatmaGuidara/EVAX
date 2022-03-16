import { Controller, Get } from '@nestjs/common';
import { QaService } from './qa.service';

@Controller('qa')
export class QaController {

    constructor(private readonly qaService: QaService){}

    @Get('/all')
    public async fetchAll() {
        return this.qaService.fetchAll();
    }

    @Get("/FirstDose")
    public async firstDose() {
        return this.qaService.firstDose();
    }

    @Get("/SecondDose")
    public async secondDose() {
        return this.qaService.secondDose();
    }

    @Get("/travellers")
    public async travellers() {
        return this.qaService.travellers();
    }
}
