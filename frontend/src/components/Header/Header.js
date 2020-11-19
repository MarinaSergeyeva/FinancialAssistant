import React, { useState } from 'react';
import Unauthorized from '../Header/Unauthorized';
import Authorized from '../Header/Authorized';

const Header = () => {
  // из глобального стейта  взять токен.
  // const [token, setToken] = useState("")
  return (
    <>
      <Unauthorized />
      {/* <Authorized /> */}
    </>
  );
};

export default Header;
