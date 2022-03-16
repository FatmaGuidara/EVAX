import { Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('qa')
export class QA {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true})
    name: string;

    @Column()
    category: string;

    @Column()
    imageLink: string;
}