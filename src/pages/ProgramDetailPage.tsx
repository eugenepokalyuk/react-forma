import React from 'react';
import { Navigate, useLocation, useParams } from 'react-router-dom';

const ProgramDetailPage: React.FC = () => {
    const { programId } = useParams<{ programId: string }>();
    
    const location = useLocation();
    
    const isLocked = location.state?.isLocked;

    if (isLocked || !programId) {
        return <Navigate to="/" replace />;
    }
    
    // toDo: Вынести в моки
    // toDo: заменить на запрос данных
    const programData = {
        title: 'Программа № 1',
        author: 'Владимир Алексеевич',
        description: 'Ориентирована на сбалансированную тренировку всего тела с упором на ноги, плечи и спину. Включает в себя комплексные упражнения для развития силы и выносливости. Присутствует акцент на работе пресса.',
        days: [
            {
                day: 'Первый день',
                exercises: [
                    'Выпады с гантелями: 4 подхода по 8-10 повторений',
                    'Сгибание ног в стойке: 4 подхода по 10-12 повторений',
                    'Жим ногами в стойке: 4 подхода по 8-10 повторений',
                    'Жим гантелями сидя: 4 подхода по 8-10 повторений',
                    'Тяга узким хватом к подбородку: 4 подхода по 8-10 повторений',
                    'Разведение гантелей в наклоне: 4 подхода по 8-10 повторений',
                    'Пресс: 4 подхода по на максимум повторений'
                ]
            },
            {
                day: 'Второй день',
                exercises: [
                    'Отжимание на брусьях: 4 подхода по 8-10 повторений',
                    'Жим гантелей на скамье (30 градусов): 4 подхода по 8-10 повторений',
                    'Разведение гантелей на горизонтальной скамье: 4 подхода по 12-15 повторений',
                    'Сгибание рук со штангой стоя: 4 подхода по 8-10 повторений',
                    'Сгибание рук со штангой на скамейке: 4 подхода по 8-10 повторений',
                    'Сгибание рук на блоке: 4 подхода по 8-10 повторений',
                    'Пресс: 4 подхода по на максимум повторений'
                ]
            },
            {
                day: 'Третий день',
                exercises: [
                    'Экстензия: 4 подхода по 10-12 повторений',
                    'Становая тяга с гантелями и штангой: 4 подхода по 8 повторений',
                    'Подтягивание на перекладине, тяга блока на тренажере: 4 подхода по 8-10 повторений',
                    'Отжимание в упоре сзади от скамьи: 4 подхода по 10-12 повторений',
                    'Жим на блоке снизу: 4 подхода по 10-12 повторений',
                    'Трицепсовая экстензия: 4 подхода по 10-12 повторений',
                    'Косые мышцы живота: 4 подхода по 12-15 повторений'
                ]
            }
        ]
    };

    return (
        <div>
            <div className='relative bg-gradient-to-b dark:from-[#49288A] from-[#0B8E21] dark:to-[#49288B] to-[#11D532] pb-6 rounded-3xl overflow-hidden'>
                <div className="absolute top-0 left-0 w-full h-full z-10">
                    <div className="fish animate-fish"></div>
                </div>
                
                <div className="relative z-20 mt-8 px-4">
                    <h1 className='text-3xl font-semibold mb-4'>{programData.title}</h1>
                    
                    <h2 className='text-xl mb-2'>Автор: {programData.author}</h2>
                
                    <p className='mb-4'>{programData.description}</p>
                </div>
            </div>
            
            <div className='px-[15px] pt-6 space-y-4'>
                {programData.days.map((day, index) => (
                    <div key={index} className='dark:bg-[#FFFFFF]/[0.04] bg-[#FFFFFF] p-1.5 rounded-lg dark:text-[#FFFFFF] text-[#444444]'>
                        <h3 className='text-lg font-semibold'>{day.day}</h3>
            
                        <ul className='list-disc pl-4'>
                            {day.exercises.map((exercise, idx) => (
                                <li key={idx}>{exercise}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProgramDetailPage;
