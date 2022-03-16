import { Controller, Get } from '@nestjs/common';
import { DashboardService } from './dashboard.service';

@Controller('dashboard')
export class DashboardController {

    constructor(private readonly dashService: DashboardService){}

    @Get('inscrit')
    async fetchInscrit() {
        return this.dashService.fetchInscrit();
    }

    @Get('nonConvoque')
    async fetchNonConvoque() {
        return this.dashService.fetchNonConvoque();
    }

    @Get('inscritToday')
    async fetchInscritToday() {
        return this.dashService.fetchInscritToday();
    }

    @Get('cities')
    async fetchCities() {
        return this.dashService.fetchCities();
    }
}
