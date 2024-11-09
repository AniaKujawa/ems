import { IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class AssistantDto {
  @ApiProperty()
  @IsString()
  message: string;
}