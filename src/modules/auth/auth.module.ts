import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthService } from './services/auth/auth.service';
import { AuthController } from './controllers/auth/auth.controller';

@Module({
    imports:[],
    providers:[
        {
            provide:"AUTH_SERVICE",
            useClass:AuthService
            
        }
    ],
    controllers:[AuthController]
})
export class AuthModule {}
