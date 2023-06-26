import { Injectable, NotFoundException, Post } from '@nestjs/common';
import { FacilitatorsModel } from './facilitators.model';
import { InjectRepository } from '@nestjs/typeorm';
import { CommandStartedEvent, Repository } from 'typeorm';
import { CreateFacilitatorAccount } from 'src/student/dto/request/CreateFacilitatorAccount';
@Injectable()
export class FacilitatorsService {
  constructor(
    @InjectRepository(FacilitatorsModel)
    private facilitatoRepo: Repository<FacilitatorsModel>,
  ) {}

  createFacilitatorAccounts(createFacilitator: CreateFacilitatorAccount) {
    let facilitators = new FacilitatorsModel()
    let faciAssigned = Object.assign(facilitators,FacilitatorsModel)
    this.facilitatoRepo.save(createFacilitator);
  }

  async getAllFacilitator() {
    const foundFacilitator = await this.facilitatoRepo.find();
    return foundFacilitator;
  }
  async deleteFacilitator(facId: string) {
    await this.facilitatoRepo.delete(facId);
  }
  async getASingleFacilitator(id: string) {
    const foundFaci = await this.facilitatoRepo.findOneBy({
      Facid: id,
    });
    return foundFaci;
  }

  async findFacilitatorByEmail(emails:string){
    const foundFacilitator =  await this.facilitatoRepo.findOneBy({
      email:emails
    })
    return foundFacilitator
  }

  async updateFacilitator(
    id: string,
    updatedFacilitator: CreateFacilitatorAccount,
  ) {
    const faci = await this.facilitatoRepo.findOneBy({
      Facid: id,
    });

    if (faci == null) {
      throw new NotFoundException('could not find facilitator!!');
    }

    const updatedFaci = { ...faci, ...updatedFacilitator };
    await this.facilitatoRepo.save(updatedFaci);

    return updatedFaci;
  }
}
