import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { FacilitatorsService } from 'src/Facilitators/facilitators.service';
import { LoginDto } from 'src/student/dto/request/loginDto';
import { Student } from 'src/student/student.model';
import { StudentService } from 'src/student/student.service';

@Injectable()
export class AuthService {
    constructor(
        private studentService:StudentService,
        private jwtService:JwtService,
        // private facilitator:FacilitatorsService
    ){}
    async login(loginDto:LoginDto){
        const studentUser = await this.validateUser(loginDto)
// const facilitator1 = await this.validateUser(loginDto)
        const payload = {
            userId:studentUser.id
        }
        // const payload1 = {
        //     teacherId:facilitator1.id
        // }
        return {
            accessToken:this.jwtService.sign(payload)
        }
    }


  


async validateUser(login:LoginDto){
    const {email,password} = login
    const student = await this.studentService.findStudentByEmail(email)
    // const facilitator = await this.facilitator.findFacilitatorByEmail(email)

// if(!(await student?.validatePassword(password))){
//     throw new UnauthorizedException("you are not authorised for this action!!");
// }


return Student

}

    
}

