import { useEffect, useState } from 'react';
import { IResListAllCategories } from '../../models/response/IResListAllCategories';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { MasterDataActions } from '../../redux/actions/master-data.actions';
import { HttpService } from '../../services/http.service';
import ErrorService from '../../services/error.service';
import { ENDPOINT } from '../../constants/endpoint';

export default function useCategoriesPage() {
  const dispatch = useAppDispatch();
  const httpService = new HttpService();
  const errorService = new ErrorService();
  const masterDataActions = new MasterDataActions();
  const masterData = useAppSelector((state) => state.masterData);
  const [dataList, setDataList] = useState<IResListAllCategories[]>([]);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>('');
  const [loadingCreate, setLoadingCreate] = useState<boolean>(false);

  useEffect(() => {
    dispatch(masterDataActions.getListCateogies());
  }, []);

  useEffect(() => {
    if (masterData?.listCategories?.data) {
      setDataList(masterData?.listCategories?.data);
    }
  }, [masterData.listCategories]);

  function onCloseModal() {
    setOpenModal(false);
  }

  function onSubmit() {
    setLoadingCreate(true);
    httpService
      .POST(ENDPOINT.MASTER_DATA.CREATE_CATEGORY(), { name: inputValue })
      .then(() => {
        setLoadingCreate(false);
        setInputValue('');
        setOpenModal(false);
        dispatch(masterDataActions.getListCateogies());
      })
      .catch((e) => {
        setLoadingCreate(false);
        errorService.fetchApiError(e);
      });
  }

  return { dataList, openModal, setOpenModal, onCloseModal, inputValue, setInputValue, onSubmit, loadingCreate };
}
