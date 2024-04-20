'use server';
import { revalidatePath } from 'next/cache';
import db from '@ems/prisma-client';

import { CreateReviewDto, createReviewSchema } from '../types';

export const createReview = async (review: CreateReviewDto) => {
  'use server';

  const result = createReviewSchema.safeParse(review);
  if (!result.success) {
    console.log(result.error.issues);

    return {
      status: 'error',
    };
  } else {
    // await createReviewInAirtable(review);
    await db.review.create({
      data: review,
    });
    revalidatePath('/reviews');

    return {
      status: 'success',
      payload: review,
    };
  }
};