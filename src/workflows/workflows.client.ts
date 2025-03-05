import { GhlClient } from '../ghl.client';
import { ListWorkflowsResponse } from './workflows.types';

export class WorkflowsClient extends GhlClient {
  constructor(accessToken: string) {
    super(accessToken);
  }

  public async findByLocationId(
    locationId: string,
  ): Promise<ListWorkflowsResponse> {
    return this.get<ListWorkflowsResponse>('/workflows/', {
      params: { locationId },
    });
  }
}
