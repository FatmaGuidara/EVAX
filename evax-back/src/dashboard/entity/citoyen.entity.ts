import { Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import { Transform } from 'class-transformer';

@Entity('citoyen')
export class CitoyenEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true})
    name: string;

    @Column()
    email: string;

    @Column()
    address: string;

    @Column()
    convoque: boolean;

    @Column()
    dateInscri: Date;
}