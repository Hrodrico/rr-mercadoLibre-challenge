import {useState} from 'react';
import {IHomeProps} from 'interface/Interface';
//components
import NavBar from 'components/Home/NavBar/NavBar';
import Drawer from 'components/Home/Drawer/Drawer';

const Home = ({component}: IHomeProps) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <NavBar open={open} handleDrawerOpen={handleDrawerOpen} />
      <Drawer open={open} handleDrawerClose={handleDrawerClose} component={component} />
    </>
  );
};

export default Home;
