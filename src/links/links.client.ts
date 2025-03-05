import { GhlClient } from '../ghl.client';
import {
  CreateLinkDto,
  LinkResponse,
  ListLinksResponse,
  UpdateLinkDto,
} from './links.types';
import { SuccededDeleteResponse } from '../common.types';

export class LinksClient extends GhlClient {
  constructor(accessToken: string) {
    super(accessToken);
  }

  public async update(
    linkId: string,
    dto: UpdateLinkDto,
  ): Promise<LinkResponse> {
    return this.put<LinkResponse>(`/links/${linkId}`, dto);
  }

  public async remove(linkId: string): Promise<SuccededDeleteResponse> {
    return this.delete<SuccededDeleteResponse>(`/links/${linkId}`);
  }

  public async find(locationId: string): Promise<ListLinksResponse> {
    return this.get<ListLinksResponse>('/links', { params: { locationId } });
  }

  public async create(dto: CreateLinkDto): Promise<LinkResponse> {
    return this.post<LinkResponse>('/links/', dto);
  }
}
