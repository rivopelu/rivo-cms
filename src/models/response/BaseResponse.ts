import { PayloadAction } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';

export interface IBreadcrumbData {
  title: string;
  path?: string;
}

export type BasePayload<T> = PayloadAction<IBasePayload<T>>;
export type BasePayloadPaginated<T> = PayloadAction<IBasePayloadPaginated<T>>;

interface IBasePayload<T> {
  data?: T;
  loading?: boolean;
  isNotFound?: boolean;
  errorMessage?: string;
}

interface IBasePayloadPaginated<T> {
  data?: T[];
  loading?: boolean;
  paginated_data?: IResultPaginatedData;
}

export interface IPayloadData<T> {
  data?: T;
  loading?: boolean;
  isNotFound?: boolean;
}

export interface IPayloadDataPaginated<T> {
  data?: T[];
  paginated_data?: IResultPaginatedData;
  loading?: boolean;
}

export interface IPayloadSuccess {
  success?: boolean;
  loading?: boolean;
  notFound?: boolean;
  errorMessage?: string;
}

export interface IPaginatedParams {
  page: number;
  size: number;
  total_data: number;
  sort?: string;
}

export const defaultPaginatedData: IPaginatedParams = {
  page: 0,
  size: 25,
  total_data: 0,
};

export interface IHeaderTabs {
  title: string;
  idx: number;
  icon?: string;
  activeIcons?: string;
}

interface rootResponse<T> {
  response_data: T;
}

interface rootResponsePaginated<T> {
  response_data: T[];
  current_page: number;
  total_page: number;
  total_data: number;
  page_size: number;
}

export interface IResultPaginatedData {
  current_page: number;
  total_page: number;
  total_data: number;
  page_size: number;
}

export type BaseResponse<T> = AxiosResponse<rootResponse<T>>;
export type BaseResponsePaginated<T> = AxiosResponse<rootResponsePaginated<T>>;
