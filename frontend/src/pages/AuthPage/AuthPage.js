import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import MainPage from '../../components/MainPage/MainPage';
import action from '../../redux/actions/authAction';
import { useDispatch } from 'react-redux';

const AuthPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    const token = new URLSearchParams(location.search).get('token');
    token && dispatch(action.loginSuccess({ token }));
  }, [location.search]);

  return (
    <>
      <MainPage />
    </>
  );
};

export default AuthPage;
