import { IsEmail, IsNotEmpty, MinLength } from "class-validator";



export class CreateUserDto {
    @IsNotEmpty()
    @MinLength(10)
    password : string;

    @IsNotEmpty()
    @IsEmail()
    email : string;
}