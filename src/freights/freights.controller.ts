import { Body, Param, Controller, Post, Get, Delete, Put } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateFreightDto } from './dto/create-freights.dto';
import { UpdateFreightDto } from './dto/update-freights.dto';
import { FreightsService } from './freights.service';
import { Freight } from './freights.model';

@ApiTags('Freights')
@Controller('freights')
export class FreightsController {
  constructor(private freightsService: FreightsService) {}
  @ApiOperation({ summary: 'Create freight' })
  @ApiResponse({ status: 200, type: Freight })
  @Post()
  create(@Body() freightDto: CreateFreightDto) {
    return this.freightsService.createFreight(freightDto);
  }

  @ApiOperation({ summary: 'Get all freights' })
  @ApiResponse({ status: 200, type: [Freight] })
  @Get()
  getAll() {
    return this.freightsService.getAllFreights();
  }

  @ApiOperation({ summary: 'Remove freight' })
  @ApiResponse({ status: 200, type: [Freight] })
  @Delete('/:id')
  delete(@Param('id') freightId: string) {
    return this.freightsService.deleteFreight(freightId);
  }
  @ApiOperation({ summary: 'Update freight' })
  @ApiResponse({ status: 200, type: Freight })
  @Put('/:id')
  update(@Param('id') freightId: string, @Body() freight: UpdateFreightDto) {
    return this.freightsService.updateFreight(freightId, freight);
  }

}
