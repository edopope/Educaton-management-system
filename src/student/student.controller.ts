import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { StudentService } from './student.service';
import { CreateStudentRequest } from './dto/request/createStudentRequest';
import { UpdateStudents } from './dto/request/updateStudents';

@Controller("student")
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Post("create")
  async createAndSaveStudent(@Body() createAStudent: CreateStudentRequest) {
    this.studentService.createStudent(createAStudent);
    return 'student saved sucessfully!!';
  }

  @Get("getAllStudent")
 async getAllStudents(){
    return await this.studentService.getAllStudent()
  }

  @Get(":id")
  async getAStudent(@Param("id") id:string){
    return await this.studentService.getAStudent (id)
  }

  @Delete(":id")
  async deleteAStudent(@Param("id") id:string){
    return await this.studentService.deleteStudent(id)
  }
  @Patch(":id")
  async updateStudentInfo(@Param("id") id:string, @Body() createStudent:UpdateStudents){
    const updatedStudent =  await this.studentService.updateStudentInfo(id,createStudent)
  }

  
}
