import { useEffect, useState } from 'react';
import { IBlock } from '../../components/Editor';
import { ILabelValue } from '../../models/ILabelValue';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { MasterDataActions } from '../../redux/actions/master-data.actions';
import { IReqNewBlog } from '../../models/request/IReqNewBlog.ts';
import { useFormik } from 'formik';

import * as yup from 'yup';
export default function useNewBlogPage() {
  const dispatch = useAppDispatch();
  const masterDataActions = new MasterDataActions();
  const masterData = useAppSelector((state) => state.masterData);

  const [blockData, setBlockData] = useState<IBlock>([]);
  const [listCategories, setListCategories] = useState<ILabelValue<string>[]>([]);

  const initForm: IReqNewBlog = {
    categories_id: [],
    content: '',
    title: '',
  };

  const validationScheme = yup.object().shape({
    title: yup.string().required(),
    categories_id: yup.array().of(yup.string()).required(),
  });

  const formik = useFormik({
    initialValues: initForm,
    validationSchema: validationScheme,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  useEffect(() => {
    dispatch(masterDataActions.getListCateogies()).then();
  }, []);
  useEffect(() => {
    if (masterData?.listCategories?.data) {
      const data: ILabelValue<string>[] = masterData.listCategories.data.map((item) => {
        return {
          label: item.name,
          value: item.id,
        };
      });
      setListCategories(data);
    }
  }, [masterData]);

  function onSubmit() {
    console.log(JSON.stringify(blockData));
  }
  return { setBlockData, onSubmit, listCategories, formik };
}
