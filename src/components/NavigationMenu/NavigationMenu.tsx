import { NavLink } from 'react-router-dom';

import { ReactComponent as ImageCircle } from '../../assets/icons/lens.svg';
import { DEFAULT_PATH, PROGRAMS_PATH, SUBSCRIPTION_PATH } from '../../utils/consts';

const NavigationMenu = () => {
    return (
        <div className="fixed bottom-0 left-0 right-0 text-[#FFFFFF]/[.32] p-4 flex justify-around w-full max-w-xs mx-auto">
            <NavLink
                to={PROGRAMS_PATH}
                className={({ isActive }) =>
                    isActive ? "flex flex-col justify-center items-center space-y-1.5 dark:text-white text-[#444444] active:scale-95" : "flex flex-col justify-center items-center space-y-1.5 text-[#444444]/[.56] active:scale-95"
                }
            >
                <div>
                    <ImageCircle className='dark:fill-[#FFFFFF]/[.08] fill-[#CEE7CB] w-8 h-8' />
                </div>

                <span className='text-xs font-normal leading-[14px]'>Программы</span>
            </NavLink>

            <NavLink
                to={DEFAULT_PATH}
                className={({ isActive }) =>
                    isActive ? "flex flex-col justify-center items-center space-y-1.5 dark:text-white text-[#444444] active:scale-95" : "flex flex-col justify-center items-center space-y-1.5 text-[#444444]/[.56] active:scale-95"
                }
            >
                <div>
                    <ImageCircle className='dark:fill-[#FFFFFF]/[.08] fill-[#CEE7CB] w-8 h-8' />
                </div>
                
                <span className='text-xs font-normal leading-[14px]'>Сегодня</span>
            </NavLink>

            <NavLink
                to={SUBSCRIPTION_PATH}
                className={({ isActive }) =>
                    isActive ? "flex flex-col justify-center items-center space-y-1.5 dark:text-white text-[#444444] active:scale-95" : "flex flex-col justify-center items-center space-y-1.5 text-[#444444]/[.56] active:scale-95"
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
