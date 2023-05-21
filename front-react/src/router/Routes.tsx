import {Suspense, lazy} from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import BackdropSimple from 'components/Loader/BackdropSimple'; //Loading
import AuthGuard from 'guards/AuthGuard'; //Guards
import {PathConfig} from 'config'; //Const Config

const Routepath = () => {
  //Components
  const Profile = lazy(() => import('components/Profile/Profile'));
  //Pages
  const NotMatch = lazy(() => import('pages/Error/NotMatch'));
  const Home = lazy(() => import('pages/Home'));

  //Path
  const homePath = PathConfig['patHome'];
  const profilePath = PathConfig['patProfile'];

  return (
    <>
      <Suspense fallback={<BackdropSimple />}>
        <Routes>
          <Route path="/" element={<Navigate to={homePath} replace />} />
          <Route path="/">
            <Route path={homePath} element={<Home />} />
            <Route path={profilePath} element={<AuthGuard children={<Profile />} />} />
          </Route>
          <Route path="*" element={<NotMatch />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default Routepath;
