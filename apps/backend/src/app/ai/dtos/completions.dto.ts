import { IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CompletionsDto {
  @ApiProperty()
  @IsString()
  message: string;
}