import { Controller, Inject, Post,Body, Get, Param, Delete, Patch } from '@nestjs/common';
import { UserService } from '../../services/user/user.service';
import { CreateUserDto } from '../../dtos/createUser.dto';
import { UpdateUserDto } from '../../dtos/UpdateUserDto.dto';

@Controller('users')
export class UserController {
    constructor(@Inject('USER_SERVICE') private readonly userService : UserService) {}


    
    @Get('getAll')
    getAllUsers(){
        return this.userService.findAll()
    }

    @Post('create')
    createUser(@Body() createUserDto : CreateUserDto){
        return this.userService.createUser(createUserDto)
    }

    @Get('getSingleUser/:id')
    getSingleUser(@Param('id') id : string){
        return this.userService.findOne(id);
    }

    @Delete('deleteUser/:id')
    deleteUser(@Param('id') id : string){
        return this.userService.delete(id);
    }

    @Patch('updateUser/:id')
    updateUser(@Param('id') id:string, @Body() updateUserDto : UpdateUserDto){
        return this.userService.updateUser(id,updateUserDto);
    }


    


    
}
