import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Tema } from "src/tema/entities/tema.entity";
import { Usuario } from "src/usuario/entities/usuario.entity";


@Entity({name: 'tb_postagens'})
export class Postagem {

    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @IsNotEmpty()
    @Column({length: 100, nullable: false})
    titulo: string;

    @ApiProperty()
    @IsNotEmpty()
    @Column({length: 1000, nullable: false})
    text: string;

    @ApiProperty()
    @UpdateDateColumn()
    data: Date;

    @ApiProperty({ type: () => Tema})
    @ManyToOne(() => Tema, (tema) => tema.postagem, {
        onDelete: "CASCADE"
    })
    tema: Tema;

    @ApiProperty({ type: () => Usuario})
    @ManyToOne(() => Usuario, (Usuario) => Usuario.postagem, {
        onDelete: "CASCADE"
    })
    usuario: Usuario;
    
}