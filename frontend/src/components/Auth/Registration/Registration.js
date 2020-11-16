import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import device from '../../../common/deviceSizes';
// import styled from 'styled-components';
import {
  AuthFormWrapper,
  AuthForm,
  AuthTxt,
  AuthInputForm,
  AuthInputTxt,
  AuthInput,
  AuthButtonBlock,
} from '../../../common/globalStyleComponents';
import operation from '../../../redux/operations/authOperations';
import modalBackDrop from '../../ModalBackDrop/ModalBackDrop';


const Registration = ({close}) => {
  const dispatch = useDispatch();
  const [username, setHandelName] = useState('');
  const [email, setHandelEmail] = useState('');
  const [password, setHandelPassword] = useState('');


 

  const handelSubmit = e => {
    e.preventDefault();
    const newUser = {
      username,
      email,
      password,
    };
    console.log(newUser, 'newUser');
    dispatch(operation.userRegistration(newUser));
    setHandelName('');
    setHandelEmail('');
    setHandelPassword('');
    close();
  };
 
  return (
    <AuthFormWrapper>
      <AuthForm onSubmit={handelSubmit}>
        <AuthTxt>Регистрация</AuthTxt>

        <AuthInputForm>
          <AuthInputTxt>Name</AuthInputTxt>
          <AuthInput
            value={username}
            onChange={e => setHandelName(e.target.value)}
            type="name"
            placeholder="Введите ваше имя"
            name="name"
            required
          />
        </AuthInputForm>

        <AuthInputForm>
          <AuthInputTxt>E-mail</AuthInputTxt>
          <AuthInput
            value={email}
            onChange={e => setHandelEmail(e.target.value)}
            type="email"
            placeholder="Введите ваш e-mail"
            name="email"
            required
          />
       
        </AuthInputForm>

        <AuthInputForm>
          <AuthInputTxt>Password</AuthInputTxt>
          <AuthInput
            value={password}
            onChange={e => setHandelPassword(e.target.value)}
            type="password"
            placeholder="Введите ваш пароль"
            name="password"
            required
          />
          
        </AuthInputForm>

        <AuthButtonBlock>
          <button>
            <p>Зарегистрироваться</p>
          </button>
        </AuthButtonBlock>
      </AuthForm>
    </AuthFormWrapper>
  );
};

export default modalBackDrop(Registration);
