import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen text-white space-y-6">
            <p className="text-2xl dark:text-[#FFFFFF] text-[#444444]">Страница не найдена 😔</p>
            <Link to="/" className="bg-[#BBFF00] text-[#444444] py-[9px] px-[21px] rounded-lg w-auto text-xs font-normal leading-[14px]">Вернуться на главную</Link>
        </div>
    );
};

export default ErrorPage;