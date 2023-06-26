import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { FacilitatorsModel } from "./facilitators.model";
import { FacilitatorsService } from "./facilitators.service";
import { FacilitatorsControllers } from "./facilitators.controller";

@Module({
    imports: [TypeOrmModule.forFeature([FacilitatorsModel])],
    controllers: [FacilitatorsControllers],
    providers: [FacilitatorsService],
  })
  export class FacilitatorsModule {}