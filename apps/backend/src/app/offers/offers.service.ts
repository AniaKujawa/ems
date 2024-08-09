import { Injectable, NotFoundException } from "@nestjs/common";
import { type Offer } from "@prisma/client";
import { CreateOfferDto } from "./dtos/create-offer.dto";
import { UpdateOfferDto } from "./dtos/update-offer.dto";
import { PrismaService } from "../prisma.service";

@Injectable()
export class OffersService {
  constructor(private prisma: PrismaService) {}

  async getOffers(page?: number, offset?: number): Promise<Offer[]> {
    return await this.prisma.offer.findMany();
  }

  async getOffer(id: Offer['id']): Promise<Offer> {
    const offer = await this.prisma.offer.findFirst({ where: { id }});
    if(!offer) {
      // throw new HttpException('offer not found', HttpStatus.NOT_FOUND);
      throw new NotFoundException('Offer not found');
    }
    return offer;
  }

  createOffer(createOfferDto: CreateOfferDto) {
    // Offers.push(createOfferDto);
    return createOfferDto;
  }

  updateOffer(id: Offer['id'], updateOfferDto: UpdateOfferDto) {
    return updateOfferDto;
  }

  deleteOffer(id: Offer['id']) {
    offers.filter(offer => offer.id !== id);
    return null;
  }
}