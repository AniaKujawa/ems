import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReviewsModule } from './reviews/reviews.module';
import { OffersModule } from './offers/offers.module';
import { AiModule } from './ai/ai.module';
// import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [ReviewsModule, OffersModule, AiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
