import React from 'react';
import { Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { registrationFrontSchema } from '../utilsAuth/AuthFrontSchema';
import useMessageErr from '../hooks/useMessageErr';
import ErrorValidation from '../utilsAuth/ErrorValidation';
import funcMessage from '../utilsAuth/funcMessage';
import operation from '../../../redux/operations/authOperations';
import useUserInfoAuth from '../../MainPage/hooks/useUserInfoAuth';
import useDeviceSizes from '../../../hooks/useDeviceSizes';
import {
  AuthFormWrapper,
  AuthForm,
  AuthTxt,
  AuthInputForm,
  AuthInputTxt,
  AuthInput,
  AuthButtonBlock,
  ErrMessage,
} from '../../../common/globalStyleComponents';
import useReduxState from '../../../hooks/useReduxState';

const Registration = ({ closeModal }) => {
  const dispatch = useDispatch();
  const { isMobileDevice } = useDeviceSizes();
  const { userID } = useReduxState();
  const [userInfoRegistr] = useUserInfoAuth(userID ? true : false);
  const { messageErr, error } = useMessageErr();

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
          const data = dispatch(operation.userRegistration({ ...values }));
          data.then(response => {
            if (response) {
              return;
            } else {
              !isMobileDevice && userInfoRegistr && closeModal();
            }
          });
        }}
      >
        {({ values, errors, touched, handleChange, handleBlur }) => (
          <Form>
            <AuthForm>
              <AuthTxt>
                {isMobileDevice ? 'Готовы подписаться?' : 'Регистрация'}
              </AuthTxt>
              {error?.kindOfErr === 'Register' && (
                <ErrMessage positionTop={'-24px'}>{messageErr}</ErrMessage>
              )}
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
                  borderErrColor={'#a3a3a3'}
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
                  borderErrColor={error?.status === 409 ? 'red' : '#a3a3a3'}
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
                  borderErrColor={'#a3a3a3'}
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
