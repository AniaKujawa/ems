import { Body, Controller, Post } from "@nestjs/common";
import { ApiBody, ApiTags } from "@nestjs/swagger";

import { AiService } from "./ai.service";
import { CompletionsDto } from './dtos/completions.dto';
import { AssistantDto } from "./dtos/assistant.dto";

// @ApiTags('offers')
@Controller('ai')
export class AiController {
  constructor(private readonly aiService: AiService) {}

  // @ApiBody({ type: [Type]}) -> to show response in swagger
  @Post('completions')
  askChat(@Body() completionsDto: CompletionsDto) {
    return this.aiService.askChat(completionsDto);
  }

  @Post('assistant')
  askAssistant(@Body() assistantDto: AssistantDto) {
    return this.aiService.askAssistant(assistantDto);
  }
}