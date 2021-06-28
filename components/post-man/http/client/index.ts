import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
  Canceler,
} from 'axios';

class HTTPResponse {
  constructor(
    public data: AxiosResponse,
    public header: AxiosResponse,
    public status: number
  ) {}
}

class HTTP {
  public instance: AxiosInstance;
  private timeOut: number = 10000;
  private CancelToken = axios.CancelToken;

  constructor(public baseURL?: string) {
    this.instance = axios.create({ baseURL });
    this.instance.defaults.timeout = this.timeOut;
    this.instance.defaults.cancelToken = new this.CancelToken(
      this.cancelExcutor
    );
  }

  private cancelExcutor = (cancel: Canceler) => {
    this.cancel = cancel;
  };
  cancel = () => {};

  getInstance = () => {
    return this.instance;
  };
  setBaseURL = (baseURL: string) => {
    this.instance.defaults.baseURL = baseURL;
  };
  setAuthorization = (token: string, isBearer?: boolean) => {
    this.instance.defaults.headers.common['Authorization'] = isBearer
      ? 'Bearer ' + token
      : token;
  };
  get = async (url: string, config?: AxiosRequestConfig) => {
    try {
      const response = await this.instance.get(url, config);
      return new HTTPResponse(response.data, response.headers, response.status);
    } catch (error: any) {
      return new HTTPResponse(
        error.response.data,
        error.response.headers,
        error.response.status
      );
    }
  };
  post = async (url: string, data?: Object, config?: AxiosRequestConfig) => {
    try {
      const response = await this.instance.post(url, data, config);
      return new HTTPResponse(response.data, response.headers, response.status);
    } catch (error: any) {
      return new HTTPResponse(
        error.response.data,
        error.response.headers,
        error.response.status
      );
    }
  };
  put = async (url: string, data?: Object, config?: AxiosRequestConfig) => {
    try {
      const response = await this.instance.put(url, data, config);
      return new HTTPResponse(response.data, response.headers, response.status);
    } catch (error: any) {
      return new HTTPResponse(
        error.response.data,
        error.response.headers,
        error.response.status
      );
    }
  };
  delete = async (url: string, config?: AxiosRequestConfig) => {
    try {
      const response = await this.instance.delete(url, config);
      return new HTTPResponse(response.data, response.headers, response.status);
    } catch (error: any) {
      return new HTTPResponse(
        error.response.data,
        error.response.headers,
        error.response.status
      );
    }
  };
  patch = async (url: string, data?: Object, config?: AxiosRequestConfig) => {
    try {
      const response = await this.instance.patch(url, data, config);
      return new HTTPResponse(response.data, response.headers, response.status);
    } catch (error: any) {
      return new HTTPResponse(
        error.response.data,
        error.response.headers,
        error.response.status
      );
    }
  };
  head = async (url: string, config?: AxiosRequestConfig) => {
    try {
      const response = await this.instance.head(url, config);
      return new HTTPResponse(response.data, response.headers, response.status);
    } catch (error: any) {
      return new HTTPResponse(
        error.response.data,
        error.response.headers,
        error.response.status
      );
    }
  };
  options = async (url: string, config?: AxiosRequestConfig) => {
    try {
      const response = await this.instance.options(url, config);
      return new HTTPResponse(response.data, response.headers, response.status);
    } catch (error: any) {
      return new HTTPResponse(
        error.response.data,
        error.response.headers,
        error.response.status
      );
    }
  };
}

const request = new HTTP();

export { HTTP, request };
export type { AxiosRequestConfig, AxiosInstance };
