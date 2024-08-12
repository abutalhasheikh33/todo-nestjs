import { JwtService } from "@nestjs/jwt";

const signToken = (jwtService : JwtService,payload :  {sub : string , email : string },TOKEN_TYPE : "REFRESH_TOKEN" | "ACCESS_TOKEN")=>{
    const expiresIn = TOKEN_TYPE === "ACCESS_TOKEN"? process.env.ACCESS_TOKEN_EXPIRY : process.env.REFRESH_TOKEN_EXPIRY;
    return jwtService.sign(payload,{
        secret:process.env.JWT_SECRET,
        expiresIn
    })
}

export default signToken;