import Link from 'next/link';
import { fetchReviews } from '../services';


export default async function ReviewsList() {
  const reviews = await fetchReviews();

  return (
    <ul>
      {reviews?.map((elem) => (
        <li key={elem.id}>
          <div>
            <Link href={elem.id} className="text-blue-800">{elem.content}</Link>
          </div>
          <div className="font-light">{elem.author}</div>
          <div className="mb-4 font-light">{elem.created_at}</div>
        </li>
      ))}
    </ul>
  );
}