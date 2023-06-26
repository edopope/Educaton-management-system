import { BeforeInsert } from "typeorm"
import * as bcrypt from "bcrypt"
export class CreateStudentRequest{
    firstName:string
    lastName:string
    studentClass:string
    dateOfBirth:string
     studentEmail:string
     password:string
    constructor(firstName:string,lastName:string,studentClass:string,dateOfBirth:string,emails:string,password:string){
        this.firstName =firstName
        this.lastName =lastName
        this.studentClass =studentClass
        this.dateOfBirth =dateOfBirth
        this.studentEmail = emails
        this.password = password
    }
    @BeforeInsert()
    async hashPassword(){
      const hash = this.password = await bcrypt.hash(this.password)
      return hash;
    }
}