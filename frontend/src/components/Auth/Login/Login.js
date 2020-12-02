import React from 'react';
import styled from 'styled-components';
import { Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';
import operation from '../../../redux/operations/authOperations';
import { loginFrontSchema } from '../utilsAuth/AuthFrontSchema';
import ErrorValidation from '../utilsAuth/ErrorValidation';
import funcMessage from '../utilsAuth/funcMessage';
import useMessageErr from '../hooks/useMessageErr';
import useDeviceSizes from '../../../hooks/useDeviceSizes';
import { device } from '../../../common/deviceSizes';
import {
  AuthForm,
  AuthTxt,
  AuthInputForm,
  AuthInputTxt,
  AuthInput,
  AuthButtonBlock,
  ErrMessage,
} from '../../../common/globalStyleComponents';

const Login = ({ closeModal }) => {
  const dispatch = useDispatch();
  const { isMobileDevice } = useDeviceSizes();
  const { messageErr, error } = useMessageErr();

  return (
    <AuthFormWrapperLogin>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={loginFrontSchema}
        onSubmit={async values => {
          const data = dispatch(operation.userLogin({ ...values }));

          data.then(response => {
            if (response) {
              return;
            } else {
              !isMobileDevice && closeModal();
            }
          });
        }}
      >
        {({ values, errors, touched, handleChange, handleBlur }) => (
          <Form>
            <AuthForm>
              <AuthTxt>Вход</AuthTxt>
              {error?.kindOfErr === 'Login' && (
                <ErrMessage>{messageErr}</ErrMessage>
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
                  borderErrColor={
                    error?.status === 404 || error?.status === 500
                      ? 'red'
                      : '#a3a3a3'
                  }
                />
                {(
                  <ErrorValidation
                    touched={touched.email}
                    message={errors.email}
                  />
                ) && funcMessage(errors.email)}
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
                  borderErrColor={
                    error?.status === 403 || error?.status === 500
                      ? 'red'
                      : '#a3a3a3'
                  }
                />
                {(
                  <ErrorValidation
                    touched={touched.password}
                    message={errors.password}
                  />
                ) && funcMessage(errors.password)}
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
