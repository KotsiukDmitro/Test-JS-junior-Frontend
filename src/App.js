import React from 'react';
import { Route, Link, Routes } from 'react-router-dom';
import Form from './pages/formValidation';
import ListMessages from './pages/listMessages';
import Stopwatch from './pages/stopwatch';
import './App.css';

const App = () => {
  return (
    <div className="container">
      <h1 className='title'>Тестирование Коцюк Дмитрий на JS Frontend, junior</h1>
      <div className='container-body'>
        <h3 className='task-list'>task list:</h3>
        <div className='list'>
          <Link to='/messages' className='btn'>list of messages</Link>
          <Link to='/stopwatch' className='btn'>stopwatch</Link>
          <Link to='/form' className='btn'>form validation</Link>
        </div>
        <Routes>
          <Route path='/form' element={<Form />} />
          <Route path='/messages' element={<ListMessages />} />
          <Route path='/stopwatch' element={<Stopwatch />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
