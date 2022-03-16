import { Column, Double, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('cities')
export class CityEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true})
    gouvernourat: string;

    @Column('double',{nullable:true})
    inscrits: Double;

    @Column('double',{nullable:true})
    convoques: Double;

    @Column('double',{nullable:true})
    uneDose: Double;

    @Column('double',{nullable:true})
    completed: Double;
}