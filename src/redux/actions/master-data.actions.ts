import { Dispatch } from 'redux';
import { ENDPOINT } from '../../constants/endpoint';
import BaseActions from '../base-actions';
import { MasterDataSlice } from '../reducers/master-data.slice';
import { UiSlice } from '../reducers/ui.slice';
import { BaseResponse } from '../../models/response/BaseResponse.ts';
import { IResListBrand } from '../../models/response/IResListBrand.ts';
import { IResListAllCategories } from '../../models/response/IResListAllCategories.ts';

export class MasterDataActions extends BaseActions {
  private actions = MasterDataSlice.actions;
  private ui = UiSlice.actions;

  getListCateogies() {
    return async (dispatch: Dispatch) => {
      dispatch(this.actions.listCategories({ loading: true, data: undefined }))
      dispatch(this.ui.loadingHeader(true))
      await this.httpService.GET(ENDPOINT.MASTER_DATA.LIST_CATEGOEIS())
        .then((res: BaseResponse<IResListAllCategories[]>) => {
          dispatch(this.actions.listCategories({ loading: true, data: res.data.response_data }))
          dispatch(this.ui.loadingHeader(false))
        })
        .catch(e => {
          dispatch(this.actions.listCategories({ loading: false, data: undefined }))
          dispatch(this.ui.loadingHeader(false))
          this.errorService.fetchApiError(e)
      })
    }
  }

  getDataBrand() {
    return async (dispatch: Dispatch) => {
      dispatch(this.ui.loadingHeader(true));
      dispatch(this.actions.listBrand({ loading: true, data: undefined }));
      return await this.httpService
        .GET(ENDPOINT.MASTER_DATA.LIST_ALL_BRAND())
        .then((res: BaseResponse<IResListBrand[]>) => {
          dispatch(this.actions.listBrand({ loading: false, data: res.data.response_data }));
          dispatch(this.ui.loadingHeader(false));
        })
        .catch((e) => {
          dispatch(this.ui.loadingHeader(false));
          dispatch(this.actions.listBrand({ loading: false, data: undefined }));
          this.errorService.fetchApiError(e);
        });
    };
  }
}
