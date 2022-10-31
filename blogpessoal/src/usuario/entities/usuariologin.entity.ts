import { ApiProperty } from "@nestjs/swagger/dist/decorators/api-property.decorator";


export class UsuarioLogin {

    @ApiProperty()
    public usuario: string;

    @ApiProperty()
    public senha: string;
}