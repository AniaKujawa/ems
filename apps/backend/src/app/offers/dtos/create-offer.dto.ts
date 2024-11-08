import { IsString, IsPositive, IsNumber } from 'class-validator';
import { ApiProperty } from "@nestjs/swagger";

export class CreateOfferDto {
  @ApiProperty()
  @IsString()
  role: string;

  @ApiProperty()
  @IsString()
  description: string;

  @ApiProperty()
  @IsNumber()
  @IsPositive()
  salary: number;
}