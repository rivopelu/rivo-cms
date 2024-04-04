import { Dispatch } from 'redux';
import { ENDPOINT } from '../../constants/endpoint';
import { BasePayload, BaseResponse, BaseResponsePaginated } from '../../models/response/BaseResponse';
import { IResListBLog } from '../../models/response/IResListBlog';
import BaseActions from '../base-actions';
import { BlogSlice } from '../reducers/blog.slice';
import { UiSlice } from '../reducers/ui.slice';
import { IResDetailBlog } from '../../models/response/IResDetailBlog';

export class BlogActions extends BaseActions {
  private actions = BlogSlice.actions;
  private ui = UiSlice.actions;

  getListBlog(param?: string) {
    return async (dispatch: Dispatch) => {
      dispatch(this.actions.listBlog({ loading: true, data: undefined }));
      dispatch(this.ui.loadingHeader(true));
      await this.httpService
        .GET(ENDPOINT.BLOG.LIST_ALL() + (param || ''))
        .then((res: BaseResponsePaginated<IResListBLog>) => {
          dispatch(this.actions.listBlog({ loading: false, data: res.data.response_data }));
          dispatch(this.ui.loadingHeader(false));
        })
        .catch((e) => {
          dispatch(this.ui.loadingHeader(false));
          dispatch(this.actions.listBlog({ loading: false, data: undefined }));
          this.errorService.fetchApiError(e);
        });
    };
  }

  getDetailBlog(slug: string) {
    return async (dispatch: Dispatch) => {
      dispatch(this.actions.detailBlog({ loading: true, data: undefined }));
      dispatch(this.ui.loadingHeader(true));
      await this.httpService
        .GET(ENDPOINT.BLOG.DETAIL(slug))
        .then((res: BaseResponse<IResDetailBlog>) => {
          dispatch(this.actions.detailBlog({ loading: false, data: res.data.response_data }));
          dispatch(this.ui.loadingHeader(false));
        })
        .catch((e) => {
          dispatch(this.ui.loadingHeader(false));
          dispatch(this.actions.detailBlog({ loading: false, data: undefined }));
          this.errorService.fetchApiError(e);
        });
    };
  }
}
