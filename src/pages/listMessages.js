import React from 'react';
import { useDataList } from '../common/hooks';
import '../App.css';

const ListMessages = () => {
  const listName = ['Dmitriy', 'Alexander', 'Nastya', 'Vladislav', 'Ivan'];

  const { dataList, deleteData } = useDataList(listName);

  return (
    <>
      <h2>List of messages: </h2>
      <table className="massages-list-table">
        <tbody>
          {dataList.map((name, index) => {
            return (
              <tr key={name} className="">
                <td className="cell-title">
                  {' '}
                  <span className="text">{name}</span>
                </td>
                <td className="cell-active">
                  <button onClick={() => deleteData(index)} className="btnDelete">
                    delete
                  </button>{' '}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default ListMessages;
