import { Header } from '@ems/common-ui';
import { CreateOffer, createOffer } from '../features/offers';

export const CreateOfferPage = () => {
  return (
    <div>
      <Header>Offers</Header>
      <CreateOffer createOffer={createOffer} />
    </div>
  );
};
