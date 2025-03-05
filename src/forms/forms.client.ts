import { GhlClient } from '../ghl.client';
import {
  CustomFileInterface,
  FormSearchParams,
  FormSubmissionSearchParams,
  ListFormSubmissionsResponse,
  ListFormsResponse,
} from './forms.types';
import { ContactResponse } from '../contacts/contacts.types';

export class FormsClient extends GhlClient {
  constructor(accessToken: string) {
    super(accessToken);
  }

  private generateRandomId(): string {
    return `${Math.random().toString(36).slice(2, 18)}${Date.now().toString(36)}`;
  }

  public async find(params: FormSearchParams): Promise<ListFormsResponse> {
    return this.get<ListFormsResponse>('/forms/', {
      params,
    });
  }

  public async uploadCustomFiles(
    locationId: string,
    contactId: string,
    files: CustomFileInterface[],
  ): Promise<ContactResponse> {
    const data = files.reduce((acc, f) => {
      const id = this.generateRandomId();
      return { ...acc, [`${f.customFieldId}_${id}`]: f.blob };
    }, {});

    return this.post<ContactResponse>('/forms/upload-custom-files', data, {
      params: { locationId, contactId },
      headers: {
        'content-type': 'multipart/form-data',
      },
    });
  }

  public async findSubmissions(
    params: FormSubmissionSearchParams,
  ): Promise<ListFormSubmissionsResponse> {
    return this.get<ListFormSubmissionsResponse>('/forms/submissions', {
      params,
    });
  }
}
