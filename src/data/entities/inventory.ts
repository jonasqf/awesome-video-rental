import {Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";
import { Video } from "./video";

@Entity()
export class Inventory {
    @PrimaryGeneratedColumn()
    public id: number;

    @OneToOne(()=>Video)
    @JoinColumn()
    public video: Video;

    @Column()
    public quantity: number
    @CreateDateColumn()
    public createdAt: Date;
    @UpdateDateColumn()
    public updatedAt: Date;
}