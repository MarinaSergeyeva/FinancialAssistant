const { useEffect } = require('react');
const { useDispatch } = require('react-redux');

const useDispatchOperation = (param, operation) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operation());
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [param]);
};
export default useDispatchOperation;
