import { Outlet, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ErrorPage from '../../pages/ErrorPage';
import HomePage from '../../pages/HomePage';
import ProfilePage from '../../pages/ProfilePage';
import { DEFAULT_PATH, ERROR_PATH, PROFILE_PATH } from '../../utils/consts';
import NavigationMenu from '../NavigationMenu/NavigationMenu';

const App = () => {
  return (
    <Router>
      <div className='dark:bg-[#282A22] bg-[#EDFBEB] flex justify-center min-h-screen pb-24'>
        <div className='w-full md:max-w-xs'>
          <Routes>
            <Route path={DEFAULT_PATH} element={<Outlet />}>
              <Route index element={<HomePage />} />
              <Route path={PROFILE_PATH} element={<ProfilePage />} />
              <Route path={ERROR_PATH} element={<ErrorPage />} />
            </Route>
          </Routes>
          <NavigationMenu />
        </div>
      </div>
    </Router>
  );
};

export default App;