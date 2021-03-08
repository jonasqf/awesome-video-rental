import {Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";
import { Video } from "./video";

@Entity()
export class Rental {

@PrimaryGeneratedColumn()
id: number;

@OneToOne(()=>Video)
@JoinColumn()
public video: Video;

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