import { GhlClient } from '../ghl.client';
import {
  CreateLocationDto,
  CreateUpdateLocationResponse,
  DeleteLocationResponse,
  LocationResponse,
  ListLocationsResponse,
  UpdateLocationDto,
  ListLocationCustomFieldsResponse,
  CreateLocationCustomFieldDto,
  LocationCustomFieldResponse,
  UpdateLocationCustomFieldDto,
  LocationsFileUploadResponse,
  LocationsFileInterface,
  ListLocationCustomValuesResponse,
  LocationCustomValueDto,
  LocationCustomValueResponse,
  LocationTemplateSearchParams,
  ListLocationTemplatesResponse,
  LocationSearchParams,
  ListLocationTagsResponse,
  LocationTagResponse,
  LocationTaskSearchParams,
  ListLocationTasksResponse,
  LocationTimeZonesResponse,
} from './locations.types';
import { SuccededDeleteResponse } from '../common.types';

export class LocationsClient extends GhlClient {
  constructor(accessToken: string) {
    super(accessToken);
  }

  public async findById(locationId: string): Promise<LocationResponse> {
    return this.get<LocationResponse>(`/locations/${locationId}`);
  }

  public async update(
    locationId: string,
    dto: UpdateLocationDto,
  ): Promise<CreateUpdateLocationResponse> {
    return this.put<CreateUpdateLocationResponse>(
      `/locations/${locationId}`,
      dto,
    );
  }

  public async remove(
    locationId: string,
    deleteTwilioAccount = false,
  ): Promise<DeleteLocationResponse> {
    return this.delete<DeleteLocationResponse>(`/locations/${locationId}`, {
      params: { deleteTwilioAccount },
    });
  }

  public async create(
    dto: CreateLocationDto,
  ): Promise<CreateUpdateLocationResponse> {
    return this.post<CreateUpdateLocationResponse>('/locations/', dto);
  }

  public async search(
    params: LocationSearchParams,
  ): Promise<ListLocationsResponse> {
    return this.get<ListLocationsResponse>('/locations/search', {
      params,
    });
  }

  public async findCustomFields(
    locationId: string,
    model: 'contact' | 'opportunity' | 'all' = undefined,
  ): Promise<ListLocationCustomFieldsResponse> {
    return this.get<ListLocationCustomFieldsResponse>(
      `/locations/${locationId}/customFields`,
      model ? { params: { model } } : undefined,
    );
  }

  public async createCustomField(
    locationId: string,
    dto: CreateLocationCustomFieldDto,
  ): Promise<LocationCustomFieldResponse> {
    return this.post<LocationCustomFieldResponse>(
      `/locations/${locationId}/customFields`,
      dto,
    );
  }

  public async findCustomFieldById(
    locationId: string,
    customFieldId: string,
  ): Promise<LocationCustomFieldResponse> {
    return this.get<LocationCustomFieldResponse>(
      `/locations/${locationId}/customFields/${customFieldId}`,
    );
  }

  public async updateCustomField(
    locationId: string,
    customFieldId: string,
    dto: UpdateLocationCustomFieldDto,
  ): Promise<LocationCustomFieldResponse> {
    return this.put<LocationCustomFieldResponse>(
      `/locations/${locationId}/customFields/${customFieldId}`,
      dto,
    );
  }

  public async removeCustomField(
    locationId: string,
    customFieldId: string,
  ): Promise<SuccededDeleteResponse> {
    return this.delete<SuccededDeleteResponse>(
      `/locations/${locationId}/customFields/${customFieldId}`,
    );
  }

  public async uploadCustomFieldFile(
    locationId: string,
    customFieldId: string,
    files: LocationsFileInterface[],
  ): Promise<LocationsFileUploadResponse> {
    return this.post<LocationsFileUploadResponse>(
      `/locations/${locationId}/customFields/upload`,
      {
        id: customFieldId,
        maxFiles: files.length.toString(10),
        ...files.reduce((acc, f) => ({ ...acc, [f.name]: f.blob }), {}),
      },
      { headers: { 'content-type': 'multipart/form-data' } },
    );
  }

  public async findCustomValues(
    locationId: string,
  ): Promise<ListLocationCustomValuesResponse> {
    return this.get<ListLocationCustomValuesResponse>(
      `/locations/${locationId}/customValues`,
    );
  }

  public async createCustomValue(
    locationId: string,
    dto: LocationCustomValueDto,
  ): Promise<LocationCustomValueResponse> {
    return this.post<LocationCustomValueResponse>(
      `/locations/${locationId}/customValues`,
      dto,
    );
  }

  public async findCustomValueById(
    locationId: string,
    customValueId: string,
  ): Promise<LocationCustomValueResponse> {
    return this.get<LocationCustomValueResponse>(
      `/locations/${locationId}/customValues/${customValueId}`,
    );
  }

  public async updateCustomValue(
    locationId: string,
    customValueId: string,
    dto: LocationCustomValueDto,
  ): Promise<LocationCustomValueResponse> {
    return this.put<LocationCustomValueResponse>(
      `/locations/${locationId}/customValues/${customValueId}`,
      dto,
    );
  }

  public async removeCustomValue(
    locationId: string,
    customValueId: string,
  ): Promise<SuccededDeleteResponse> {
    return this.delete<SuccededDeleteResponse>(
      `/locations/${locationId}/customValues/${customValueId}`,
    );
  }

  public async findTemplates(
    locationId: string,
    params: LocationTemplateSearchParams,
  ): Promise<ListLocationTemplatesResponse> {
    return this.get<ListLocationTemplatesResponse>(
      `/locations/${locationId}/templates`,
      { params },
    );
  }

  public async removeTemplate(
    locationId: string,
    templateId: string,
  ): Promise<SuccededDeleteResponse> {
    return this.delete<SuccededDeleteResponse>(
      `/locations/${locationId}/templates/${templateId}`,
    );
  }

  public async findTags(locationId: string): Promise<ListLocationTagsResponse> {
    return this.get<ListLocationTagsResponse>(`/locations/${locationId}/tags`);
  }

  public async createTag(
    locationId: string,
    name: string,
  ): Promise<LocationTagResponse> {
    return this.post<LocationTagResponse>(`/locations/${locationId}/tags`, {
      name,
    });
  }

  public async findTagById(
    locationId: string,
    tagId: string,
  ): Promise<LocationTagResponse> {
    return this.get<LocationTagResponse>(
      `/locations/${locationId}/tags/${tagId}`,
    );
  }

  public async updateTag(
    locationId: string,
    tagId: string,
    name: string,
  ): Promise<LocationTagResponse> {
    return this.put<LocationTagResponse>(
      `/locations/${locationId}/tags/${tagId}`,
      { name },
    );
  }

  public async removeTag(
    locationId: string,
    tagId: string,
  ): Promise<SuccededDeleteResponse> {
    return this.delete<SuccededDeleteResponse>(
      `/locations/${locationId}/tags/${tagId}`,
    );
  }

  public async searchTasks(
    locationId: string,
    dto: LocationTaskSearchParams,
  ): Promise<ListLocationTasksResponse> {
    return this.post<ListLocationTasksResponse>(
      `/locations/${locationId}/tasks/search`,
      dto,
    );
  }

  public async findTimezones(
    locationId: string,
  ): Promise<LocationTimeZonesResponse> {
    return this.get<LocationTimeZonesResponse>(
      `/locations/${locationId}/timezones`,
    );
  }
}
