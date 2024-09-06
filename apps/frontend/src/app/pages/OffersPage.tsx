import { useEffect, useState } from 'react';
import { OfferListDto } from '@ems/contracts';
import { Header } from '@ems/common-ui';

import { fetchOffers, OffersList } from '../features/offers';
import { Link } from 'react-router-dom';
import { ROUTE } from '../routes';

export const OffersPage = () => {
  const [ data, setData ] = useState<OfferListDto[]>([]);

  useEffect(() => {
    const loadData = async () => {
      const response = await fetchOffers();
      setData(response.data);
    }

    loadData();
  }, [])

  return (
    <div>
      <Header>Offers</Header>
      <Link to={ROUTE.CREATE_OFFER}>Create offer</Link>
      <OffersList data={data} />
    </div>
  );
};
