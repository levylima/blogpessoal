

import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put, UseGuards } from "@nestjs/common";
import { DeleteResult } from "typeorm";
import { JwtAuthGuard} from "../../auth/guard/jwt-auth.guard"
import { Tema } from "../entities/tema.entity";
import { TemaService } from "../services/tema.service";

@UseGuards(JwtAuthGuard)
@Controller("/tema")
export class TemaController {
    constructor( private readonly temaService: TemaService) { }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    async create(@Body() tema: Tema): Promise<Tema> {
        return this.temaService.create(tema)
    }

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Tema[]> {
        return this.temaService.findAll()
    }

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id: number): Promise<Tema> {
        return this.temaService.findById(id);
    }

    @Get('/descricao/:descricao')
    @HttpCode(HttpStatus.OK)
    findByDescricao(@Param('descricao') descricao: string): Promise<Tema[]> {
        return this.temaService.findByDescricao(descricao);
    }

    @Put()
    @HttpCode(HttpStatus.OK)
    callUpdate(@Body() theme: Tema): Promise<Tema> {
        return this.temaService.update(theme);
    }

    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    callDelete(@Param('id', ParseIntPipe) id: number): Promise<DeleteResult> {
        return this.temaService.delete(id);
    }
}