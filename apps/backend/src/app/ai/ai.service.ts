import OpenAI from "openai";
import { Injectable } from "@nestjs/common";
import { CompletionsDto } from "./dtos/completions.dto";

@Injectable()
export class AiService {
  openai = new OpenAI();

  async askChat(completions: CompletionsDto) {
    const completion = await this.openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: "You are a helpful programmer." },
        {
          role: "user",
          content: completions.message,
        },
      ],
    });

    return {
      output: {
        userPrompt: completions.message,
        response: completion
      },
    };
  }
}