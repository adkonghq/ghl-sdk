import { GhlClient } from '../ghl.client';
import {
  InvoiceResponse,
  GenerateInvoiceNumberResponse,
  CreateInvoiceDto,
  CreateInvoiceResponse,
  CreateInvoiceTemplateDto,
  DeleteInvoiceResponse,
  ListInvoicesResponse,
  RecordInvoicePaymentDto,
  RecordInvoicePaymentResponse,
  InvoicesSearchParams,
  SendInvoiceDto,
  SendInvoiceResponse,
  UpdateInvoiceDto,
  UpdateInvoiceResponse,
  VoidInvoiceResponse,
  InvoiceScheduleSearchParams,
  ListInvoiceTemplatesResponse,
  InvoiceTemplateResponse,
  UpdateInvoiceTemplateDto,
  CreateInvoiceScheduleDto,
  ListInvoiceSchedulesResponse,
  UpdateInvoiceScheduleDto,
  InvoicesSchedule,
  InvoicesAutoPaymentDto,
  Text2PayInvoiceDto,
  Text2PayResponse,
  InvoiceScheduleResponse,
} from './invoices.types';
import { SuccessDeleteResponse } from '../common.types';

export class InvoicesClient extends GhlClient {
  constructor(accessToken: string) {
    super(accessToken);
  }

  public async generateInvoiceNumber(
    locationId: string,
  ): Promise<GenerateInvoiceNumberResponse> {
    return this.get<GenerateInvoiceNumberResponse>(
      '/invoices/generate-invoice-number',
      { params: { altType: 'location', altId: locationId } },
    );
  }

  public async findById(
    invoiceId: string,
    locationId: string,
  ): Promise<InvoiceResponse> {
    return this.get<InvoiceResponse>(`/invoices/${invoiceId}`, {
      params: { altType: 'location', altId: locationId },
    });
  }

  public async update(
    invoiceId: string,
    dto: UpdateInvoiceDto,
  ): Promise<UpdateInvoiceResponse> {
    return this.put<UpdateInvoiceResponse>(`/invoices/${invoiceId}`, dto);
  }

  public async remove(
    invoiceId: string,
    locationId: string,
  ): Promise<DeleteInvoiceResponse> {
    return this.delete<DeleteInvoiceResponse>(`/invoices/${invoiceId}`, {
      params: { altType: 'location', altId: locationId },
    });
  }

  public async voidById(
    invoiceId: string,
    locationId: string,
  ): Promise<VoidInvoiceResponse> {
    return this.post<VoidInvoiceResponse>(`/invoices/${invoiceId}/void`, {
      altType: 'location',
      altId: locationId,
    });
  }

  public async send(
    invoiceId: string,
    dto: SendInvoiceDto,
  ): Promise<SendInvoiceResponse> {
    return this.post<SendInvoiceResponse>(`/invoices/${invoiceId}/send`, dto);
  }

  public async recordPayment(
    invoiceId: string,
    dto: RecordInvoicePaymentDto,
  ): Promise<RecordInvoicePaymentResponse> {
    return this.post<RecordInvoicePaymentResponse>(
      `/invoices/${invoiceId}/record-payment`,
      dto,
    );
  }

  public async create(dto: CreateInvoiceDto): Promise<CreateInvoiceResponse> {
    return this.post<CreateInvoiceResponse>('/invoices/', dto);
  }

  public async find(
    params: InvoicesSearchParams,
  ): Promise<ListInvoicesResponse> {
    return this.get<ListInvoicesResponse>('/invoices/', { params });
  }

  public async createTemplate(
    dto: CreateInvoiceTemplateDto,
  ): Promise<InvoiceTemplateResponse> {
    return this.post<InvoiceTemplateResponse>('/invoices/template', dto);
  }

  public async findTemplates(
    params: InvoiceScheduleSearchParams,
  ): Promise<ListInvoiceTemplatesResponse> {
    return this.get<ListInvoiceTemplatesResponse>('/invoices/template', {
      params,
    });
  }

  public async findTemplateById(
    templateId: string,
    locationId: string,
  ): Promise<InvoiceTemplateResponse> {
    return this.get<InvoiceTemplateResponse>(
      `/invoices/template/${templateId}`,
      { params: { altType: 'location', altId: locationId } },
    );
  }

  public async updateTemplate(
    templateId: string,
    dto: UpdateInvoiceTemplateDto,
  ): Promise<InvoiceTemplateResponse> {
    return this.put<InvoiceTemplateResponse>(
      `/invoices/template/${templateId}`,
      dto,
    );
  }

  public async removeTemplate(
    templateId: string,
    locationId: string,
  ): Promise<SuccessDeleteResponse> {
    return this.delete<SuccessDeleteResponse>(
      `/invoices/template/${templateId}`,
      { params: { altType: 'location', altId: locationId } },
    );
  }

  public async createSchedule(
    dto: CreateInvoiceScheduleDto,
  ): Promise<InvoiceScheduleResponse> {
    return this.post<InvoiceScheduleResponse>(`/invoices/schedule`, dto);
  }

  public async findSchedules(
    params: InvoiceScheduleSearchParams,
  ): Promise<ListInvoiceSchedulesResponse> {
    return this.get<ListInvoiceSchedulesResponse>(`/invoices/schedule`, {
      params,
    });
  }

  public async findScheduleById(
    scheduleId: string,
    locationId: string,
  ): Promise<InvoiceScheduleResponse> {
    return this.get<InvoiceScheduleResponse>(
      `/invoices/schedule/${scheduleId}`,
      { params: { altType: 'location', altId: locationId } },
    );
  }

  public async updateSchedule(
    scheduleId: string,
    dto: UpdateInvoiceScheduleDto,
  ): Promise<InvoiceScheduleResponse> {
    return this.put<InvoiceScheduleResponse>(
      `/invoices/schedule/${scheduleId}`,
      dto,
    );
  }

  public async removeSchedule(
    scheduleId: string,
    locationId: string,
  ): Promise<SuccessDeleteResponse> {
    return this.delete<SuccessDeleteResponse>(
      `/invoices/schedule/${scheduleId}`,
      { params: { altType: 'location', altId: locationId } },
    );
  }

  public async createScheduledInvoice(
    scheduleId: string,
    dto: InvoicesSchedule,
  ): Promise<InvoiceScheduleResponse> {
    return this.post<InvoiceScheduleResponse>(
      `/invoices/schedule/${scheduleId}/schedule`,
      dto,
    );
  }

  public async manageAutoPayment(
    scheduleId: string,
    dto: InvoicesAutoPaymentDto,
  ): Promise<InvoiceScheduleResponse> {
    return this.post<InvoiceScheduleResponse>(
      `/invoices/schedule/${scheduleId}/auto-payment`,
      dto,
    );
  }

  public async cancelScheduledInvoice(
    scheduleId: string,
    locationId: string,
  ): Promise<InvoiceScheduleResponse> {
    return this.post<InvoiceScheduleResponse>(
      `/invoices/schedule/${scheduleId}/cancel`,
      { altType: 'location', altId: locationId },
    );
  }

  public async createText2Pay(
    dto: Text2PayInvoiceDto,
  ): Promise<Text2PayResponse> {
    return this.post<Text2PayResponse>('/invoices/text2pay', dto);
  }
}
