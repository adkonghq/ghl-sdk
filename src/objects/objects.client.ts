import { GhlClient } from '../ghl.client';
import {
  CustomObjectSchemaResponse,
  UpdateCustomObjectDto,
  CustomObjectResponse,
  ListCustomObjectsResponse,
  CreateCustomObjectDto,
  CustomObjectRecordResponse,
  UpdateCustomObjectRecordDto,
  DeleteCustomObjectRecordResponse,
  CreateCustomObjectRecordDto,
  SearchCustomObjectRecordsDto,
  CustomObjectRecordSearchResult,
} from './objects.types';

export class ObjectsClient extends GhlClient {
  constructor(accessToken: string) {
    super(accessToken);
  }

  public async findByKey(
    key: string,
    locationId: string,
    fetchProperties: string = undefined,
  ): Promise<CustomObjectSchemaResponse> {
    return this.get<CustomObjectSchemaResponse>(`/objects/${key}`, {
      params: { locationId, ...(fetchProperties && { fetchProperties }) },
    });
  }

  public async updateByKey(
    key: string,
    dto: UpdateCustomObjectDto,
  ): Promise<CustomObjectResponse> {
    return this.put<CustomObjectResponse>(`/objects/${key}`, dto);
  }

  public async findByLocation(
    locationId: string,
  ): Promise<ListCustomObjectsResponse> {
    return this.get<ListCustomObjectsResponse>('/objects/', {
      params: { locationId },
    });
  }

  public async create(
    dto: CreateCustomObjectDto,
  ): Promise<CustomObjectResponse> {
    return this.post<CustomObjectResponse>('/objects/schemas', dto);
  }

  public async findRecordById(
    key: string,
    recordId: string,
  ): Promise<CustomObjectRecordResponse> {
    return this.get<CustomObjectRecordResponse>(
      `/objects/${key}/records/${recordId}`,
    );
  }

  public async updateRecord(
    locationId: string,
    key: string,
    recordId: string,
    dto: UpdateCustomObjectRecordDto,
  ): Promise<CustomObjectRecordResponse> {
    return this.put<CustomObjectRecordResponse>(
      `/objects/${key}/records/${recordId}`,
      dto,
      { params: { locationId } },
    );
  }

  public async deleteRecord(
    key: string,
    recordId: string,
  ): Promise<DeleteCustomObjectRecordResponse> {
    return this.delete<DeleteCustomObjectRecordResponse>(
      `/objects/${key}/records/${recordId}`,
    );
  }

  public async createRecord(
    key: string,
    dto: CreateCustomObjectRecordDto,
  ): Promise<CustomObjectRecordResponse> {
    return this.post<CustomObjectRecordResponse>(
      `/objects/${key}/records`,
      dto,
    );
  }

  public async searchRecords(
    key: string,
    dto: SearchCustomObjectRecordsDto,
  ): Promise<CustomObjectRecordSearchResult> {
    return this.post<CustomObjectRecordSearchResult>(
      `/objects/${key}/records/search`,
      dto,
    );
  }
}
