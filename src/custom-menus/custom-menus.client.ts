import { GhlClient } from '../ghl.client';
import {
  CreateCustomMenuDto,
  CustomMenuResponse,
  CustomMenuSearchParams,
  DeleteCustomMenuResponse,
  ListCustomMenusResponse,
  UpdateCustomMenuDto,
  UpdateCustomMenuResponse,
} from './custom-menus.types';

export class CustomMenusClient extends GhlClient {
  constructor(accessToken: string) {
    super(accessToken);
  }

  public async findById(customMenuId: string): Promise<CustomMenuResponse> {
    return this.get<CustomMenuResponse>(`/custom-menus/${customMenuId}`);
  }

  public async remove(customMenuId: string): Promise<DeleteCustomMenuResponse> {
    return this.delete<DeleteCustomMenuResponse>(
      `/custom-menus/${customMenuId}`,
    );
  }

  public async update(
    customMenuId: string,
    dto: UpdateCustomMenuDto,
  ): Promise<UpdateCustomMenuResponse> {
    return this.put<UpdateCustomMenuResponse>(
      `/custom-menus/${customMenuId}`,
      dto,
    );
  }

  public async find(
    params: CustomMenuSearchParams,
  ): Promise<ListCustomMenusResponse> {
    return this.get<ListCustomMenusResponse>('/custom-menus/', { params });
  }

  public async create(dto: CreateCustomMenuDto): Promise<CustomMenuResponse> {
    return this.post<CustomMenuResponse>('/custom-menus/', dto);
  }
}
