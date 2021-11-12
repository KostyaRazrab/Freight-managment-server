import { Module } from '@nestjs/common';
import { FreightsController } from './freights.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { FreightsService } from './freights.service';
import { Freight, FreightSchema } from './freights.model';

@Module({
  imports: [MongooseModule.forFeature([{ name: Freight.name, schema: FreightSchema }])],
  controllers: [FreightsController],
  providers: [FreightsService]
})
export class FreightsModule {}
