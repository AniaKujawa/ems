import { IsString, IsPositive, IsNumber } from 'class-validator';

export class CreateReviewDto {
  @IsString()
  content: string;

  @IsNumber()
  @IsPositive()
  rank: number;
}