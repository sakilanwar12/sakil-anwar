import { TNullish } from "./common-api.types";

export type TApiError = {
  field: string;
  message: string;
};
export type TApiResponse<T> = {
  success: boolean;
  data: T;
  message: string;
  statusCode?: number;
  errors: TApiError[] | TNullish;
};

export function apiResponse<T>(params: {
  success: boolean;
  data?: T;
  message?: string;
  statusCode?: number;
  errors?: TApiError[] | TNullish;
}): TApiResponse<T | null> {
  return {
    success: params.success,
    data: params.data ?? null,
    message: params.message ?? "",
    statusCode: params.statusCode ?? (params.success ? 200 : 500),
    errors: params.errors ?? null,
  };
}
