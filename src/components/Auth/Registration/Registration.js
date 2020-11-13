import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import operation from '../../../redux/operations/authOperations'

export const Registration = () => {
  const dispatch = useDispatch();
  const [name, setHandleName] = useState('');
  const [email, setHandleEmail] = useState('');
  const [password, setHandlePassword] = useState('');


  const hendleSubmit = e => {
    e.preventDefault();
    const newUser = {
      name, email, password
    }
    console.log(newUser, 'newUser');
    dispatch(operation.addNewUser(newUser));

  };

  
  return (
    <RegistrationFormWrapper>
      <RegistrationForm onSubmit={hendleSubmit}>
        <RegistrationTxt>Регистрация</RegistrationTxt>
        <RegistrationInputForm>
          <RegistrationInputTxt>Name</RegistrationInputTxt>
          <RegistrationInput
            value={name}
            onChange={e => setHandleName(e.target.value )}
            type="name"
            placeholder="Введите ваше имя"
            name="name"
            required
          />
        </RegistrationInputForm>

        <RegistrationInputForm>
          <RegistrationInputTxt>E-mail</RegistrationInputTxt>
          <RegistrationInput
            value={email}
            onChange={e => setHandleEmail(e.target.value )}
            type="email"
            placeholder="Введите ваш e-mail"
            name="email"
            required
          />
        </RegistrationInputForm>

        <RegistrationInputForm>
          <RegistrationInputTxt>Password</RegistrationInputTxt>
          <RegistrationInput
            value={password}
            onChange={e => setHandlePassword(e.target.value)}
            type="password"
            placeholder="Введите ваш пароль"
            name="password"
            required
          />
        </RegistrationInputForm>

        <RegistrationButtonBlock>
          <button>
            <p >Зарегистрироваться</p>
          </button>
        </RegistrationButtonBlock>
      </RegistrationForm>
    </RegistrationFormWrapper>
  );
};

const RegistrationFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 455px;
  border-radius: 8px;
  border: 1px solid grey;

  margin: 5px;
`;

const RegistrationForm = styled.form`
  position: relative;
`;

const RegistrationTxt = styled.p`
  font-family: 'Gilroy';
  font-size: 20px;
  font-weight: 800;
  text-align: center;
  margin-bottom: 30px;
`;

const RegistrationInputForm = styled.div``;

const RegistrationInput = styled.input`
  position: relative;
  width: 316px;
  height: 56px;
  border: 1px solid rgba(0, 0, 0, 0.36);
  box-sizing: border-box;
  border-radius: 4px;
  margin-bottom: 30px;

  ::placeholder {
    padding-left: 18px;
  }
`;

const RegistrationInputTxt = styled.p`
  font-family: 'Roboto';
  position: absolute;
  text-align: center;
  line-height: 14.06px;
  color: rgba(24, 25, 31, 0, 54);
  background: #fff;
  margin-left: 13px;
  font-size: 12px;
  font-weight: 400;
  width: 70px;
  background: red;
  z-index: 100;
`;

const RegistrationButtonBlock = styled.div`
  display: flex;
  justify-content: center;
  font-size: 14px;
  line-height: 20px;
  font-weight: 700;

  & button {
    width: 170px;
    height: 40px;
    background: #ff6c00;
    text-align: center;
    border-radius: 8px;
    border: none;
    color: #fff;
  }
`;
