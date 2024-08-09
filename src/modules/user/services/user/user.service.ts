import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User as UserEntity } from '../../entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../../dtos/createUser.dto';
import { UpdateUserDto } from '../../dtos/UpdateUserDto.dto';

@Injectable()
export class UserService {
    constructor(@InjectRepository(UserEntity) private readonly userRepository : Repository<UserEntity>){}

    async createUser (user : CreateUserDto) {
        return await this.userRepository.save(user);
    }

    async updateUser (id : string,user : UpdateUserDto){
        return await this.userRepository.update(id,user);
    }

    async findAll() {
        return await  this.userRepository.find();
    }

    async findOne(id : string) {
        console.log(id)
        return await this.userRepository.findOne({
            where :{
                _id:id
            }
        });
    }

    async delete(id : string) {
        return await this.userRepository.delete(id)
    }
}
