import { Outlet } from 'react-router-dom';
import NavigationMenu from '../NavigationMenu/NavigationMenu';

const App = () => {
  return (
    <div className='bg-[#282A22] pb-24 flex justify-center'>
      <div className='w-full max-w-xs'>
        <Outlet />
        <NavigationMenu />
      </div>
    </div>
  );
};

export default App;