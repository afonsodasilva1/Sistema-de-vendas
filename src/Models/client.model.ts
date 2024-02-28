import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Client {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({name: 'name', unique: true})
    name: string
}
