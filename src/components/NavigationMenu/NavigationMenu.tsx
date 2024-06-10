import { NavLink } from 'react-router-dom';
import ImageCircle from '../../assets/icons/lens.svg';

const NavigationMenu = () => {
    return (
        <div className="fixed bottom-0 left-0 right-0 bg-[#282A22] text-[#FFFFFF]/[.32] p-4 flex justify-around">
            <NavLink
                to="/programs"
                className={({ isActive }) =>
                    isActive ? "flex flex-col justify-center items-center space-y-1.5 text-white" : "flex flex-col justify-center items-center space-y-1.5"
                }
            >
                <div>
                    <img src={ImageCircle} className='w-8 h-8' alt="" />
                </div>
                <span className='text-xs font-normal leading-[14px]'>Программы</span>
            </NavLink>

            <NavLink
                to="/"
                className={({ isActive }) =>
                    isActive ? "flex flex-col justify-center items-center space-y-1.5 text-white" : "flex flex-col justify-center items-center space-y-1.5"
                }
            >
                <div>
                    <img src={ImageCircle} className='w-8 h-8' alt="" />
                </div>
                <span className='text-xs font-normal leading-[14px]'>Сегодня</span>
            </NavLink>

            <NavLink
                to="/helper"
                className={({ isActive }) =>
                    isActive ? "flex flex-col justify-center items-center space-y-1.5 text-white" : "flex flex-col justify-center items-center space-y-1.5"
                }
            >
                <div>
                    <img src={ImageCircle} className='w-8 h-8' alt="" />
                </div>
                <span className='text-xs font-normal leading-[14px]'>Помощник</span>
            </NavLink>
        </div>
    );
};

export default NavigationMenu;