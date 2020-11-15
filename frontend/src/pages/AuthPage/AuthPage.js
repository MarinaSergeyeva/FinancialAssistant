import React, {useState} from 'react';
import Test from '../test/Test';
import { Registration } from '../../components/Auth/Registration/Registration';


const AuthPage = () => {

  const [isShow, setIsShow] = useState(false);
  const showModal = () => {
    setIsShow(true);
  };

  const close = () => {
    setIsShow(prev => !prev)
  }


  return (
    <>
      <button type="button" onClick={() => showModal()}>click me</button>
      {isShow && <Test close={close}/>}
      <p>'AuthPage'</p>
      <Registration />
      </>
  )
};

export default AuthPage;
