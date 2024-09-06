import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from "@nestjs/common";
import { OffersService } from "./offers.service";
import { CreateOfferDto } from "./dtos/create-offer.dto";
import { UpdateOfferDto } from "./dtos/update-offer.dto";

@Controller('offers')
export class OffersController {
  constructor(private readonly offersService: OffersService) {}

  @Get()
  async getOffers(@Query() query) {
    const { page, offset } = query;
    return await this.offersService.getOffers(page, offset);
  }

  @Get(':id')
  async getOffer(@Param('id') id: string) {
    return await this.offersService.getOffer(id);
  }

  @Delete(':id')
  deleteOffer(@Param('id') id: string) {
    return this.offersService.deleteOffer(id);
  }

  @Post()
  createOffer(@Body() createOfferDto: CreateOfferDto) {
    return this.offersService.createOffer(createOfferDto);
  }

  @Patch(':id')
  updateOffer(@Param('id') id: string, @Body() updateOfferDto: UpdateOfferDto) {
    return this.offersService.updateOffer(id, updateOfferDto);
  }
}