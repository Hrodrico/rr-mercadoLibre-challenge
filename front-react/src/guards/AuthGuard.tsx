import React from 'react';
import Home from 'pages/Home';
import {IGuardProps} from 'interface/Interface';

const AuthGuard = ({children}: IGuardProps) => {
  return <Home component={children} />;
};

export default AuthGuard;
