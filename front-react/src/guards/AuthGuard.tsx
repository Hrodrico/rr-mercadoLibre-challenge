import React from 'react';
import Home from 'pages/Home';
import {type IGuardProps} from 'interface/Interface';

const AuthGuard = ({children}: IGuardProps): JSX.Element => {
  return <Home component={children} />;
};

export default AuthGuard;
