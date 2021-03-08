import {Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";

@Entity()
export class Rental {

@PrimaryGeneratedColumn()
id: number;
@Column()
video: string;
@Column()
dueDate: Date;
@Column()
user: string
@Column("decimal")
value: number
@CreateDateColumn()
createdAt: Date;
@UpdateDateColumn()
updatedAt: Date;

}