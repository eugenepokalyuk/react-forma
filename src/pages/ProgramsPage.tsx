import React from 'react';
import ProfileCard from '../components/ProfileCard/ProfileCard';
import ProgramCard from '../components/ProgramCard/ProgramCard';
import Button from '../components/UI/Button/Button';

const trainers = [
    { name: 'Иван', tag: 'Тренер', description: 'Главное усердие' },
    { name: 'Петр', tag: 'Тренер', description: 'Постоянство - ключ к успеху' },
    { name: 'Андрей', tag: 'Тренер', description: 'Сила воли' },
    { name: 'Дмитрий', tag: 'Тренер', description: 'Сила духа' }
];

const specialists = [
    { name: 'Иван', tag: 'Диетолог', description: 'Главное усердие' },
    { name: 'Петр', tag: 'Нутрициолог', description: 'Здоровое питание - залог здоровья' },
    { name: 'Андрей', tag: 'Нутрициолог', description: 'Баланс и гармония' },
];

const programs = [
    { title: 'Кардио тренировка', description: 'Улучшение сердечно-сосудистой системы', isLocked: false, isFree: true },
    { title: 'Силовая тренировка', description: 'Повышение мышечной массы', isLocked: true, isFree: false },
    { title: 'Гибкость и растяжка', description: 'Улучшение гибкости и подвижности', isLocked: true, isFree: false },
];

const ProgramsPage: React.FC = () => {
    return (
        <div>
            <section className="mt-6 space-y-4 px-[15px]">
                <h2 className="text-2xl font-semibold dark:text-[#FFFFFF] text-[#444444]">Программы тренировок</h2>

                <div className='space-y-2'>
                    {programs.map((program, index) => (
                        <ProgramCard
                            key={index}
                            title={program.title}
                            description={program.description}
                            isLocked={program.isLocked}
                            isFree={program.isFree}
                        />
                    ))}
                </div>
            </section>

            <section className="mt-6 space-y-4 px-[15px]">
                <h2 className="text-2xl font-semibold dark:text-[#FFFFFF] text-[#444444]">У вас еще нет тренера, можем предложить</h2>

                <div className='space-y-2'>
                    {trainers.slice(0, 3).map((trainer, index) => (
                        <ProfileCard key={index} name={trainer.name} tag={trainer.tag} description={trainer.description} />
                    ))}
                    {trainers.length > 3 && <Button variant='green' className='w-full'>Все тренера</Button>}
                </div>
            </section>

            <section className="mt-6 space-y-4 px-[15px]">
                <h2 className="text-2xl font-semibold dark:text-[#FFFFFF] text-[#444444]">Не забываем о питании</h2>

                <div className='space-y-2'>
                    {specialists.slice(0, 3).map((specialist, index) => (
                        <ProfileCard key={index} name={specialist.name} tag={specialist.tag} description={specialist.description} />
                    ))}
                    {specialists.length > 3 && <Button variant='green' className='w-full'>Все специалисты</Button>}
                </div>
            </section>
        </div>
    );
};

export default ProgramsPage;