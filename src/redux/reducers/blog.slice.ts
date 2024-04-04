import { createSlice } from '@reduxjs/toolkit';
import { BasePayload, BasePayloadPaginated, IPayloadData, IPayloadDataPaginated } from '../../models/response/BaseResponse';
import { IResListBLog } from '../../models/response/IResListBlog';
import { IResDetailBlog } from '../../models/response/IResDetailBlog';

const initState: IBlogReducers = {};

export const BlogSlice = createSlice({
  initialState: initState,
  name: 'blog',
  reducers: {
    listBlog: (state: IBlogReducers, actions: BasePayloadPaginated<IResListBLog>) => {
      state.listBLog = actions.payload;
    },
    detailBlog: (state: IBlogReducers, actions: BasePayload<IResDetailBlog>) => {
      state.detailBLog = actions.payload;
    },
  },
});

interface IBlogReducers {
  listBLog?: IPayloadDataPaginated<IResListBLog>;
  detailBLog?: IPayloadData<IResDetailBlog>;
}
