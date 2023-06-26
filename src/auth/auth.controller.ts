import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from 'src/student/dto/request/loginDto';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
    @Post("create")
    async studentLogin(@Body() login:LoginDto){
return await this.authService.login(login)
    }
@UseGuards(JwtAuthGuard)
    @Get("login")
    test(){
      return"login succcesful ";
    }
  }

