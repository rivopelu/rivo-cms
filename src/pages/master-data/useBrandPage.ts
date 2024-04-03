import { useEffect, useState } from 'react';
import { IResListBrand } from '../../models/response/IResListBrand.ts';
import { useAppDispatch, useAppSelector } from '../../redux/store.ts';
import { MasterDataActions } from '../../redux/actions/master-data.actions.ts';
import { IReqCreateBrand } from '../../models/request/IReqCreateBrand.ts';

import * as yup from 'yup';
import { useFormik } from 'formik';
import { HttpService } from '../../services/http.service.ts';
import { ENDPOINT } from '../../constants/endpoint.ts';
export function useBrandPage() {
  const dispatch = useAppDispatch();
  const masterDataActions = new MasterDataActions();
  const httpService = new HttpService();

  const masterData = useAppSelector((state) => state.masterData);
  const [listBrand, setListBrand] = useState<IResListBrand[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [showModalBody, setShowModalBody] = useState<boolean>(false);
  const [loadingCreated, setLoadingCreated] = useState<boolean>(false);
  const initForm: IReqCreateBrand = {
    description: '',
    name: '',
    logo: '',
    url: '',
  };

  const validationSheme = yup.object().shape({
    description: yup.string().required(),
    name: yup.string().required(),
    url: yup.string().required().url(),
    logo: yup.string().required(),
  });

  const formik = useFormik({
    initialValues: initForm,
    validationSchema: validationSheme,
    onSubmit: async (values) => {
      setLoadingCreated(true);
      httpService
        .POST(ENDPOINT.MASTER_DATA.CREATE_BRAND(), values)
        .then(() => {
          setLoadingCreated(false);
          setShowModalBody(false);
          formik.resetForm();
          dispatch(masterDataActions.getDataBrand());
        })
        .catch((e) => {
          console.error(e);
          setLoadingCreated(false);
        });
    },
  });
  useEffect(() => {
    dispatch(masterDataActions.getDataBrand()).then();
  }, []);

  useEffect(() => {
    if (masterData?.listBrand?.data) {
      setListBrand(masterData?.listBrand?.data);
    }
    setLoading(masterData?.listBrand?.loading || false);
  }, [masterData?.listBrand?.data]);

  function onClosePopup() {
    setShowModalBody(false);
  }

  return { listBrand, masterData, loading, setShowModalBody, showModalBody, loadingCreated, formik, onClosePopup };
}
