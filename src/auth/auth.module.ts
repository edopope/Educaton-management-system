import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { StudentModule } from 'src/student/student.module';
import { FacilitatorsModule } from 'src/Facilitators/facilitators.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import {ConfigModule, ConfigService} from '@nestjs/config';
import { GenerateJwtSecret } from './generateKey';
import { JwtStrategy } from './jwt.strategy';
import { StudentService } from 'src/student/student.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from 'src/student/student.model';
import { FacilitatorsService } from 'src/Facilitators/facilitators.service';

@Module({
  imports:[FacilitatorsModule,PassportModule,
    JwtModule.registerAsync({
      imports:[ConfigModule],
      useFactory:async () => ({
        secret:GenerateJwtSecret()
      }),
      inject:[ConfigService]
    }),
    TypeOrmModule.forFeature([Student])
],
  controllers: [AuthController],
  providers: [AuthService,JwtStrategy,StudentService]
})
export class AuthModule {}
