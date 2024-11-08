import { Body, Controller, Post } from "@nestjs/common";
import { ApiBody, ApiTags } from "@nestjs/swagger";

import { AiService } from "./ai.service";
import { CompletionsDto } from './dtos/completions.dto';

// @ApiTags('offers')
@Controller('ai')
export class AiController {
  constructor(private readonly aiService: AiService) {}

  // @ApiBody({ type: [Type]}) -> to show response in swagger
  @Post('completions')
  askChat(@Body() completionsDto: CompletionsDto) {
    return this.aiService.askChat(completionsDto);
  }
}