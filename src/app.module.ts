import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student,} from './student/student.model';
import { StudentModule } from './student/student.module';
import { DataSource } from 'typeorm';
import { FacilitatorsModel } from './Facilitators/facilitators.model';
import { FacilitatorsModule } from './Facilitators/facilitators.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal:true
    }),
    TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'edopope',
    password: 'Ailenontor@360',
    database: 'teacher',
    entities: [Student,FacilitatorsModel],
    synchronize: true,
  
  }), StudentModule, FacilitatorsModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
constructor(private dataSource:DataSource){}
}
