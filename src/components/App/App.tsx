import { Outlet } from 'react-router-dom';
import NavigationMenu from '../NavigationMenu/NavigationMenu';

const App = () => {
  return (
    <div className='dark:bg-[#282A22] bg-[#EDFBEB] pb-24 flex justify-center'>
      <div className='w-full md:max-w-xs'>
        <Outlet />
        <NavigationMenu />
      </div>
    </div>
  );
};

export default App;