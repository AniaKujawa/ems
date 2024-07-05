import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from "@nestjs/common";
import { ReviewsService } from "./reviews.service";
import { CreateReviewDto } from "./dtos/create-review.dto";
import { UpdateReviewDto } from "./dtos/update-review.dto";

@Controller('reviews')
export class ReviewsController {
  constructor(private readonly reviewsService: ReviewsService) {}

  @Get()
  async getReviews(@Query() query) {
    const { page, offset } = query;
    return await this.reviewsService.getReviews(page, offset);
  }

  @Get(':id')
  async getReview(@Param('id') id: number) {
    return await this.reviewsService.getReview(id);
  }

  @Delete(':id')
  deleteReview(@Param('id') id: number) {
    return this.reviewsService.deleteReview(id);
  }

  @Post()
  createReview(@Body() createReviewDto: CreateReviewDto) {
    return this.reviewsService.createReview(createReviewDto);
  }

  @Patch(':id')
  updateReview(@Param('id') id: number, @Body() updateReviewDto: UpdateReviewDto) {
    return this.reviewsService.updateReview(id, updateReviewDto);
  }
}