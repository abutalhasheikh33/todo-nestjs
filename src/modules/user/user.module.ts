import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { UserService } from './services/user/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UserController } from './controllers/user/user.controller';
import { EncryptPasswordMiddleware } from './middlewares/EncryptPassword.middleware';

@Module({
  imports:[TypeOrmModule.forFeature([User])],
  providers: [{
    provide: 'USER_SERVICE',
    useClass:UserService
  }],
  controllers:[UserController],
  
})
export class UserModule {
  configure(consumer : MiddlewareConsumer){
    consumer.apply(EncryptPasswordMiddleware)
            .forRoutes({path : 'users/create', method : RequestMethod.POST},
                      {path:'users/update', method : RequestMethod.PATCH}
          )
  }
}
