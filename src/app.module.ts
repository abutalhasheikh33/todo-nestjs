import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './modules/user/user.module';
import entities from './modules/user/entities';
import { UserController } from './modules/user/controllers/user/user.controller';
@Module({
  imports: [UserModule,ConfigModule.forRoot({
    isGlobal: true, 
    envFilePath: `.env.development.local`, // Selects the environment file based on NODE_ENV
  }),UserModule,TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: process.env.db_username,
    password: process.env.db_password,
    database: 'tutorial_db',
    entities: entities,
    synchronize:true
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
