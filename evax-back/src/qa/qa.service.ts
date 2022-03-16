import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { QA } from './entity/qa.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class QaService {

    constructor(
        @InjectRepository(QA) private readonly qaRepository: Repository<QA>,
    ){}

    async fetchAll() {
        return this.qaRepository.find();
    }

    async firstDose() {
        return this.qaRepository.find({where: {category: "FirstDose"}});
    }

    async secondDose() {
        return this.qaRepository.find({where: {category: "SecondDose"}});
    }

    async travellers() {
        return this.qaRepository.find({where: {category: "Travellers"}});
    }

}
