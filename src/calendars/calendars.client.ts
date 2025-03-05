import { GhlClient } from '../ghl.client';
import { SuccededDeleteResponse, SuccessDeleteResponse } from '../common.types';
import {
  ListCalendarsResponse,
  GetCalendarResponse,
  CreateCalendarDto,
  CalendarSearchParams,
  UpdateCalendarDto,
  GetCalendarSlotsResponse,
  ListCalendarGroupsResponse,
  CreateCalendarGroupDto,
  CreateUpdateCalendarGroupResponse,
  ValidateCalendarGroupSlugDto,
  ValidateCalendarGroupSlugResponse,
  UpdateCalendarGroupDto,
  UpdateCalendarGroupStatusResponse,
  CalendarEventSearchParams,
  ListCalendarEventsResponse,
  GetCalendarEventResponse,
  AppointmentCreateUpdateDto,
  AppointmentCreateUpdateResponse,
  CreateBlockSlotDto,
  BlockSlotCreateUpdateResponse,
  UpdateBlockSlotDto,
  ListAppointmentNotesResponse,
  AppointmentNoteDto,
  AppointmentNoteResponse,
  CalendarResourceType,
  CalendarResourceResponse,
  UpdateCalendarResourceDto,
  CalendarResourceSearchParams,
  CreateCalendarResourceDto,
  CalendarNotificationSearchParams,
  CalendarNotificationDetails,
  CalendarNotificationDto,
  CalendarNotificationOperationResponse,
} from './calendars.types';

export class CalendarsClient extends GhlClient {
  constructor(accessToken: string) {
    super(accessToken);
  }

  public async find(
    params: CalendarSearchParams,
  ): Promise<ListCalendarsResponse> {
    return this.get<ListCalendarsResponse>('/calendars/', { params });
  }

  public async findById(id: string): Promise<GetCalendarResponse> {
    return this.get<GetCalendarResponse>(`/calendars/${id}`);
  }

  public async create(dto: CreateCalendarDto): Promise<GetCalendarResponse> {
    return this.post<GetCalendarResponse>('/calendars/', dto);
  }

  public async update(
    id: string,
    dto: UpdateCalendarDto,
  ): Promise<GetCalendarResponse> {
    return this.put<GetCalendarResponse>(`/calendars/${id}`, dto);
  }

  public async remove(id: string): Promise<void> {
    return this.delete<void>(`/calendars/${id}`);
  }

  public async findFreeSlots(
    calendarId: string,
  ): Promise<GetCalendarSlotsResponse> {
    return this.get<GetCalendarSlotsResponse>(
      `/calendars/${calendarId}/free-slots`,
    );
  }

  public async findGroups(
    calendarId: string,
  ): Promise<ListCalendarGroupsResponse> {
    return this.get<ListCalendarGroupsResponse>(
      `/calendars/${calendarId}/groups`,
    );
  }

  public async createGroup(
    dto: CreateCalendarGroupDto,
  ): Promise<CreateUpdateCalendarGroupResponse> {
    return this.post<CreateUpdateCalendarGroupResponse>(
      '/calendars/groups',
      dto,
    );
  }

  public async validateGroupSlug(
    dto: ValidateCalendarGroupSlugDto,
  ): Promise<ValidateCalendarGroupSlugResponse> {
    return this.post<ValidateCalendarGroupSlugResponse>(
      '/calendars/groups/validate-slug',
      dto,
    );
  }

  public async removeGroup(groupId: string): Promise<SuccessDeleteResponse> {
    return this.delete<SuccessDeleteResponse>(`/calendars/groups/${groupId}`);
  }

  public async updateGroup(
    groupId: string,
    dto: UpdateCalendarGroupDto,
  ): Promise<CreateUpdateCalendarGroupResponse> {
    return this.put<CreateUpdateCalendarGroupResponse>(
      `/calendars/groups/${groupId}`,
      dto,
    );
  }

  public async updateGroupStatus(
    groupId: string,
    isActive: boolean,
  ): Promise<UpdateCalendarGroupStatusResponse> {
    return this.put<UpdateCalendarGroupStatusResponse>(
      `/calendars/groups/${groupId}/status`,
      { isActive },
    );
  }

  public async findEvents(
    params: CalendarEventSearchParams,
  ): Promise<ListCalendarEventsResponse> {
    return this.get<ListCalendarEventsResponse>('/calendars/events', {
      params,
    });
  }

  public async findBlockedSlots(
    params: CalendarEventSearchParams,
  ): Promise<ListCalendarEventsResponse> {
    return this.get<ListCalendarEventsResponse>('/calendars/blocked-slots', {
      params,
    });
  }

  public async findAppointmentById(
    eventId: string,
  ): Promise<GetCalendarEventResponse> {
    return this.get<GetCalendarEventResponse>(
      `/calendars/events/appointments/${eventId}`,
    );
  }

  public async updateAppointment(
    eventId: string,
    dto: AppointmentCreateUpdateDto,
  ): Promise<AppointmentCreateUpdateResponse> {
    return this.put<AppointmentCreateUpdateResponse>(
      `/calendars/events/appointments/${eventId}`,
      dto,
    );
  }

  public async createAppointment(
    dto: AppointmentCreateUpdateDto,
  ): Promise<AppointmentCreateUpdateResponse> {
    return this.post<AppointmentCreateUpdateResponse>(
      '/calendars/events/appointments',
      dto,
    );
  }

  public async createBlockSlot(
    dto: CreateBlockSlotDto,
  ): Promise<BlockSlotCreateUpdateResponse> {
    return this.post<BlockSlotCreateUpdateResponse>(
      '/calendars/block-slots',
      dto,
    );
  }

  public async updateBlockSlot(
    eventId: string,
    dto: UpdateBlockSlotDto,
  ): Promise<BlockSlotCreateUpdateResponse> {
    return this.put<BlockSlotCreateUpdateResponse>(
      `/calendars/block-slots/${eventId}`,
      dto,
    );
  }

  public async removeEvent(eventId: string): Promise<SuccededDeleteResponse> {
    return this.delete<SuccededDeleteResponse>(`/calendars/events/${eventId}`);
  }

  public async findAppointmentNotes(
    appointmentId: string,
  ): Promise<ListAppointmentNotesResponse> {
    return this.get<ListAppointmentNotesResponse>(
      `/calendars/appointments/${appointmentId}/notes`,
    );
  }

  public async createAppointmentNote(
    appointmentId: string,
    dto: AppointmentNoteDto,
  ): Promise<AppointmentNoteResponse> {
    return this.post<AppointmentNoteResponse>(
      `/calendars/appointments/${appointmentId}/notes`,
      dto,
    );
  }

  public async updateAppointmentNote(
    appointmentId: string,
    noteId: string,
    dto: AppointmentNoteDto,
  ): Promise<AppointmentNoteResponse> {
    return this.put<AppointmentNoteResponse>(
      `/calendars/appointments/${appointmentId}/notes/${noteId}`,
      dto,
    );
  }

  public async removeAppointmentNote(
    appointmentId: string,
    noteId: string,
  ): Promise<SuccessDeleteResponse> {
    return this.delete<SuccessDeleteResponse>(
      `/calendars/appointments/${appointmentId}/notes/${noteId}`,
    );
  }

  public async findResourceById(
    resourceId: string,
    resourceType: CalendarResourceType,
  ): Promise<CalendarResourceResponse> {
    return this.get<CalendarResourceResponse>(
      `/calendars/resources/${resourceType}/${resourceId}`,
    );
  }

  public async updateResource(
    resourceId: string,
    resourceType: CalendarResourceType,
    dto: UpdateCalendarResourceDto,
  ): Promise<CalendarResourceResponse> {
    return this.put<CalendarResourceResponse>(
      `/calendars/resources/${resourceType}/${resourceId}`,
      dto,
    );
  }

  public async deleteResource(
    resourceId: string,
    resourceType: CalendarResourceType,
  ): Promise<SuccessDeleteResponse> {
    return this.delete<SuccessDeleteResponse>(
      `/calendars/resources/${resourceType}/${resourceId}`,
    );
  }

  public async findResourcesByType(
    resourceType: CalendarResourceType,
    params: CalendarResourceSearchParams,
  ): Promise<CalendarResourceResponse[]> {
    return this.get<CalendarResourceResponse[]>(
      `/calendars/resources/${resourceType}`,
      { params },
    );
  }

  public async createCalendarResource(
    resourceType: CalendarResourceType,
    dto: CreateCalendarResourceDto,
  ): Promise<CalendarResourceResponse> {
    return this.post<CalendarResourceResponse>(
      `/calendars/resources/${resourceType}`,
      dto,
    );
  }

  public async findNotifications(
    calendarId: string,
    params: CalendarNotificationSearchParams,
  ): Promise<CalendarNotificationDetails[]> {
    return this.get<CalendarNotificationDetails[]>(
      `/calendars/${calendarId}/notifications`,
      { params: { ...params, altType: 'calendar', altId: calendarId } },
    );
  }

  public async createNotifications(
    calendarId: string,
    dto: CalendarNotificationDto[],
  ): Promise<CalendarNotificationDetails[]> {
    return this.post<CalendarNotificationDetails[]>(
      `/calendars/${calendarId}/notifications`,
      dto,
    );
  }

  public async findNotificationById(
    calendarId: string,
    notificationId: string,
  ): Promise<CalendarNotificationDetails> {
    return this.get<CalendarNotificationDetails>(
      `/calendars/${calendarId}/notifications/${notificationId}`,
    );
  }

  public async updateNotification(
    calendarId: string,
    notificationId: string,
    dto: CalendarNotificationDto,
  ): Promise<CalendarNotificationOperationResponse> {
    return this.put<CalendarNotificationOperationResponse>(
      `/calendars/${calendarId}/notifications/${notificationId}`,
      dto,
    );
  }

  public async removeNotification(
    calendarId: string,
    notificationId: string,
  ): Promise<CalendarNotificationOperationResponse> {
    return this.delete<CalendarNotificationOperationResponse>(
      `/calendars/${calendarId}/notifications/${notificationId}`,
    );
  }
}
