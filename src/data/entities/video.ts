import {Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";

@Entity()
export class Video {
    @PrimaryGeneratedColumn()
    public id: number;
    @Column()
    public title: string;
    @Column()
    public description: string;
    @Column()
    public writer: string;
    @Column("decimal")
    public imdbScore: number;
    @Column()
    public year: number;
    @CreateDateColumn()
    public createdAt: Date;
    @UpdateDateColumn()
    public updatedAt: Date;
}