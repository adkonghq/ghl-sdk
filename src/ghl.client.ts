import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios';
import axiosRetry from 'axios-retry';

export class GhlClient {
  private readonly baseUrl = 'https://services.leadconnectorhq.com';
  private axiosInstance: AxiosInstance;
  private rateLimitDaily = 200000;
  private rateLimitBurst = 100;

  constructor(accessToken?: string) {
    this.axiosInstance = axios.create({
      baseURL: this.baseUrl,
      headers: {
        accept: 'application/json',
        version: '2021-07-28',
        ...(accessToken && { authorization: `Bearer ${accessToken}` }),
      },
      timeout: 10000,
      validateStatus: (status) => status >= 200 && status < 300,
    });

    this.axiosInstance.interceptors.response.use(
      (response) => {
        if (response.headers['x-ratelimit-daily-remaining']) {
          this.rateLimitDaily = parseInt(
            response.headers['x-ratelimit-daily-remaining'],
            10,
          );
        }
        if (response.headers['x-ratelimit-remaining']) {
          this.rateLimitBurst = parseInt(
            response.headers['x-ratelimit-remaining'],
            10,
          );
        }
        return response.data;
      },
      (error) => this.handleError(error),
    );

    axiosRetry(this.axiosInstance, {
      retryDelay: (retryCount, error) =>
        axiosRetry.exponentialDelay(retryCount, error, 1000),
    });
  }

  private handleError(error: AxiosError): Promise<never> {
    const { response, request } = error;

    if (response) {
      if (response.data) {
        return Promise.reject(response.data);
      }
      if (response.statusText) {
        return Promise.reject({ message: response.statusText });
      }
    }

    if (request) {
      return Promise.reject({ message: `Could not reach ${this.baseUrl}` });
    }

    return Promise.reject({ message: error.message });
  }

  private async handleRateLimit(): Promise<void> {
    if (this.rateLimitDaily < 1) {
      throw new Error('Daily ratelimit has been reached');
    }
    if (this.rateLimitBurst < 10) {
      await new Promise((resolve) => setTimeout(resolve, 10000));
    }
  }

  protected async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    await this.handleRateLimit();
    return this.axiosInstance.get<T>(url, config) as T;
  }

  protected async post<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): Promise<T> {
    const defaultHeaders = { 'content-type': 'application/json' };
    await this.handleRateLimit();
    return this.axiosInstance.post<T>(url, data, {
      ...config,
      headers: { ...defaultHeaders, ...(config?.headers || {}) },
    }) as T;
  }

  protected async put<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): Promise<T> {
    const defaultHeaders = { 'content-type': 'application/json' };
    await this.handleRateLimit();
    return this.axiosInstance.put<T>(url, data, {
      ...config,
      headers: { ...defaultHeaders, ...(config?.headers || {}) },
    }) as T;
  }

  protected async patch<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): Promise<T> {
    const defaultHeaders = { 'content-type': 'application/json' };
    await this.handleRateLimit();
    return this.axiosInstance.patch<T>(url, data, {
      ...config,
      headers: { ...defaultHeaders, ...(config?.headers || {}) },
    }) as T;
  }

  protected async delete<T>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<T> {
    await this.handleRateLimit();
    return this.axiosInstance.delete<T>(url, config) as T;
  }
}
