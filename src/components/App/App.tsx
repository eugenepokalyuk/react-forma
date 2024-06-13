import { Outlet, Route, Routes } from 'react-router-dom';
import AchievementsPage from '../../pages/AchievementsPage';
import ErrorPage from '../../pages/ErrorPage';
import HomePage from '../../pages/HomePage';
import ProfilePage from '../../pages/ProfilePage';
import ProgramDetailPage from '../../pages/ProgramDetailPage';
import ProgramsPage from '../../pages/ProgramsPage';
import SubscriptionPage from '../../pages/SubscriptionPage';
import { ACHIEVEMENTS_PATH, DEFAULT_PATH, ERROR_PATH, PROFILE_PATH, PROGRAMS_PATH, PROGRAM_PATH, SUBSCRIPTION_PATH } from '../../utils/consts';
import NavigationMenu from '../NavigationMenu/NavigationMenu';

const App = () => {
  return (
    <div className='dark:bg-[#282A22] bg-[#EDFBEB] flex justify-center min-h-screen pb-24 transition-all'>
      <div className='w-full md:max-w-xs'>
        <Routes>
          <Route path={DEFAULT_PATH} element={<Outlet />}>
            <Route index element={<HomePage />} />
            <Route path={PROFILE_PATH} element={<ProfilePage />} />
            <Route path={ACHIEVEMENTS_PATH} element={<AchievementsPage />} />
            <Route path={PROGRAMS_PATH} element={<ProgramsPage />} />
            <Route path={PROGRAM_PATH} element={<ProgramDetailPage />} />
            <Route path={SUBSCRIPTION_PATH} element={<SubscriptionPage />} />
            <Route path={ERROR_PATH} element={<ErrorPage />} />
          </Route>
        </Routes>
        <NavigationMenu />
      </div>
    </div>
  );
};

export default App;