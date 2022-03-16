import { Injectable } from '@nestjs/common';
import { Drugstore } from './entity/drugstore.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class DrugstoreService {
    constructor(
        @InjectRepository(Drugstore) private readonly drugstoreRepository: Repository<Drugstore>,
    ){}

    async createDrugstore(drugstore: Drugstore): Promise<Drugstore> {
        return await this.drugstoreRepository.save(drugstore);
    }
}

