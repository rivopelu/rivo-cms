import { useEffect, useState } from 'react';
import { IResListBrand } from '../../models/response/IResListBrand.ts';
import { useAppDispatch, useAppSelector } from '../../redux/store.ts';
import { MasterDataActions } from '../../redux/actions/master-data.actions.ts';

export function useBrandPage() {
  const dispatch = useAppDispatch();
  const masterDataActions = new MasterDataActions();

  const masterData = useAppSelector((state) => state.masterData);
  const [listBrand, setListBrand] = useState<IResListBrand[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    dispatch(masterDataActions.getDataBrand()).then();
  }, []);

  useEffect(() => {
    if (masterData?.listBrand?.data) {
      setListBrand(masterData?.listBrand?.data);
    }
    setLoading(masterData?.listBrand?.loading || false);
  }, [masterData?.listBrand?.data]);

  return { listBrand, masterData, loading };
}
