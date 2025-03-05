import { GhlClient } from '../ghl.client';
import {
  ListSurveysResponse,
  ListSurveySubmissionsResponse,
  SurveySearchParams,
  SurveySubmissionSearchParams,
} from './surveys.types';

export class SurveysClient extends GhlClient {
  constructor(accessToken: string) {
    super(accessToken);
  }

  public async find(params: SurveySearchParams): Promise<ListSurveysResponse> {
    return this.get<ListSurveysResponse>('/surveys/', { params });
  }

  public async findSubmissions(
    params: SurveySubmissionSearchParams,
  ): Promise<ListSurveySubmissionsResponse> {
    return this.get<ListSurveySubmissionsResponse>('/surveys/submissions', {
      params,
    });
  }
}
