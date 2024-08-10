import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User as UserEntity } from '../../entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../../dtos/createUser.dto';
import { UpdateUserDto } from '../../dtos/UpdateUserDto.dto';

@Injectable()
export class UserService {
    constructor(@InjectRepository(UserEntity) private readonly userRepository : Repository<UserEntity>){}

    async createUser (user : CreateUserDto) {
        try {
            const alreadyExistsUser = await this.userRepository.findOne({
                where : {
                    email : user.email
                }
            });
            if(alreadyExistsUser){
                throw new ConflictException("Email already Exists")
            }
            await this.userRepository.save(user);
            
        } catch(error){
            console.log("inside createUserServiceError")
            throw error;
        }
        

    }

    async updateUser (id : string,user : UpdateUserDto){
        try{
            const userNotFound = this.userRepository.find({
                where:{
                    _id:id
                }
            })
            if(!userNotFound){
               throw new NotFoundException("User not found :- Invalid Id");
            }
            return await this.userRepository.update(id,user);
        }catch(error){
            console.log(error);
            throw error;
        }
        
    }

    async findAll() {
        try {
            return await  this.userRepository.find();
        }catch(error){
            console.log(error);
            throw error;
        }
       
    }

    async findOne(id : string) {
        
        try {
            
            const user =  await this.userRepository.findOne({
                where :{
                    _id:id
                }
            });
            if(!user){
                throw new NotFoundException("User not found :- Invalid Id");
            }
            return user;
        }catch(error) {
            console.log(error);
            throw error;
        }
       
    }

    async delete(id : string) {
        try {
            const user =  await this.userRepository.findOne({
                where :{
                    _id:id
                }
            });
            if(!user){
                throw new NotFoundException("User not found :- Invalid Id");
            }

            return await this.userRepository.delete(id);
        }catch(error) {
            console.log(error);
            throw error;
        }
       
    }
}
