import { FC } from 'react';

import ProgramCard from '../components/ProgramCard/ProgramCard';

// toDo: Вынести в моки
const programs = [
    { id: 0, title: 'Кардио тренировка', description: 'Улучшение сердечно-сосудистой системы', isLocked: false, isFree: true },
    { id: 1, title: 'Силовая тренировка', description: 'Повышение мышечной массы', isLocked: true, isFree: false },
    { id: 2, title: 'Гибкость и растяжка', description: 'Улучшение гибкости и подвижности', isLocked: true, isFree: false },
];

const ProgramsPage: FC = () => {
    return (
        <div>
            <section className="mt-6 space-y-4 px-[15px]">
                <h2 className="text-2xl font-semibold dark:text-[#FFFFFF] text-[#444444]">Программы тренировок</h2>

                <div className='space-y-2'>
                    {programs.map((program) => (
                        <ProgramCard
                            key={program.id}
                            id={program.id}
                            title={program.title}
                            description={program.description}
                            isLocked={program.isLocked}
                            isFree={program.isFree}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default ProgramsPage;
