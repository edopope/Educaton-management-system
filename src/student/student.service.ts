import { Injectable, NotFoundException, Param, Post } from '@nestjs/common';
import { CreateStudentRequest } from './dto/request/createStudentRequest';
import { Student } from './student.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateStudents } from './dto/request/updateStudents';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student) private studentRepository: Repository<Student>,
  ) {}

  async createStudent(createStudent: CreateStudentRequest) {
    let stu = new Student();
    let assigned = Object.assign(stu,createStudent)
    return await this.studentRepository.save(assigned);
  }

  async getAllStudent() {
    const found = await this.studentRepository.find();
    return found;
  }

  async deleteStudent(id: string) {
    return await this.studentRepository.delete(id);
  }
  async getAStudent(id: string): Promise<Student> {
    const foundIt = await this.studentRepository.findOneBy({
            studentId:id 
    });
    return foundIt;
  }

  async updateStudentInfo(id: string, updateStudent: UpdateStudents) {
    const students = await this.studentRepository.findOneBy({
      studentId:id
    });

    if (students == null) {
      throw new NotFoundException('could not find student!!');
    }

    const updatedUser = { ...students, ...updateStudent };
    await this.studentRepository.save(updatedUser);

    return updatedUser;
  }
  async findStudentByEmail(email:string){
const findStudent = await this.studentRepository.findOneBy({
  studentEmail:email
})
if(!findStudent){
  throw new NotFoundException("email does not exist!!")
}
  }

}
