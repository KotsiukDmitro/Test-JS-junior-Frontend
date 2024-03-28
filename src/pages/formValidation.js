import React from 'react';
import { useState } from 'react';
import './pages.css';

const Form = () => {
  const listEmail = ['facebook@i.ua', 'instagram@i.ua', 'mymail@i.ua'];

  const [error, setError] = useState({});

  // Валидация применяется при отправке формы

  const submit = (event) => {
    event.preventDefault();

    const errors = {};
    if (change.firstName === '') {
      errors.firstName = 'Поле не может быть пустым';
    }

    if (change.password.length < 8) {
      errors.password = 'Поле не может быть пустым и должно содержать не менее 8 символов';
    }
    const PATTERN_PASSWORD = /\W+/;
    const passwordValid = PATTERN_PASSWORD.test(change.password);
    if (!passwordValid) {
      errors.password = 'Пароль должен содержать спец символ';
    }
    const PATTERN_EMAIL =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const emailValid = PATTERN_EMAIL.test(change.email);
    if (!emailValid) {
      errors.email = 'Поле не заполнено либо заполнено не верно';
    }

    if (listEmail.includes(change.email)) {
      errors.email = 'Email не уникальный';
    }

    if (!change.nda) {
      errors.nda = true;
    }

    setError(errors);
    if (Object.keys(error).length) {
      alert('форма не отправленна, заполните обязательные поля');
      return false;
    }
  };

  const form = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    nda: ''
  };

  let [change, setChange] = useState(form);

  const inputChange = (event) => {
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    const name = event.target.name;
    setChange({ ...change, [name]: value });
  };

  return (
    <form onSubmit={submit}>
      <div className="formGroup">
        <label className="formLabel">First name*</label>
        <input
          className={error.firstName ? 'formInput errorInput' : 'formInput'}
          type="text"
          name="firstName"
          value={change.firstName}
          onChange={inputChange}
          placeholder="enter your first name"
        />
        {error.firstName && <p className="textError">{error.firstName}</p>}
      </div>

      <div className="formGroup">
        <label className="formLabel">Last name</label>
        <input
          className="formInput"
          type="text"
          name="lastName"
          value={change.lastName}
          onChange={inputChange}
          placeholder="enter your last name"
        />
      </div>

      <div className="formGroup">
        <label className="formLabel">Email*</label>
        <input
          className={error.email ? 'formInput errorInput' : 'formInput'}
          type="text"
          name="email"
          value={change.email}
          onChange={inputChange}
          placeholder="enter your email"
        />
        {error.email && <p className="textError">{error.email}</p>}
      </div>

      <div className="formGroup">
        <label className="formLabel">Password*</label>
        <input
          className={error.password ? 'formInput errorInput' : 'formInput'}
          type="password"
          name="password"
          value={change.password}
          onChange={inputChange}
          placeholder="enter your password"
        />
        {error.password && <p className="textError">{error.password}</p>}
      </div>

      <div>
        <label className="formLabel">
          <input className="formCheckbox" type="checkbox" name="nda" onChange={inputChange} />
          Send me NDA*
        </label>
        {error.nda && <p className="textError">'Необходимо принять согласие'</p>}
      </div>
      <div>
        <input className="btn-submit" type="submit" value="create"></input>
      </div>
    </form>
  );
};

export default Form;
