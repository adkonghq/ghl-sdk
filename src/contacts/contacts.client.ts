import { GhlClient } from '../ghl.client';
import {
  ContactResponse,
  BusinessContactSearchParams,
  UpdateContactDto,
  UpdateContactResponse,
  UpsertContactResponse,
  FindContactsResponse,
  CreateContactDto,
  ContactLegacySearchParams,
  ListContactTaskResponse,
  CreateContactTaskDto,
  ContactTaskResponse,
  UpdateContactTaskDto,
  ListContactEventsResponse,
  ContactTagsDto,
  ListContactNotesResponse,
  ContactNoteResponse,
  ContactNoteDto,
  ContactActionResponse,
  ContactBulkUpateResponse,
  ContactBusinessUpdateDto,
  ContactSearchOptions,
  ContactSearchResponse,
  DuplicateContactSearchParams,
  ContactsDuplicateSearchResponse,
  ContactAddFollowersResponse,
  ContactRemoveFollowersResponse,
} from './contacts.types';
import { SuccededDeleteResponse } from '../common.types';

export class ContactsClient extends GhlClient {
  constructor(accessToken: string) {
    super(accessToken);
  }

  public async findById(id: string): Promise<ContactResponse> {
    return this.get<ContactResponse>(`/contacts/${id}`);
  }

  public async update(
    id: string,
    dto: UpdateContactDto,
  ): Promise<UpdateContactResponse> {
    return this.put<UpdateContactResponse>(`/contacts/${id}`, dto);
  }

  public async remove(id: string): Promise<SuccededDeleteResponse> {
    return this.delete<SuccededDeleteResponse>(`/contacts/${id}`);
  }

  public async upsert(dto: CreateContactDto): Promise<UpsertContactResponse> {
    return this.post<UpsertContactResponse>('/contacts/upsert', dto);
  }

  public async findByBusiness(
    businessId: string,
    params: BusinessContactSearchParams,
  ): Promise<FindContactsResponse> {
    return this.get<FindContactsResponse>(`/contacts/business/${businessId}`, {
      params,
    });
  }

  public async create(dto: CreateContactDto): Promise<ContactResponse> {
    return this.post<ContactResponse>('/contacts', dto);
  }

  public async find(
    params: ContactLegacySearchParams,
  ): Promise<FindContactsResponse> {
    return this.get<FindContactsResponse>('/contacts', {
      params,
    });
  }

  public async findTasks(contactId: string): Promise<ListContactTaskResponse> {
    return this.get<ListContactTaskResponse>(`/contacts/${contactId}/tasks`);
  }

  public async createTask(
    contactId: string,
    dto: CreateContactTaskDto,
  ): Promise<ContactTaskResponse> {
    return this.post<ContactTaskResponse>(`/contacts/${contactId}/tasks`, dto);
  }

  public async findTaskById(
    contactId: string,
    taskId: string,
  ): Promise<ContactTaskResponse> {
    return this.get<ContactTaskResponse>(
      `/contacts/${contactId}/tasks/${taskId}`,
    );
  }

  public async updateTask(
    contactId: string,
    taskId: string,
    dto: UpdateContactTaskDto,
  ): Promise<ContactTaskResponse> {
    return this.put<ContactTaskResponse>(
      `/contacts/${contactId}/tasks/${taskId}`,
      dto,
    );
  }

  public async removeTask(
    contactId: string,
    taskId: string,
  ): Promise<SuccededDeleteResponse> {
    return this.delete<SuccededDeleteResponse>(
      `/contacts/${contactId}/tasks/${taskId}`,
    );
  }

  public async updateTaskStatus(
    contactId: string,
    taskId: string,
    completed: boolean,
  ): Promise<ContactTaskResponse> {
    return this.put<ContactTaskResponse>(
      `/contacts/${contactId}/tasks/${taskId}/completed`,
      { completed },
    );
  }

  public async findAppointments(
    contactId: string,
  ): Promise<ListContactEventsResponse> {
    return this.get<ListContactEventsResponse>(
      `/contacts/${contactId}/appointments`,
    );
  }

  public async addTags(
    contactId: string,
    dto: ContactTagsDto,
  ): Promise<ContactTagsDto> {
    return this.post<ContactTagsDto>(`/contacts/${contactId}/tags`, dto);
  }

  public async removeTags(
    contactId: string,
    data: ContactTagsDto,
  ): Promise<ContactTagsDto> {
    return this.delete<ContactTagsDto>(`/contacts/${contactId}/tags`, { data });
  }

  public async findNotes(contactId: string): Promise<ListContactNotesResponse> {
    return this.get<ListContactNotesResponse>(`/contacts/${contactId}/notes`);
  }

  public async createNote(
    contactId: string,
    dto: ContactNoteDto,
  ): Promise<ContactNoteResponse> {
    return this.post<ContactNoteResponse>(`/contacts/${contactId}/notes`, dto);
  }

  public async findNoteById(
    contactId: string,
    noteId: string,
  ): Promise<ContactNoteResponse> {
    return this.get<ContactNoteResponse>(
      `/contacts/${contactId}/notes/${noteId}`,
    );
  }

  public async updateNote(
    contactId: string,
    noteId: string,
    dto: ContactNoteDto,
  ): Promise<ContactNoteResponse> {
    return this.put<ContactNoteResponse>(
      `/contacts/${contactId}/notes/${noteId}`,
      dto,
    );
  }

  public async removeNote(
    contactId: string,
    noteId: string,
  ): Promise<SuccededDeleteResponse> {
    return this.delete<SuccededDeleteResponse>(
      `/contacts/${contactId}/notes/${noteId}`,
    );
  }

  public async addToCampaign(
    contactId: string,
    campaignId: string,
  ): Promise<ContactActionResponse> {
    return this.post<ContactActionResponse>(
      `/contacts/${contactId}/campaigns/${campaignId}`,
    );
  }

  public async removeFromCampaign(
    contactId: string,
    campaignId: string,
  ): Promise<ContactActionResponse> {
    return this.delete<ContactActionResponse>(
      `/contacts/${contactId}/campaigns/${campaignId}`,
    );
  }

  public async removeFromEveryCampaign(
    contactId: string,
  ): Promise<ContactActionResponse> {
    return this.delete<ContactActionResponse>(
      `/contacts/${contactId}/campaigns/removeAll`,
    );
  }

  public async addToWorkflow(
    contactId: string,
    workflowId: string,
    startTime: string,
  ): Promise<ContactActionResponse> {
    return this.post<ContactActionResponse>(
      `/contacts/${contactId}/workflow/${workflowId}`,
      { startTime },
    );
  }

  public async removeFromWorkflow(
    contactId: string,
    workflowId: string,
  ): Promise<SuccededDeleteResponse> {
    return this.delete<SuccededDeleteResponse>(
      `/contacts/${contactId}/workflow/${workflowId}`,
    );
  }

  public async addRemoveFromBusiness(
    dto: ContactBusinessUpdateDto,
  ): Promise<ContactBulkUpateResponse> {
    return this.post<ContactBulkUpateResponse>('/contacts/bulk/business', dto);
  }

  public async search(
    dto: ContactSearchOptions,
  ): Promise<ContactSearchResponse> {
    return this.post<ContactSearchResponse>('/contacts/search', dto);
  }

  public async findDuplicates(
    params: DuplicateContactSearchParams,
  ): Promise<ContactsDuplicateSearchResponse> {
    return this.get<ContactsDuplicateSearchResponse>(
      '/contacts/search/duplicate',
      {
        params,
      },
    );
  }

  public async addFollowers(
    contactId: string,
    followers: string[],
  ): Promise<ContactAddFollowersResponse> {
    return this.post<ContactAddFollowersResponse>(
      `/contacts/${contactId}/followers`,
      { followers },
    );
  }

  public async removeFollowers(
    contactId: string,
    followers: string[],
  ): Promise<ContactRemoveFollowersResponse> {
    return this.delete<ContactRemoveFollowersResponse>(
      `/contacts/${contactId}/followers`,
      { data: { followers } },
    );
  }
}
