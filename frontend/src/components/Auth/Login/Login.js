import React, { useState } from 'react'
import modalBackDrop from '../../ModalBackDrop/ModalBackDrop'
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
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

 const Login = ({close}) => {

    const dispatch = useDispatch();
    const [email, setHandelEmail] = useState('');
    const [password, setHandelPassword] = useState('');
  
    const handelSubmit = e => {
      e.preventDefault();
      const newUser = {
        email,
        password,
      };
      console.log(newUser, 'newUser');
      dispatch(operation.userLogin(newUser));
      setHandelEmail('');
      setHandelPassword('');
      close();
    };
  
    return (
      <AuthFormWrapperLogin>
        <AuthForm onSubmit={handelSubmit}>
          <AuthTxt>Вход</AuthTxt>
  
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
              <p>Вход</p>
            </button>
          </AuthButtonBlock>
        </AuthForm>
      </AuthFormWrapperLogin>
    );
  };
  const AuthFormWrapperLogin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 354px;
  border-radius: 8px;
  background: #fff;
  margin: 5px;
  box-shadow: 0px 24px 38px rgba(0, 0, 0, 0.14), 0px 9px 46px rgba(0, 0, 0, 0.12), 0px 11px 15px rgba(0, 0, 0, 0.2);
  `
export default modalBackDrop(Login)
