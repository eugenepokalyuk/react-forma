import ProfileCard from '../components/ProfileCard/ProfileCard';
import Button from '../components/UI/Button/Button';

import AIPhoto1 from '../assets/images/model-photo-1.png';
import AIPhoto2 from '../assets/images/model-photo-2.png';
import AIPhoto3 from '../assets/images/model-photo-3.png';

import UserModelPhoto1 from '../assets/images/model-user-photo-1.png';
import UserModelPhoto2 from '../assets/images/model-user-photo-2.png';
import UserModelPhoto3 from '../assets/images/model-user-photo-3.png';
import UserModelPhoto4 from '../assets/images/model-user-photo-4.png';
import UserModelPhoto5 from '../assets/images/model-user-photo-5.png';
import UserModelPhoto6 from '../assets/images/model-user-photo-6.png';
import UserModelPhoto7 from '../assets/images/model-user-photo-7.png';

// toDo: Вынести в моки
const ais = [
    { name: 'AI', tag: 'Standart', description: 'Тренер', image: AIPhoto1 },
    { name: 'AI+', tag: 'Medium', description: 'Тренер + Нутрициолог', image: AIPhoto2 },
    { name: 'AI++', tag: 'Pro+', description: 'Тренер + Диетолог', image: AIPhoto3 },
];

const trainers = [
    { name: 'Иван', tag: 'Тренер', description: 'Главное усердие', image: UserModelPhoto1 },
    { name: 'Петр', tag: 'Тренер', description: 'Постоянство - ключ к успеху', image: UserModelPhoto2 },
    { name: 'Андрей', tag: 'Тренер', description: 'Сила воли', image: UserModelPhoto3 },
    { name: 'Дмитрий', tag: 'Тренер', description: 'Сила духа', image: UserModelPhoto4 }
];

const specialists = [
    { name: 'Иван', tag: 'Диетолог', description: 'Главное усердие', image: UserModelPhoto5 },
    { name: 'Петр', tag: 'Нутрициолог', description: 'Здоровое питание - залог здоровья', image: UserModelPhoto6 },
    { name: 'Андрей', tag: 'Нутрициолог', description: 'Баланс и гармония', image: UserModelPhoto7 },
];

const SubscriptionPage = () => {
    return (
        <div>
            <section className="mt-6 space-y-4 px-[15px]">
                <h2 className="text-2xl font-semibold dark:text-[#FFFFFF] text-[#444444]">Технологии будущего</h2>

                <div className='space-y-2'>
                    {ais.map((ai, index) => (
                        <ProfileCard key={index} name={ai.name} tag={ai.tag} description={ai.description} image={ai.image} />
                    ))}
                </div>
            </section>

            <section className="mt-6 space-y-4 px-[15px]">
                <h2 className="text-2xl font-semibold dark:text-[#FFFFFF] text-[#444444]">У вас еще нет тренера, можем предложить</h2>

                <div className='space-y-2'>
                    {trainers.slice(0, 3).map((trainer, index) => (
                        <ProfileCard key={index} name={trainer.name} tag={trainer.tag} description={trainer.description} image={trainer.image} />
                    ))}
                    {trainers.length > 3 && <Button variant='green' className='w-full'>Все тренера</Button>}
                </div>
            </section>

            <section className="mt-6 space-y-4 px-[15px]">
                <h2 className="text-2xl font-semibold dark:text-[#FFFFFF] text-[#444444]">Не забываем о питании</h2>

                <div className='space-y-2'>
                    {specialists.slice(0, 3).map((specialist, index) => (
                        <ProfileCard key={index} name={specialist.name} tag={specialist.tag} description={specialist.description} image={specialist.image} />
                    ))}
                    {specialists.length > 3 && <Button variant='green' className='w-full'>Все специалисты</Button>}
                </div>
            </section>
        </div>
    );
};

export default SubscriptionPage;
