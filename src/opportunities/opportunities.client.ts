import { GhlClient } from '../ghl.client';
import {
  CreateOpportunityDto,
  OpportunityResponse,
  OpportunitiesSearchResponse,
  UpsertOpportunityDto,
  UpsertOpportunityResponse,
  OpportunitySearchParams,
  OpportunityStatus,
  UpdateOpportunityDto,
  UpdateOpportunityStatusResponse,
  ListPipelinesResponse,
  AddOpportunityFollowersResponse,
  RemoveOpportunityFollowersResponse,
} from './opportunities.types';
import { SuccededDeleteResponse } from '../common.types';

export class OpportunitiesClient extends GhlClient {
  constructor(accessToken: string) {
    super(accessToken);
  }

  public async findById(opportunityId: string): Promise<OpportunityResponse> {
    return this.get<OpportunityResponse>(`/opportunities/${opportunityId}`);
  }

  public async remove(opportunityId: string): Promise<SuccededDeleteResponse> {
    return this.delete<SuccededDeleteResponse>(
      `/opportunities/${opportunityId}`,
    );
  }

  public async update(
    opportunityId: string,
    dto: UpdateOpportunityDto,
  ): Promise<OpportunityResponse> {
    return this.put<OpportunityResponse>(`opportunities/${opportunityId}`, dto);
  }

  public async updateStatus(
    opportunityId: string,
    status: OpportunityStatus,
  ): Promise<UpdateOpportunityStatusResponse> {
    return this.put<UpdateOpportunityStatusResponse>(
      `/opportunities/${opportunityId}/status`,
      { status },
    );
  }

  public async upsert(
    dto: UpsertOpportunityDto,
  ): Promise<UpsertOpportunityResponse> {
    return this.post<UpsertOpportunityResponse>('/opportunities/upsert', dto);
  }

  public async create(dto: CreateOpportunityDto): Promise<OpportunityResponse> {
    return this.post<OpportunityResponse>('/opportunities/', dto);
  }

  public async search(
    params: OpportunitySearchParams,
  ): Promise<OpportunitiesSearchResponse> {
    return this.get<OpportunitiesSearchResponse>('/opportunities/search', {
      params,
    });
  }

  public async findPipelines(
    locationId: string,
  ): Promise<ListPipelinesResponse> {
    return this.get<ListPipelinesResponse>('/opportunities/pipelines', {
      params: { locationId },
    });
  }

  public async addFollowers(
    opportunityId: string,
    followers: string[],
  ): Promise<AddOpportunityFollowersResponse> {
    return this.post<AddOpportunityFollowersResponse>(
      `/opportunities/${opportunityId}/followers`,
      { followers },
    );
  }

  public async removeFollowers(
    opportunityId: string,
    followers: string[],
  ): Promise<RemoveOpportunityFollowersResponse> {
    return this.delete<RemoveOpportunityFollowersResponse>(
      `/opportunities/${opportunityId}/followers`,
      { data: { followers } },
    );
  }
}
