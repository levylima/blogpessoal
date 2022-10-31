import { ApiProperty } from "@nestjs/swagger/dist";
import { IsEmail, IsNotEmpty, MinLength } from "class-validator";
import { Postagem } from "src/postagem/entities/postagem.entity";
import { Column, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";


@Entity({name: 'tb_usuarios'})
export class Usuario {

    @PrimaryGeneratedColumn()
    @ApiProperty()
    public id: number;

    @IsNotEmpty()
    @ApiProperty()
    @Column({length: 255, nullable: false})
    public nome: string;

    @IsEmail()
    @ApiProperty()
    @Column({length: 255, nullable: false})
    @ApiProperty({example: 'email@email.com.br'})
    public usuario: string;

    @IsNotEmpty()
    @MinLength(8)
    @ApiProperty()
    @Column({length: 255, nullable: false})
    public senha: string;

    @Column({length: 5000})
    @ApiProperty()
    public foto: string;

    @ApiProperty()
    @OneToMany(() => Postagem, (postagem) => postagem.usuario)
    postagem: Postagem[];

}