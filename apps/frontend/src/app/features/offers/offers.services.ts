import { AxiosResponse } from 'axios';
import api from './../../config/api';
import { CreateOfferDto } from "./types";

import { OfferListDto } from '@ems/contracts';

export const createOffer = (data: CreateOfferDto) => {
  return api.post('/offers', data);
}

export const fetchOffers = (): Promise<AxiosResponse<OfferListDto[]>> => {
  return api.get('/offers');
}