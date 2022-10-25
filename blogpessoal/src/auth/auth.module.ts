import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt/dist";
import { PassportModule } from "@nestjs/passport";
import { UsuarioModule } from "src/usuario/usuario.module";
import { Bcrypt } from "./bcrypt/bcrypt";
import { jwtConstants } from "./constants/contants";
import { AuthController } from "./controllers/auth.controller";
import { AuthService } from "./services/auth.service";
import { LocalStrategy } from "./strategy/local.strategy";
import { JwtStrategy } from "./strategy/strategy";


@Module ({
    imports: [
        UsuarioModule,
        PassportModule,
        JwtModule.register({
            secret: jwtConstants.secret,
            signOptions: { expiresIn: '24h'},
        }),
    ],
    providers: [Bcrypt, AuthService, LocalStrategy, JwtStrategy],
    controllers: [AuthController],
    exports: [Bcrypt]
})

export class AuthModule {}