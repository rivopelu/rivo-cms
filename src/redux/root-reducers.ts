import { BlogSlice } from './reducers/blog.slice';
import { MasterDataSlice } from './reducers/master-data.slice';

export const combineReducers = {
  masterData: MasterDataSlice.reducer,
  blog: BlogSlice.reducer,
};
