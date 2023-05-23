import React, {useState} from 'react';
import {type IHomeProps} from 'interface/Interface';
import NavBar from 'components/Home/NavBar/NavBar';
import Drawer from 'components/Home/Drawer/Drawer';

const Home = ({component}: IHomeProps): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false);

  const handleDrawerOpen = (): void => {
    setOpen(true);
  };

  const handleDrawerClose = (): void => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <NavBar open={open} handleDrawerOpen={handleDrawerOpen} />
      <Drawer open={open} handleDrawerClose={handleDrawerClose} component={component} />
    </React.Fragment>
  );
};

export default Home;
