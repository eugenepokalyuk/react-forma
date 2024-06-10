import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
            <h1 className="text-6xl font-bold">404</h1>
            <p className="text-2xl mt-4">Страница не найдена</p>
            <Link to="/" className="mt-6 bg-green-500 p-4 rounded-lg text-white">
                Вернуться на главную
            </Link>
        </div>
    );
};

export default ErrorPage;