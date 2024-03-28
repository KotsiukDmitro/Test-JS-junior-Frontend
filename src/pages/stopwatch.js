import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { useDataList } from '../common/hooks';
import './pages.css';

const KEY_S = 'KeyS';
const KEY_R = 'KeyR';
const KEY_L = 'KeyL';

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const { dataList, setDataList, deleteData } = useDataList([]);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => setTime(time + 1), 10);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, time]);

  const getTime = (value) => {
    return Math.floor(value).toString().padStart(2, '0');
  };
  const getHours = (value) => {
    return getTime(value / 360000);
  };
  const getMinutes = (value) => {
    return getTime((value % 360000) / 6000);
  };
  const getSeconds = (value) => {
    return getTime((value % 6000) / 100);
  };
  const getMilliseconds = (value) => {
    return (value % 100).toString().padStart(2, '0');
  };

  const hours = getHours(time);
  const minutes = getMinutes(time);
  const seconds = getSeconds(time);
  const milliseconds = getMilliseconds(time);

  const startStop = () => {
    setIsRunning(!isRunning);
  };

  const reset = () => {
    setTime(0);
    setDataList([]);
    setTime(0);
    setIsRunning(false);
  };

  const addData = () => {
    if (time === 0) {
      return false;
    }
    setDataList([...dataList, time]);
  };

  const savedHandler = useRef();
  savedHandler.current = (event) => {
    switch (event.code) {
      case KEY_S:
        startStop();
        break;
      case KEY_R:
        reset();
        break;
      case KEY_L:
        addData();
        break;

      default:
        return false;
    }
  };

  useEffect(() => {
    const eventListener = (event) => savedHandler.current(event);
    const isSupported = window.addEventListener;
    if (!isSupported) return;
    window.addEventListener('keydown', eventListener);
    return () => {
      window.removeEventListener('keydown', eventListener);
    };
  }, []);

  return (
    <>
      <h2>Stopwatch</h2>

      <div>
        <div className="timer">
          {hours}:{minutes}:{seconds}:{milliseconds}
        </div>
        <button className="btnStart" onClick={startStop}>
          {isRunning ? 'STOP' : 'START'}
        </button>
        <button className="btnAdd" onClick={addData}>
          ADD
        </button>
      </div>

      <ul>
        {' '}
        {dataList.map((item, index) => {
          return (
            <li className="item" key={item + index}>
              <span className="item-result">
                {getHours(item)}:{getMinutes(item)}:{getSeconds(item)}:{getMilliseconds(item)}
              </span>
              <button className="btnDelete" onClick={() => deleteData(index)}>
                Delete
              </button>
            </li>
          );
        })}
      </ul>
      <button className="btnReset" onClick={reset}>
        RESET
      </button>
    </>
  );
};

export default Stopwatch;
