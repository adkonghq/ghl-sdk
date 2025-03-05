import { GhlClient } from '../ghl.client';
import {
  ListBusinessesResponse,
  GetBusinessResponse,
  CreateBusinessDto,
  UpdateBusinessDto,
  CreateUpdateBusinessResponse,
} from './businesses.types';

export class BusinessesClient extends GhlClient {
  constructor(accessToken: string) {
    super(accessToken);
  }

  public async findByLocation(
    locationId: string,
  ): Promise<ListBusinessesResponse> {
    return this.get<ListBusinessesResponse>('/businesses/', {
      params: { locationId },
    });
  }

  public async findById(id: string): Promise<GetBusinessResponse> {
    return this.get<GetBusinessResponse>(`/businesses/${id}`);
  }

  public async create(
    dto: CreateBusinessDto,
  ): Promise<CreateUpdateBusinessResponse> {
    return this.post<CreateUpdateBusinessResponse>('/businesses/', dto);
  }

  public async update(
    id: string,
    dto: UpdateBusinessDto,
  ): Promise<CreateUpdateBusinessResponse> {
    return this.put<CreateUpdateBusinessResponse>(`/businesses/${id}`, dto);
  }

  public async remove(id: string): Promise<void> {
    return this.delete<void>(`/businesses/${id}`);
  }
}
