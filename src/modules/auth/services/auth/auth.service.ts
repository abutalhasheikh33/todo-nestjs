import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import signToken from '../../utils/signToken';


@Injectable()
export class AuthService {
    
    constructor (private jwtService : JwtService){}

    login(payload : {sub : string , email : string }){
        const accessToken = signToken(this.jwtService,payload,'ACCESS_TOKEN');
        const refreshToken = signToken(this.jwtService,payload,'REFRESH_TOKEN');
        return {accessToken,refreshToken};

    }

    
}
