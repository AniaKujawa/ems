import { Injectable, NotFoundException } from "@nestjs/common";
import { Review } from "./entities/review.entity";
import { CreateReviewDto } from "./dtos/create-review.dto";
import { UpdateReviewDto } from "./dtos/update-review.dto";

const reviews: Review[] = [
  { id: 1, content: "great", rank: 5},
  { id: 2, content: "nice", rank: 4},
];

@Injectable()
export class ReviewsService {
  getReviews(page?: number, offset?: number): Review[] {
    return reviews;
  }

  getReview(id: string): Review {
    const review = reviews.find(item => item.id === +id);
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

  updateReview(id: string, updateReviewDto: UpdateReviewDto) {
    return updateReviewDto;
  }

  deleteReview(id: string) {
    reviews.filter(review => review.id !== +id);
    return null;
  }
}