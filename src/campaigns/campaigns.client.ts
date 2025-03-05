import { GhlClient } from '../ghl.client';
import { CampaignsResponse, CampaignSearchParams } from './campaigns.types';

export class CampaignsClient extends GhlClient {
  constructor(accessToken: string) {
    super(accessToken);
  }

  public async find(params: CampaignSearchParams): Promise<CampaignsResponse> {
    return this.get<CampaignsResponse>('/campaigns/', { params });
  }
}
