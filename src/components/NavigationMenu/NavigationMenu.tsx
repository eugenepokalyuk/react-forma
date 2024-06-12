import { NavLink } from 'react-router-dom';
import { ReactComponent as ImageCircle } from '../../assets/icons/lens.svg';

const NavigationMenu = () => {
    return (
        <div className="fixed bottom-0 left-0 right-0 text-[#FFFFFF]/[.32] p-4 flex justify-around w-full max-w-xs mx-auto">
            <NavLink
                to="/programs"
                className={({ isActive }) =>
                    isActive ? "flex flex-col justify-center items-center space-y-1.5 dark:text-white text-[#444444]" : "flex flex-col justify-center items-center space-y-1.5 text-[#444444]/[.56]"
                }
            >
                <div>
                    <ImageCircle className='dark:fill-[#FFFFFF]/[.08] fill-[#CEE7CB] w-8 h-8' />
                </div>
                <span className='text-xs font-normal leading-[14px]'>Программы</span>
            </NavLink>

            <NavLink
                to="/"
                className={({ isActive }) =>
                    isActive ? "flex flex-col justify-center items-center space-y-1.5 dark:text-white text-[#444444]" : "flex flex-col justify-center items-center space-y-1.5 text-[#444444]/[.56]"
                }
            >
                <div>
                    <ImageCircle className='dark:fill-[#FFFFFF]/[.08] fill-[#CEE7CB] w-8 h-8' />
                </div>
                <span className='text-xs font-normal leading-[14px]'>Сегодня</span>
            </NavLink>

            <NavLink
                to="/helper"
                className={({ isActive }) =>
                    isActive ? "flex flex-col justify-center items-center space-y-1.5 dark:text-white text-[#444444]" : "flex flex-col justify-center items-center space-y-1.5 text-[#444444]/[.56]"
                }
            >
                <div>
                    <ImageCircle className='dark:fill-[#FFFFFF]/[.08] fill-[#CEE7CB] w-8 h-8' />
                </div>
                <span className='text-xs font-normal leading-[14px]'>Помощник</span>
            </NavLink>
        </div>
    );
};

export default NavigationMenu;