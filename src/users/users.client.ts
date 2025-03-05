import { GhlClient } from '../ghl.client';
import {
  CreateUserDto,
  DeleteUserResponse,
  ListUsersResponse,
  SearchUsersResponse,
  UpdateUserDto,
  User,
  UserSearchParams,
} from './users.types';

export class UsersClient extends GhlClient {
  constructor(accessToken: string) {
    super(accessToken);
  }

  public async findById(userId: string): Promise<User> {
    return this.get<User>(`/users/${userId}`);
  }

  public async update(userId: string, dto: UpdateUserDto): Promise<User> {
    return this.put<User>(`/users/${userId}`, dto);
  }

  public async remove(userId: string): Promise<DeleteUserResponse> {
    return this.delete<DeleteUserResponse>(`/users/${userId}`);
  }

  public async findByLocation(locationId: string): Promise<ListUsersResponse> {
    return this.get<ListUsersResponse>('/users/', { params: { locationId } });
  }

  public async create(dto: CreateUserDto): Promise<User> {
    return this.post<User>('/users/', dto);
  }

  public async search(params: UserSearchParams): Promise<SearchUsersResponse> {
    return this.get<SearchUsersResponse>('/users/search', { params });
  }
}
