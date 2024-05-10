import { Injectable } from "@nestjs/common";

type Review = {
  id: number;
  content: string;
  rank: number;
}

const reviews: Review[] = [
  { id: 1, content: "great", rank: 5},
  { id: 2, content: "nice", rank: 4},
];

@Injectable()
export class ReviewsService {
  getReviews(): Review[] {
    return reviews;
  }

  getReview(id: number): Review {
    return reviews[id];
  }

  createReview(data: Review) {
    reviews.push(data);
    return data;
  }

  deleteReview(id: number) {
    reviews.filter(review => review.id !== id);
    return null;
  }
}