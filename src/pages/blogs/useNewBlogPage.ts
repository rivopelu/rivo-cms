import { useEffect, useState } from 'react';
import { IBlock } from '../../components/Editor';
import { ILabelValue } from '../../models/ILabelValue';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { MasterDataActions } from '../../redux/actions/master-data.actions';

export default function useNewBlogPage() {
  const dispatch = useAppDispatch();
  const masterDataActions = new MasterDataActions();
  const masterData = useAppSelector((state) => state.masterData);

  const [blockData, setBlockData] = useState<IBlock>([]);
  const [listCategories, setListCategoris] = useState<ILabelValue<string>[]>([]);

  useEffect(() => {
    dispatch(masterDataActions.getListCateogies());
  }, []);
  useEffect(() => {
    if (masterData?.listCategories?.data) {
      const data: ILabelValue<string>[] = masterData.listCategories.data.map((item) => {
        return {
          label: item.name,
          value: item.id,
        };
      });
      setListCategoris(data);
    }
  }, [masterData]);

  function onSubmit() {
    console.log(JSON.stringify(blockData));
  }
  return { setBlockData, onSubmit, listCategories };
}
