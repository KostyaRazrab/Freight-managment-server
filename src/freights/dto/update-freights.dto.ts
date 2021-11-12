import { ApiProperty } from '@nestjs/swagger';

export class UpdateFreightDto {
  @ApiProperty({
    example: 1636560030637,
    description: 'Дата и время получения заявки от клиента',
  })
  readonly receiptDate: Date;

  @ApiProperty({
    example: 'Иванов Иван Иванович',
    description: 'ФИО перевозчика',
  })
  readonly carrierFullname: string;

  @ApiProperty({ example: 'ООО Ромашка', description: 'Фирма клиента' })
  readonly clientFirm: string;

  @ApiProperty({
    example: '89827586646',
    description: 'Контактный телефон перевозчика',
  })
  readonly carrierPhoneNumber: string;
  @ApiProperty({
    example: '123',
    description: 'ATI код сети перевозчика',
  })
  readonly ATICode: string;
  @ApiProperty({
    example: 'комментарий',
    description: 'Комментарий',
  })
  readonly comment: string;
}
