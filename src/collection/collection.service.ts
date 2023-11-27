import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class CollectionService {
  async findAllNFTsInCollection() {
    const { data } = await axios.get(
      `https://api.opensea.io/api/v2/collection/mystical-wizards/nfts`,
      {
        headers: {
          'x-api-key': `${process.env.OPENSEA_KEY}`,
        },
      },
    );

    const { nfts } = data;
    return nfts;
  }

  async getCollectionDetails() {
    const { data } = await axios.get(
      `https://api.opensea.io/api/v2/collections/mystical-wizards`,
      {
        headers: {
          'x-api-key': `${process.env.OPENSEA_KEY}`,
        },
      },
    );

    return data;
  }
}
