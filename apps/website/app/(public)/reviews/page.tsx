import { Header } from '@ems/common-ui';
import { fetchReviews } from './services';
import Link from 'next/link';

export default async function ReviewsPage() {
  // const reviews = await fetchReviews();
  const reviews = [];
  return (
    <div>
      <Header>Reviews</Header>
      <p>All reviews</p>
      <Link href='/reviews/create' className='my-2 text-blue-600'>Create review</Link>
      <ul>
        {reviews?.map((elem) => (
          <li key={elem.id}>
            <div>{elem.content}</div>
            <div className="font-light">{elem.author}</div>
            <div className="mb-4 font-light">{elem.created_at}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}