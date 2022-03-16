import { Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('drugstore')
export class Drugstore {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    drugstoreName: string;

    @Column()
    state: string;

    @Column()
    drugstorePhone: number;

    @Column()
    category: string;
    
    @Column()
    drugstoreAddress: string;
    
    @Column()
    cin: number;
    
    // @Column()
    // dob!: Date;
    
    @Column()
    firstName: string;
    
    @Column()
    lastName: string;
    
    @Column()
    pharmacistPhone: number;
    
    @Column()
    email: string;
    
    @Column()
    fax: number;
}