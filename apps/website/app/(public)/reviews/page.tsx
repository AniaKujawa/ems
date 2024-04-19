import { Header } from '@ems/common-ui';
import Link from 'next/link';
import { Suspense } from 'react';

import ReviewsCount from './components/ReviewsCount';
import ReviewsList from './components/ReviewsList';

export default async function ReviewsPage() {
  return (
    <div>
      <Header>Reviews</Header>
      <p>All reviews</p>
      <Link href='/reviews/create' className='my-2 text-blue-600'>Create review</Link>

      <Suspense fallback={<p>Loading count...</p>}>
        <ReviewsCount />
      </Suspense>

      <Suspense fallback={<p>Loading reviews...</p>}>
        <ReviewsList />
      </Suspense>
    </div>
  );
}