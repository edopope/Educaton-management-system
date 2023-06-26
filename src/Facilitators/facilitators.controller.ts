import { Body, Controller, Post } from "@nestjs/common";
import { FacilitatorsService } from "./facilitators.service";
import { CreateFacilitatorAccount } from "src/student/dto/request/CreateFacilitatorAccount";

@Controller("teacher")
export class FacilitatorsControllers{
    constructor(private readonly teacherService: FacilitatorsService) {}
    @Post("create")
createFacilitator(@Body() createFacilitator:CreateFacilitatorAccount){
this.teacherService.createFacilitatorAccounts(createFacilitator)
return "facilitator created successfully!!"
}

async deleteAFaci(id:string){
     await this.teacherService.deleteFacilitator(id)
     return "deleted successfully!!"
}
async findAllFaci(){
    return await this.teacherService.getAllFacilitator()
}

async findASingleFac(id:string){
return await this.teacherService.getASingleFacilitator(id);
}
}