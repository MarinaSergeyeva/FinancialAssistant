import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { Formik, Form } from 'formik';
import operation from '../../../redux/operations/authOperations';
import { registrationFrontSchema } from '../utilsAuth/AuthFrontSchema';
import ErrorValidation from '../utilsAuth/ErrorValidation';
import funcMessage from '../utilsAuth/funcMessage';
import device from '../../../common/deviceSizes';
import setError from '../../../redux/actions/errorActions';
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
import { getError } from '../../../redux/selectors/errorSelector';
import funcErrTranslator from '../utilsAuth/funcErrTranslator';

const Registration = ({ closeModal }) => {
  const dispatch = useDispatch();

  ///USERNAME AFTER REGISTR
  const userInfo = useSelector(state => state.auth.username);
  const [userInfoRegistr, setUserInfoRegistr] = useState(
    userInfo ? true : false,
  );

  useEffect(() => {
    if (userInfo) {
      setUserInfoRegistr(true);
    } else {
      setUserInfoRegistr(false);
    }
  }, [userInfo]);

  ///ERROR-AUTH
  const errState = useSelector(state => getError(state));
  const [messageErr, setMessageErr] = useState('');

  const MessageErr = errState => {
    const message = funcErrTranslator(Number(errState?.status));
    setMessageErr(message);
  };

  useEffect(() => {
    if (messageErr) {
      console.log('is mistake');
      console.log(messageErr, 'messageErr');
    }
  }, [errState]);

  useEffect(() => {
    MessageErr(errState);
    console.log(errState, 'errState');
  }, [errState]);

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
          const data = dispatch( operation.userRegistration({ ...values }));
          data.then((response)=>{ 
            console.log(response, "RES")
            if(response){
            return
            }else{
              !isOnMobile && userInfoRegistr && closeModal();
            }
            }).catch(()=>!isOnMobile && closeModal())
         
          // dispatch(await setError.setError({ kindOfErr: '', status: 0, statusText: '' }));
        }}
      >
        {({ values, errors, touched, handleChange, handleBlur }) => (
          <Form>
            <AuthForm>
              <AuthTxt>
                {isOnMobile ? 'Готовы подписаться?' : 'Регистрация'}
              </AuthTxt>
              {errState?.kindOfErr === 'Register' && (
                <ErrMessage>{messageErr}</ErrMessage>
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
                  borderErrColor={errState?.status === 409 ? 'red' : '#a3a3a3'}
                />
                {(
                  <ErrorValidation
                    touched={touched.email}
                    message={errors.email}
                  />
                ) && funcMessage(errors.email)}
                {/* {(errState?.status === 409) && errState?.kindOfErr === 'Register' && (
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
                  borderErrColor={'#a3a3a3'}
                />
                {(
                  <ErrorValidation
                    touched={touched.password}
                    message={errors.password}
                  />
                ) && funcMessage(errors.password)}
                {/* {errState?.status === 403 && errState?.kindOfErr === 'Register' && (
                  <ErrMessage>{messageErr}</ErrMessage>
                )} */}
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
