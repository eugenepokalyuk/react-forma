import React, { useState } from 'react';
import 'swiper/css';
import 'swiper/css/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ReactComponent as IconClose } from '../assets/icons/close.svg';
import { ReactComponent as IconFacebook } from '../assets/icons/company/facebook.svg';
import { ReactComponent as IconInstagram } from '../assets/icons/company/instagram.svg';
import { ReactComponent as IconTelegram } from '../assets/icons/company/telegram.svg';
import { ReactComponent as IconTwitter } from '../assets/icons/company/twitter.svg';
import userPhoto from '../assets/images/user-photo-1.jpg';
import Button from '../components/UI/Button/Button';
import Sheet from '../components/UI/Sheet/Sheet';
import Tag from '../components/UI/Tag/Tag';
import ThemeToggle from '../components/UI/ThemeToggle/ThemeToggle';

interface Achievement {
    id: number;
    title: string;
    description: string;
    image: string;
}

const achievements: Achievement[] = [
    { id: 1, title: 'Начинающий исследователь', description: 'Пройдите ваш первый уровень.', image: 'https://achievements.htmlacademy.ru/assets/achievements/icon/6492dfc2dc72c7cec75f648c.svg' },
    { id: 2, title: 'Покоритель вершин', description: 'Завершите 5 уровней.', image: 'https://achievements.htmlacademy.ru/assets/achievements/icon/6492dfc2dc72c7cec75f645f.svg' },
    { id: 3, title: 'Мастер спорта', description: 'Выполните все упражнения без ошибок.', image: 'https://achievements.htmlacademy.ru/assets/achievements/icon/6492dfc2dc72c7cec75f6465.svg' },
    { id: 4, title: 'Легендарный атлет', description: 'Достигните максимального уровня в приложении.', image: 'https://achievements.htmlacademy.ru/assets/achievements/icon/6492dfc2dc72c7cec75f6468.svg' },
    { id: 5, title: 'Сила и выносливость', description: 'Пройдите тренировку длительностью более 1 часа.', image: 'https://achievements.htmlacademy.ru/assets/achievements/icon/6492dfc2dc72c7cec75f646b.svg' },
    { id: 6, title: 'Непреодолимая стена', description: 'Выполните 100 подтягиваний за одну тренировку.', image: 'https://achievements.htmlacademy.ru/assets/achievements/icon/6492dfc2dc72c7cec75f646e.svg' },
    { id: 7, title: 'Скоростной бегун', description: 'Пробегите 10 км менее чем за 50 минут.', image: 'https://achievements.htmlacademy.ru/assets/achievements/icon/6492dfc2dc72c7cec75f6471.svg' },
    { id: 8, title: 'Железный жим', description: 'Жмите лежа более 100 кг.', image: 'https://achievements.htmlacademy.ru/assets/achievements/icon/6492dfc2dc72c7cec75f6474.svg' },
    { id: 9, title: 'Прыжок веры', description: 'Выполните прыжок с парашютом.', image: 'https://achievements.htmlacademy.ru/assets/achievements/icon/6492dfc2dc72c7cec75f6477.svg' },
    { id: 10, title: 'Марафонец', description: 'Завершите полный марафон.', image: 'https://achievements.htmlacademy.ru/assets/achievements/icon/6492dfc2dc72c7cec75f6480.svg' },
    { id: 11, title: 'Бассейн без дна', description: 'Проплывите 5 км за одну тренировку.', image: 'https://achievements.htmlacademy.ru/assets/achievements/icon/6492dfc2dc72c7cec75f6483.svg' },
    { id: 12, title: 'Король горы', description: 'Взберитесь на вершину горы высотой более 3000 метров.', image: 'https://achievements.htmlacademy.ru/assets/achievements/icon/6492dfc2dc72c7cec75f6486.svg' },
    { id: 13, title: 'Железная воля', description: 'Продолжайте тренироваться каждый день в течение месяца.', image: 'https://achievements.htmlacademy.ru/assets/achievements/icon/6492dfc2dc72c7cec75f64c8.svg' },
    { id: 14, title: 'Астра', description: 'Проспите 3 тренировки в неделю', image: 'https://achievements.htmlacademy.ru/assets/achievements/icon/6492dfc2dc72c7cec75f6498.svg' }
];

const ProfilePage: React.FC = () => {
    const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null);

    return (
        <div>
            <section className='relative bg-gradient-to-b dark:from-[#49288A] from-[#0B8E21] dark:to-[#49288B] to-[#11D532] pb-6 rounded-3xl overflow-hidden'>
                <div className="absolute top-0 left-0 w-full h-full z-10">
                    <div className="fish animate-fish"></div>
                </div>

                <article className="relative z-20 mt-8">
                    <div className="flex flex-col items-center">
                        <img src={userPhoto} alt="User" className="w-24 h-24 rounded-full border-4 border-[#BBFF00]" />
                        <h2 className="text-2xl font-semibold text-white mt-4">Евгений Покалюк</h2>
                    </div>
                </article>

                <article className="relative z-20 px-4 mt-4">
                    <div className="flex flex-row justify-between p-3 items-start bg-[#111111]/[.16] rounded-xl">
                        <div>
                            <h3 className='text-lg leading-6 font-medium text-[#FFFFFF] uppercase flex items-center gap-x-2'>Tinkoff <Tag>premium</Tag></h3>
                            <p className='text-sm leading-[18px] font-normal text-[#FFFFFF]/[.56]'>Premium services</p>
                        </div>
                        <div>
                            <Button variant='green'>Learn more</Button>
                        </div>
                    </div>
                </article>
            </section>

            <section className="mt-6 space-y-4 px-[15px]">
                <article className="flex items-center justify-between">
                    <h3 className='text-lg leading-6 font-medium dark:text-[#FFFFFF] text-[#444444]'>Сменить тему</h3>
                    <ThemeToggle />
                </article>

                <article className='relative z-20 space-y-2'>
                    <h3 className='text-lg leading-6 font-medium dark:text-[#FFFFFF] text-[#444444]'>Достижения</h3>
                    <Swiper
                        className='custom-swiper'
                        spaceBetween={4}
                        slidesPerView={3.6}
                    >
                        {achievements.map((achievement) => (
                            <SwiperSlide key={achievement.id}>
                                <div
                                    className="p-1.5 dark:bg-[#FFFFFF]/[.04] bg-[#FFFFFF] rounded-xl w-full flex justify-center items-center no-select"
                                    onClick={() => setSelectedAchievement(achievement)}
                                >
                                    <img src={achievement.image} alt={achievement.title} className="w-16 h-16" />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </article>

                <article className='space-y-1'>
                    <Button variant={'gray'} className='w-full'>Notifications and Sounds</Button>
                    <Button variant={'gray'} className='w-full'>Privacy and Security</Button>
                    <Button variant={'gray'} className='w-full'>Data and Storage</Button>
                    <Button variant={'gray'} className='w-full'>Language</Button>
                </article>

                <article className='space-y-1'>
                    <Button variant={'gray'} className='w-full'>Forma Premium</Button>
                    <Button variant={'gray'} className='w-full'>Forma Buisness</Button>
                    <Button variant={'gray'} className='w-full'>Gift Forma Premium</Button>
                </article>

                <article className='space-y-1'>
                    <Button variant={'gray'} className='w-full'>Ask a Question</Button>
                    <Button variant={'gray'} className='w-full'>Forma FAQ</Button>
                    <Button variant={'gray'} className='w-full'>Forma Features</Button>
                </article>

                <article className='space-y-1'>
                    <h3 className='text-lg leading-6 font-medium dark:text-[#FFFFFF] text-[#444444]'>Мы в соц сетях</h3>
                    <div className='flex flex-row justify-start items-center gap-x-2'>
                        <IconTelegram className='size-8' />
                        <IconFacebook className='size-8' />
                        <IconInstagram className='size-8' />
                        <IconTwitter className='size-8' />
                    </div>
                </article>


                <article className='space-y-1'>
                    <Button variant={'green'} className='w-full'>Выйти из аккаунта</Button>
                </article>
            </section>

            {selectedAchievement && (
                <Sheet isOpen={!!selectedAchievement} onClose={() => setSelectedAchievement(null)}>
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-xl font-semibold dark:text-[#FFFFFF] text-[#444444]">{selectedAchievement.title}</h3>

                        <button className="flex justify-center items-center absolute -top-10 md:-top-8 right-0 md:-right-8 bg-white bg-opacity-50 hover:bg-opacity-100 size-8 rounded-full" onClick={() => setSelectedAchievement(null)}>
                            <IconClose />
                        </button>
                    </div>

                    <div>
                        <img src={selectedAchievement.image} alt={selectedAchievement.title} className="w-full h-64 object-contain rounded-md mb-4" />
                        <p className="text-gray-600 dark:text-gray-400">{selectedAchievement.description}</p>
                    </div>
                </Sheet>
            )}
        </div>
    );
};

export default ProfilePage;