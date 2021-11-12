import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

export type FreightDocument = Freight & Document;

@Schema()
export class Freight {
  @ApiProperty({ example: 1, description: 'Уникальный номер' })
  @Prop({ unique: true, required: true })
  number: number;

  @ApiProperty({
    example: 1636560030637,
    description: 'Дата и время получения заявки от клиента',
  })
  @Prop({ required: true })
  receiptDate: Date;

  @ApiProperty({
    example: 'Иванов Иван Иванович',
    description: 'ФИО перевозчика',
  })
  @Prop({ required: true })
  carrierFullname: string;

  @ApiProperty({ example: 'ООО Ромашка', description: 'Фирма клиента' })
  @Prop({ required: true })
  clientFirm: string;

  @ApiProperty({
    example: '89827586646',
    description: 'Контактный телефон перевозчика',
  })
  @Prop({ required: true })
  carrierPhoneNumber: string;

  @ApiProperty({ example: 'Все ок', description: 'Комментарий' })
  @Prop()
  comment: string;

  @ApiProperty({
    example: '123',
    description: 'ATI код сети перевозчика',
  })

  @Prop({ required: true })
  ATICode: string;
}

export const FreightSchema = SchemaFactory.createForClass(Freight);
