import { Outlet } from 'react-router-dom';
import NavigationMenu from '../NavigationMenu/NavigationMenu';

const App = () => {
  return (
    <div className='bg-[#282A22] pb-24'>
      <Outlet />
      <NavigationMenu />
    </div>
  );
};

export default App;