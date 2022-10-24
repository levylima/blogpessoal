import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PostagemController } from "src/postagem/controllers/postagem.controller";
import { PostagemService } from "src/postagem/services/postagem.service";
import { Tema } from "./entities/tema.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Tema])],
    providers: [],
    controllers: [],
    exports: [TypeOrmModule]
})
export class TemaModule {}
