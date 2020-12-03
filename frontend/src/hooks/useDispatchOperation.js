import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const useDispatchOperation = (param, operation) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operation());
  }, [dispatch, param, operation]);
};
export default useDispatchOperation;
