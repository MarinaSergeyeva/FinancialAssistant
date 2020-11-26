import React from 'react';
import { useDispatch } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { Formik, Form } from 'formik';
import operation from '../../../redux/operations/authOperations';
import { registrationFrontSchema } from '../utilsAuth/AuthFrontSchema';
import ErrorValidation from '../utilsAuth/ErrorValidation';
import funcMessage from '../utilsAuth/funcMessage';
import device from '../../../common/deviceSizes';

import {
  AuthFormWrapper,
  AuthForm,
  AuthTxt,
  AuthInputForm,
  AuthInputTxt,
  AuthInput,
  AuthButtonBlock,
} from '../../../common/globalStyleComponents';

const Registration = ({ closeModal }) => {
  const dispatch = useDispatch();
  const isOnMobile = useMediaQuery({
    query: device.mobile,
  });

  return (
    <AuthFormWrapper>
      <Formik
        initialValues={{
          username: '',
          email: '',
          password: '',
        }}
        validationSchema={registrationFrontSchema}
        onSubmit={async values => {
          dispatch(await operation.userRegistration({ ...values }));
          !isOnMobile && closeModal();
        }}
      >
        {({ values, errors, touched, handleChange, handleBlur }) => (
          <Form>
            <AuthForm>
              <AuthTxt>
                {isOnMobile ? 'Готовы подписаться?' : 'Регистрация'}
              </AuthTxt>

              <AuthInputForm>
                <AuthInputTxt>Name</AuthInputTxt>
                <AuthInput
                  value={values.username}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="text"
                  placeholder="Введите ваше имя"
                  name="username"
                  id="username"
                />
                {(
                  <ErrorValidation
                    touched={touched.username}
                    message={errors.username}
                  />
                ) && funcMessage(errors.username)}
              </AuthInputForm>

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
                  <p>Зарегистрироваться</p>
                </button>
              </AuthButtonBlock>
            </AuthForm>
          </Form>
        )}
      </Formik>
    </AuthFormWrapper>
  );
};

export default Registration;
