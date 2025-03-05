import { GhlClient } from '../ghl.client';
import {
  ListSnapshotsResponse,
  SnapshotAssetsStatus,
  SnapshotShareLinkDto,
  SnapshotShareLinkResponse,
  SnapshotStatusResponse,
  SnapshotStatusSearchParams,
} from './snapshots.types';

export class SnapshotsClient extends GhlClient {
  constructor(accessToken: string) {
    super(accessToken);
  }

  public async find(companyId: string): Promise<ListSnapshotsResponse> {
    return this.get<ListSnapshotsResponse>('/snapshots/', {
      params: { companyId },
    });
  }

  public async createShareLink(
    companyId: string,
    dto: SnapshotShareLinkDto,
  ): Promise<SnapshotShareLinkResponse> {
    return this.post<SnapshotShareLinkResponse>('/snapshots/share/link', dto, {
      params: { companyId },
    });
  }

  public async findPushBetweenDates(
    snapshotId: string,
    params: SnapshotStatusSearchParams,
  ): Promise<SnapshotStatusResponse> {
    return this.get<SnapshotStatusResponse>(
      `/snapshots/snapshot-status/${snapshotId}`,
      { params },
    );
  }

  public async findLastPushByLocationId(
    locationId: string,
    snapshotId: string,
    companyId: string,
  ): Promise<SnapshotAssetsStatus> {
    return this.get<SnapshotAssetsStatus>(
      `/snapshots/snapshot-status/${snapshotId}/location/${locationId}`,
      { params: { companyId } },
    );
  }
}
