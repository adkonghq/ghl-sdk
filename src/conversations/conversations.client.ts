import { GhlClient } from '../ghl.client';
import {
  ConversationActionResponse,
  ConversationCancelScheduledResponse,
  ConversationEmailResponse,
  ConversationInboundMessageDto,
  ConversationMessageDto,
  ConversationMessageResponse,
  ConversationOutboundMessageDto,
  ConversationProcessMessageResponse,
  ConversationResponse,
  ConversationSearchParams,
  ConversationSearchResponse,
  ConversationUpdateMessageStatusDto,
  ConversationUploadFilesDto,
  ConversationUploadFilesResponse,
  ConverstationMessageTranscriptionResponse,
  CreateConversationDto,
  ListConversationMessagesResponse,
  SendConversationMessageResponse,
  UpdateConversationDto,
} from './conversations.types';
import { SuccessDeleteResponse } from '../common.types';

export class ConversationsClient extends GhlClient {
  constructor(accessToken: string) {
    super(accessToken);
  }

  public async findById(id: string): Promise<ConversationResponse> {
    return this.get(`/conversations/${id}`);
  }

  public async update(
    id: string,
    dto: UpdateConversationDto,
  ): Promise<ConversationActionResponse> {
    return this.put(`/conversations/${id}`, dto);
  }

  public async remove(id: string): Promise<SuccessDeleteResponse> {
    return this.delete<SuccessDeleteResponse>(`/conversations/${id}`);
  }

  public async create(
    dto: CreateConversationDto,
  ): Promise<ConversationActionResponse> {
    return this.post('/conversations/', dto);
  }

  public async search(
    params: ConversationSearchParams,
  ): Promise<ConversationSearchResponse> {
    return this.get('/conversations/search', { params });
  }

  public async findEmailById(
    emailId: string,
  ): Promise<ConversationEmailResponse> {
    return this.get(`/conversations/messages/email/${emailId}`);
  }

  public async cancelScheduledEmail(
    emailId: string,
  ): Promise<ConversationCancelScheduledResponse> {
    return this.delete(`/conversations/messages/email/${emailId}/schedule`);
  }

  public async findMessageById(
    messageId: string,
  ): Promise<ConversationMessageResponse> {
    return this.get(`/conversations/messages/${messageId}`);
  }

  public async findMessagesByConversationId(
    conversationId: string,
    params: ConversationSearchParams,
  ): Promise<ListConversationMessagesResponse> {
    return this.get(`/conversations/${conversationId}/messages`, { params });
  }

  public async sendMessage(
    dto: ConversationMessageDto,
  ): Promise<SendConversationMessageResponse> {
    return this.post(`/conversations/messages`, dto);
  }

  public async addInboundMessage(
    dto: ConversationInboundMessageDto,
  ): Promise<ConversationProcessMessageResponse> {
    return this.post(`/conversations/messages/inbound`, dto);
  }

  public async addOutboundMessage(
    dto: ConversationOutboundMessageDto,
  ): Promise<ConversationProcessMessageResponse> {
    return this.post(`/conversations/messages/outbound`, dto);
  }

  public async cancelScheduledMessage(
    messageId: string,
  ): Promise<ConversationCancelScheduledResponse> {
    return this.delete(`/conversations/messages/${messageId}/schedule`);
  }

  public async uploadFileAttachments(
    dto: ConversationUploadFilesDto,
  ): Promise<ConversationUploadFilesResponse> {
    return this.post(`/conversations/messages/upload`, dto);
  }

  public async updateMessageStatus(
    messageId: string,
    dto: ConversationUpdateMessageStatusDto,
  ): Promise<SendConversationMessageResponse> {
    return this.put(`/conversations/messages/${messageId}/status`, dto);
  }

  public async findMessageRecording(
    locationId: string,
    messageId: string,
  ): Promise<any> {
    return this.get<any>(
      `/conversations/messages/${messageId}/locations/${locationId}/recording`,
    );
  }

  public async findMessageTranscription(
    locationId: string,
    messageId: string,
  ): Promise<ConverstationMessageTranscriptionResponse> {
    return this.get<ConverstationMessageTranscriptionResponse>(
      `/conversations/locations/${locationId}/messages/${messageId}/transcription`,
    );
  }

  public async downloadMessageTranscription(
    locationId: string,
    messageId: string,
  ): Promise<any> {
    return this.get<any>(
      `/conversations/locations/${locationId}/messages/${messageId}/transcription/download`,
    );
  }
}
