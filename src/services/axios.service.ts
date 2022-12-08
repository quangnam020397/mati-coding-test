import Axios, { AxiosResponse, AxiosRequestConfig, AxiosInstance } from 'axios';
import { axiosContentType, TResData } from '../interfaces';
import loggerService from './logger.service';

class AxiosService {
  private namespace: string = 'axios_Service';
  private axios: AxiosInstance;
  private axiosConfig!: AxiosRequestConfig;
  private logger = loggerService;
  constructor() {
    this.axios = Axios.create({
      baseURL: this.getBaseUrl(),
    });
    this.getAxiosConfig();
  }

  private getBaseUrl(): string {
    return 'http://localhost:3333/api/v1';
  }

  getAxiosConfig = (): void => {
    this.axiosConfig = {
      headers: {
        // Authorization: `Bearer ${this.authService.getToken()}`,
        ['Content-Type']: 'application/json',
      },
    };
  };

  setContentType(contentType: axiosContentType = 'application/json') {
    this.axiosConfig.headers = {
      ...this.axiosConfig.headers,
      ['Content-Type']: contentType,
    };
  }

  getMethod<R = AxiosResponse<any>>(uri: string, params = {}): Promise<TResData<R>> {
    const config = {
      ...this.axiosConfig,
      headers: {
        ...this.axiosConfig.headers,
        ['Content-Type']: 'application/json',
      },
      params,
     
    };
    return this.handleFlow(this.axios.get<any, R>(uri, config));
  }

  postMethod<T = any, R = AxiosResponse<T>>(uri: string, data: T): Promise<TResData<R>> {
    return this.handleFlow(this.axios.post<T, R>(uri, data, this.axiosConfig));
  }

  putMethod<T = any, R = AxiosResponse<T>>(uri: string, data: T): Promise<TResData<R>> {
    return this.handleFlow(this.axios.put<T, R>(uri, data, this.axiosConfig));
  }

  patchMethod<T = any, R = AxiosResponse<T>>(uri: string, data: T): Promise<TResData<R>> {
    return this.handleFlow(this.axios.patch<T, R>(uri, data, this.axiosConfig));
  }

  deleteMothod<T = any, R = AxiosResponse<T>>(uri: string): Promise<TResData<R>> {
    return this.handleFlow(this.axios.delete<T, R>(uri, this.axiosConfig));
  }

  private handleFlow<T = any, R = AxiosResponse<T>>(method: Promise<R>): Promise<TResData<R>> {
    return new Promise<TResData<R>>((resolve, reject) => {
      method
        .then((res: any) => {
          resolve({
            data: res.data,
            status: res.status,
            isSuccess: true,
          });
        })
        .catch((err: any) => {
          // loggerService.error(this.namespace, "", { ...err });

          this.handleError(err);
          reject({
            message: err?.response?.data?.error,
            statusCode: err?.response?.data?.status,
            status: err?.response?.status,
          });
        });
    });
  }

  private handleError = (err: any) => {
    const status = err.response?.status;
    this.logger.error(this.namespace, '', { ...err.response });
    switch (status) {
      // case 400:
      case 401:
      case 403:
        break;
      default:
        break;
    }
  };
}

const axiosService = new AxiosService();
export default axiosService;
