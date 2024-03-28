import { useState } from 'react';

export const useDataList = (list = []) => {
  const [dataList, setDataList] = useState(list);

  const deleteData = (indexData) => {
    const del = dataList.filter((elem, index) => {
      return index !== indexData;
    });
    setDataList(del);
  };

  return {
    dataList,
    setDataList,
    deleteData
  };
};
