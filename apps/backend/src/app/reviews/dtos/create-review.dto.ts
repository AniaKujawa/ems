import { IsString, IsPositive, IsNumber } from 'class-validator';
import { ApiProperty } from "@nestjs/swagger";

export class CreateReviewDto {
  @ApiProperty()
  @IsString()
  content: string;

  @ApiProperty()
  @IsNumber()
  @IsPositive()
  rank: number;
}