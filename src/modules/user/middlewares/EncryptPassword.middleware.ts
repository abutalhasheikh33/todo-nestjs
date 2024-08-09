import { NestMiddleware, NotFoundException } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";
import * as bcrypt from 'bcrypt'






export class EncryptPasswordMiddleware implements NestMiddleware {

    async use(req: Request, res: Response, next: NextFunction) {
        
        if(req.body.password){
           const saltRounds = 10;
           const hashedPassword = bcrypt.hashSync(req.body.password,saltRounds);
           req.body.password = hashedPassword;
           next();
        }else if(req.route?.path?.startsWith("/api/users/create")) {
            throw new NotFoundException('Password Not Found')
        }
       
        
    }
}