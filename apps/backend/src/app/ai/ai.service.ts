import OpenAI from "openai";
import { Injectable } from "@nestjs/common";
import { CompletionsDto } from "./dtos/completions.dto";
import { AssistantDto } from "./dtos/assistant.dto";

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

  async askAssistant(assistantDto: AssistantDto) {
    const assistant = await this.openai.beta.assistants.retrieve(
      process.env.OPENAI_ASSISTANT_ID
    );
    const thread = await this.openai.beta.threads.create();
    const messages = await this.openai.beta.threads.messages.create(thread.id, {
      role: "user",
      content: assistantDto.message,
    });
    let run = await this.openai.beta.threads.runs.create(
      thread.id,
      { assistant_id: assistant.id }
    );

    while(['queued', 'in_progress', 'cancelling'].includes(run.status)) {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      run = await this.openai.beta.threads.runs.retrieve(thread.id, run.id);
      if(run.status === "completed") {
        const outputMessage = await this.openai.beta.threads.messages.list(thread.id);

        return {
          assistant,
          thread,
          messages,
          run,
          outputMessage,
        }
      }
    }

    return {
      assistant,
      thread,
      messages,
      run
    }
  }
}