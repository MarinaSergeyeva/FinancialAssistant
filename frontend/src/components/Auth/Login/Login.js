import React from 'react';
import { Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';
import operation from '../../../redux/operations/authOperations';
import { loginFrontSchema } from '../utilsAuth/AuthFrontSchema';
import ErrorValidation from '../utilsAuth/ErrorValidation';
import funcMessage from '../utilsAuth/funcMessage';
import useMessageErr from '../hooks/useMessageErr';
import useDeviceSizes from '../../../hooks/useDeviceSizes';
import {
  AuthForm,
  AuthTxt,
  AuthInputForm,
  AuthInputTxt,
  AuthInput,
  AuthButtonBlock,
  ErrMessage,
} from '../../../common/globalStyleComponents';
import { AuthFormWrapperLogin } from './LoginStyle';

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
        onSubmit={values => {
          dispatch(operation.userLogin({ ...values })).then(response => {
            console.log('response', response)
            if (response) return;
            !isMobileDevice && closeModal();
          });
        }}
      >
        {({ values, errors, touched, handleChange, handleBlur }) => (
          <Form>
            <AuthForm>
              <AuthTxt>Вход</AuthTxt>
              {error?.kindOfErr === 'Login' && (
                <ErrMessage positionTop={'25px'}>{messageErr}</ErrMessage>
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

export default Login;
