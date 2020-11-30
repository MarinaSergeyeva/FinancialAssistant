import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form } from 'formik';
import styled from 'styled-components';
import operation from '../../../redux/operations/authOperations';
import { loginFrontSchema } from '../utilsAuth/AuthFrontSchema';
import ErrorValidation from '../utilsAuth/ErrorValidation';
import funcMessage from '../utilsAuth/funcMessage';

import device from '../../../common/deviceSizes';
import {
  AuthForm,
  AuthTxt,
  AuthInputForm,
  AuthInputTxt,
  AuthInput,
  AuthButtonBlock,
  ErrMessage
} from '../../../common/globalStyleComponents';
import { getError } from '../../../redux/selectors/errorSelector';
import funcErrTranslator from '../utilsAuth/funcErrTranslator';

const Login = ({ closeModal }) => {
  const dispatch = useDispatch();
  const isOnMobile = useMediaQuery({
    query: device.mobile,
  });
  const [state, setstate] = useState(null)
  const errState = useSelector(state => getError(state));
  const [messageErrLogin, setMessageErrlogin] = useState(null);

  const MessageErrlogin =  () => {
    const message = funcErrTranslator(Number(errState?.status));
    console.log(message);
    setMessageErrlogin(message);
  };
  useEffect(() => {
    MessageErrlogin();
   
  }, [errState]);

  useEffect(() => {
    console.log(state,"state")
  }, [])


  return (
    <AuthFormWrapperLogin>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}

        validationSchema={loginFrontSchema}
        onSubmit={async (values) => {
        
          dispatch(await operation.userLogin({ ...values }));
          !isOnMobile && messageErrLogin && closeModal();
          
        }}
      >
        {({ values, errors, touched, handleChange, handleBlur }) => (
          <Form>
            <AuthForm>
              <AuthTxt>Вход</AuthTxt>
              {errState?.kindOfErr === 'Login' &&(
                <ErrMessage>{messageErrLogin}</ErrMessage>
              )}
              <AuthInputForm>
                <AuthInputTxt>E-mail</AuthInputTxt>
                <AuthInput
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="email"
                  placeholder="Введите ваш e-mail"
                  name="email"
                  id="email"
                  borderErrColor={errState?.status === 404 || errState?.status === 500 ? 'red' : '#a3a3a3'}
                  touched={setstate("rjcyekcz")}
                />
                {(
                  <ErrorValidation
                    touched={touched.email}
                    message={errors.email}
                  />
                ) && funcMessage(errors.email)}
                 {/* {errState?.status === 404 && errState?.kindOfErr === 'Login' && (
                  <ErrMessage>{messageErr}</ErrMessage>
                )} */}
              </AuthInputForm>

              <AuthInputForm>
                <AuthInputTxt>Password</AuthInputTxt>
                <AuthInput
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="password"
                  placeholder="Введите ваш пароль"
                  name="password"
                  id="password"
                  borderErrColor={errState?.status === 404 || errState?.status === 500 ? 'red' : '#a3a3a3'}

                />
                {(
                  <ErrorValidation
                    touched={touched.password}
                    message={errors.password}
                  />
                ) && funcMessage(errors.password)}
                {/* {errState?.status === 403 && errState?.kindOfErr === 'Login' && (
                  <ErrMessage>{messageErr}</ErrMessage>
                )} */}
              </AuthInputForm>

              <AuthButtonBlock>
                <button type="submit">
                  <p>Войти</p>
                </button>
              </AuthButtonBlock>
            </AuthForm>
          </Form>
        )}
      </Formik>
    </AuthFormWrapperLogin>
  );
};
const AuthFormWrapperLogin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 400px;
  height: 354px;
  border-radius: 8px;
  background: #fff;
  margin: 5px;
  box-shadow: 0px 24px 38px rgba(0, 0, 0, 0.14),
    0px 9px 46px rgba(0, 0, 0, 0.12), 0px 11px 15px rgba(0, 0, 0, 0.2);

  @media ${device.mobile} {
    box-shadow: none;
    margin: 30px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 276px;
  }
`;


export default Login;
