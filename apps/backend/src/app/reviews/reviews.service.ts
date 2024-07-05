import { Injectable, NotFoundException } from "@nestjs/common";
import { type Review } from "@prisma/client";
import { CreateReviewDto } from "./dtos/create-review.dto";
import { UpdateReviewDto } from "./dtos/update-review.dto";
import { PrismaService } from "../prisma.service";

@Injectable()
export class ReviewsService {
  constructor(private prisma: PrismaService) {}

  async getReviews(page?: number, offset?: number): Promise<Review[]> {
    return await this.prisma.review.findMany();
  }

  async getReview(id: Review['id']): Promise<Review> {
    const review = await this.prisma.review.findFirst({ where: { id }});
    if(!review) {
      // throw new HttpException('Review not found', HttpStatus.NOT_FOUND);
      throw new NotFoundException('Review not found');
    }
    return review;
  }

  createReview(createReviewDto: CreateReviewDto) {
    // reviews.push(createReviewDto);
    return createReviewDto;
  }

  updateReview(id: Review['id'], updateReviewDto: UpdateReviewDto) {
    return updateReviewDto;
  }

  deleteReview(id: Review['id']) {
    reviews.filter(review => review.id !== id);
    return null;
  }
}