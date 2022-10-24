import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { throwIfEmpty } from "rxjs";
import { Postagem } from "src/postagem/entities/postagem.entity";
import { DeleteResult, FindRelationsNotFoundError, ILike, Repository } from "typeorm";
import { Tema } from "../entities/tema.entity";


@Injectable()
export class TemaService {
    temaRepository: any;

    constructor (
        @InjectRepository(Tema)
        private temaReposity: Repository<Tema>
    ) { }

    async create (tema: Tema): Promise<Tema> {

        return await this.temaRepository.save(tema);

    }

    async findAll(): Promise<Tema[]> {
        return await this.temaRepository.find({
            relations: {
                postagem: true
            }
        });
    }

    async findById(id: string): Promise<Tema> {

        let tema = await this.temaRepository.findOne ({
            where: {
                id
            },
            relations: {
                postagem: true
            }
        });

        if (!tema) {

            throw new HttpException ('Tema não encontrada!', HttpStatus.NOT_FOUND);
        }

        return tema;
    }

    async findByDescricao(descricao: string): Promise <Tema[]> {
        
        let tema = await this.temaRepository.find({
            where: {

                descricao: ILike(`%${descricao}`)
            },

            relations: {
                postagem: true
            }
        });

        return tema;
    }

    async update (tema: Tema): Promise<Tema> {

        let temaEncontrado = await this.findById(tema: id);

        if (!temaEncontrado || !tema.id) {
            throw new HttpException('O tema não foi encontrado!', HttpStatus.NOT_FOUND);
        }

        return await this.temaRepository.save(tema);
    }

    async delete (id: string): Promise <DeleteResult> {

        let temaEncontrado = await this.findById(id);

        if (!temaEncontrado) {

            throw new HttpException('Tema não encontrado!', HttpStatus.NOT_FOUND);

        }

        return this.temaRepository.delete(id);
    }
}