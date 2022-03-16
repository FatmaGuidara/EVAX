import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CityEntity } from './entity/cities.entity';
import { CitoyenEntity } from './entity/citoyen.entity';

@Injectable()
export class DashboardService {

    constructor(
        @InjectRepository(CitoyenEntity) private readonly citoyenRepository: Repository<CitoyenEntity>,
        @InjectRepository(CityEntity) private readonly cityRepository: Repository<CityEntity>,
    ){}
    
    async fetchInscrit() {
        return this.citoyenRepository.count();
    }

    async fetchNonConvoque() {
        return this.citoyenRepository.count({where: {convoque: false}});
    }

    async fetchInscritToday() {
        const date_aujour = new Date("YYYY-MM-DD");
        return this.citoyenRepository.count({where: {dateInscri: date_aujour}});
    }

    async fetchCities() {
        return this.cityRepository.find();
    }
}
