import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm"
import * as bcrypt from 'bcrypt';
@Entity()
export class FacilitatorsModel{
 @PrimaryGeneratedColumn()
Facid:string
@Column()
firstName:string
@Column()
lastName:string
@Column()
course:string 
@Column({unique:true})
email:string
@Column()
password:string

    
// constructor(FacId:string,firstName:string,lastName:string,course:string,email:string){
//     this.Facid = FacId
//     this.firstName = firstName
//     this.lastName = lastName
//     this.course = course
//      this.email = email
// }

@BeforeInsert()
async hashPassword(){
  this.password = await bcrypt.hash(this.password,5)
}
}