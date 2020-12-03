import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import MainPage from '../../components/MainPage/MainPage';
import action from '../../redux/actions/authAction';

const AuthPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    const token = new URLSearchParams(location.search).get('token');
    token && dispatch(action.loginSuccess({ token }));
  }, [location.search, dispatch]);

  return (
      <MainPage />
  );
};

export default AuthPage;
