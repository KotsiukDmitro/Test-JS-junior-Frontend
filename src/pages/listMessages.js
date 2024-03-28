import React from 'react';
import { useState } from 'react';

import '../App.css';

const ListMessages = () => {
  const listName = ['Dmitriy', 'Alexander', 'Nastya', 'Vladislav', 'Ivan'];

  const [messagesList, setMessagesList] = useState(listName);

  const deleteMessage = (indexTodo) => {
    const del = messagesList.filter((elem, index) => {
      return index !== indexTodo;
    });
    setMessagesList(del);
  };

  return (
    <>
      <h2>List of messages: </h2>
      <table className="massages-list-table">
        <tbody>
          {messagesList.map((name, index) => {
            return (
              <tr key={name} className="">
                <td className="cell-title">
                  {' '}
                  <span className="text">{name}</span>
                </td>
                <td className="cell-active">
                  <button onClick={() => deleteMessage(index)} className="btnDelete">
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
