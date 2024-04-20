import { Header } from '@ems/common-ui';
import { notFound } from 'next/navigation';

import { fetchReview } from '../services';

type Props = {
  params: {
    publicId: string;
  }
}

export default async function ReviewPage({ params }: Props) {
  const review = await fetchReview(params.publicId);

  if (!review) {
    notFound();
  }

  return (
    <div>
      <Header>{review.content}</Header>
      <p>{review.author}</p>
    </div>
  );
}