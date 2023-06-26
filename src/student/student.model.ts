import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  studentId: string;
  @Column()
  firstName: string;
  @Column()
  lastName: string;
  @Column()
  studentClass: string;
  @Column()
  dateOfBirth: string;
  @Column({
    default:""
  })
  studentEmail:string;

  @Column()
  password:string
    static id: any;

  // constructor(
  //   studentId: string,
  //   firstName: string,
  //   lastName: string,
  //   studentClass: string,
  //   dateOfBirth: string,
  //   password:string,
  //   StudentEmail:string
  // ) {
  //   this.studentId = studentId;
  //   this.firstName = firstName;
  //   this.lastName = lastName;
  //   this.studentClass = studentClass;
  //   this.dateOfBirth = dateOfBirth;
  //   this.password = password;
  //   this.StudentEmail = StudentEmail
  // }

  @BeforeInsert()
  async hashPassword(){
    this.password = await bcrypt.hash(this.password,5)
  }

//   async validatePassword(password:string):Promise<boolean>{
// return bcrypt.compare(password, this.password)
//   }
}
