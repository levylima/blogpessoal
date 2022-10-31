

import { Body, Controller, Get, HttpCode, HttpStatus, Post, Put, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger/dist/decorators";
import { ApiProperty } from "@nestjs/swagger/dist/decorators/api-property.decorator";
import { JwtAuthGuard } from "src/auth/guard/jwt-auth.guard";
import { Usuario } from "../entities/usuario.entity";
import { UsuarioService } from "../services/usuario.service";

@ApiTags('Usuário')
@Controller('/usuarios')
@ApiBearerAuth()
export class UsuarioController {

    constructor(private readonly usuarioService: UsuarioService) { }

    @UseGuards(JwtAuthGuard)
    @Get('/all')
    @ApiProperty()
    @HttpCode(HttpStatus.OK)
    findAll (): Promise<Usuario[]> {
        return this.usuarioService.findAll();
    }

    @HttpCode(HttpStatus.CREATED)
    @Post('/cadastrar')
    @HttpCode(HttpStatus.CREATED)
    async create (@Body() usuario: Usuario): Promise<Usuario> {

    return await this.usuarioService.create(usuario)
    }

    @UseGuards(JwtAuthGuard)
    @Put('/atualizar')
    @ApiProperty()
    @HttpCode(HttpStatus.OK)
    async update (@Body() usuario: Usuario): Promise<Usuario> {

        return await this.usuarioService.update(usuario);
    }

}