import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { BasePayload, IPayloadData } from "../../models/response/BaseResponse";
import { IResListBrand } from "../../models/response/IResListBrand";

const initState: IMasterDataReducers = {}

export const MasterDataSlice = createSlice({
    name: "master-data",
    initialState : initState,
    reducers: {
        listBrand: (state: IMasterDataReducers, actions: BasePayload<IResListBrand[]>) => {
            state.listBrand = {
                data: actions.payload?.data,
                loading : actions.payload?.loading
            }
        }
    }
})


export interface IMasterDataReducers {
    listBrand ?: IPayloadData<IResListBrand[]>
}