import { BaseEntity, Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";



@Entity()
export class User extends BaseEntity {

    @PrimaryGeneratedColumn('uuid')
    _id : string

    @Column({
        nullable:false,
        unique:true
    })
    email : string

    @Column({
        nullable:false
    })
    password : string

}