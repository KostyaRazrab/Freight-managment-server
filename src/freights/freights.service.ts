import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Freight, FreightDocument } from './freights.model';
import { CreateFreightDto } from './dto/create-freights.dto';
import {UpdateFreightDto} from './dto/update-freights.dto'

@Injectable()
export class FreightsService {
  constructor(
    @InjectModel(Freight.name) private freightModel: Model<FreightDocument>,
  ) {}

  async createFreight(dto: CreateFreightDto) {
    const freight = await this.freightModel.create(dto);
    return freight;
  }

  async getAllFreights() {
    const freights = await this.freightModel.find();
    return freights;
  }

  async deleteFreight(id: string) {
    const freights = await this.freightModel.findByIdAndDelete(id);
    return freights;
  }

  async updateFreight(id: string, dto: UpdateFreightDto) {
    const updatedFreight = await this.freightModel.findByIdAndUpdate(id, dto);
    return updatedFreight;
  }
}
