import { GhlClient } from '../ghl.client';
import {
  CreateCustomFieldDto,
  CreateCustomFieldFolderDto,
  CustomFieldFolder,
  CustomFieldResponse,
  ListCustomFieldsResponse,
  RemoveCustomFieldResponse,
  UpdateCustomFieldDto,
  UpdateCustomFieldFolderDto,
} from './custom-fields.types';

export class CustomFieldsClient extends GhlClient {
  constructor(accessToken: string) {
    super(accessToken);
  }

  public async findById(id: string): Promise<CustomFieldResponse> {
    return this.get<CustomFieldResponse>(`/custom-fields/${id}`);
  }

  public async update(
    id: string,
    dto: UpdateCustomFieldDto,
  ): Promise<CustomFieldResponse> {
    return this.put<CustomFieldResponse>(`/custom-fields/${id}`, dto);
  }

  public async remove(id: string): Promise<RemoveCustomFieldResponse> {
    return this.delete<RemoveCustomFieldResponse>(`/custom-fields/${id}`);
  }

  public async findByObjectKey(
    locationId: string,
    objectKey: string,
  ): Promise<ListCustomFieldsResponse> {
    return this.get<ListCustomFieldsResponse>(
      `/custom-fields/object-key/${objectKey}`,
      { params: { locationId } },
    );
  }

  public async createFolder(
    dto: CreateCustomFieldFolderDto,
  ): Promise<CustomFieldFolder> {
    return this.post<CustomFieldFolder>(`/custom-fields/folder`, dto);
  }

  public async updateFolder(
    folderId: string,
    dto: UpdateCustomFieldFolderDto,
  ): Promise<CustomFieldFolder> {
    return this.put<CustomFieldFolder>(
      `/custom-fields/folder/${folderId}`,
      dto,
    );
  }

  public async removeFolder(
    locationId: string,
    folderId: string,
  ): Promise<RemoveCustomFieldResponse> {
    return this.delete<RemoveCustomFieldResponse>(
      `/custom-fields/folder/${folderId}`,
      { params: { locationId } },
    );
  }

  public async create(dto: CreateCustomFieldDto): Promise<CustomFieldResponse> {
    return this.post<CustomFieldResponse>('/custom-fields/', dto);
  }
}
