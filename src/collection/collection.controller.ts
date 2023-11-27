import { Controller, Get } from '@nestjs/common';
import { CollectionService } from './collection.service';

@Controller('collection-lists')
export class CollectionController {
  constructor(private readonly collectionService: CollectionService) {}

  @Get()
  findAllNFTsInCollection() {
    return this.collectionService.findAllNFTsInCollection();
  }

  @Get('collection')
  getCollectionDetails() {
    return this.collectionService.getCollectionDetails();
  }
}
