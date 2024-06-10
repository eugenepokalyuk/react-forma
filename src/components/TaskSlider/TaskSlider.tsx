import 'swiper/css';
import 'swiper/css/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';

export interface SliderTag {
    text: string;
    color?: string;
}

export interface SliderItem {
    id: number;
    title: string;
    time: string;
    option: string;
    experience: number;
    completed: boolean;
    emoji: string;
    highlight: boolean;
    tags: SliderTag[];
}

const TaskSlider = () => {
    const sliderItems: SliderItem[] = [
        {
            id: 1,
            title: 'Ночной сон',
            time: '22:30 – 07:30',
            option: '9 часов',
            experience: 300,
            completed: true,
            emoji: '🌙',
            highlight: false,
            tags: [{ text: '+300 XP' }]
        },
        {
            id: 2,
            title: 'Утренняя медитация',
            time: '07:40 – 08:00',
            option: '20 минут',
            experience: 200,
            completed: false,
            emoji: '🧘',
            highlight: false,
            tags: [{ text: '+200 XP' }]
        },
        {
            id: 3,
            title: 'Зарядка',
            time: '08:10 – 08:25',
            option: '15 минут',
            experience: 250,
            completed: false,
            emoji: '💪',
            highlight: false,
            tags: [{ text: '15 минут' }, { text: '+250 XP' }]
        },
        {
            id: 4,
            title: 'Завтрак',
            time: '08:30 – 09:00',
            option: 'Белок',
            experience: 125,
            completed: false,
            emoji: '🥤',
            highlight: false,
            tags: [{ text: '+125 XP' }, { text: '+250 ккал' }]
        },
        {
            id: 5,
            title: 'Работа/Учеба',
            time: '09:30 – 13:00',
            option: 'Внимание',
            experience: 400,
            completed: false,
            emoji: '📚',
            highlight: false,
            tags: [{ text: '+400 XP' }]
        },
        {
            id: 6,
            title: 'Обед',
            time: '13:30 – 14:00',
            option: 'Питание',
            experience: 150,
            completed: false,
            emoji: '🥗',
            highlight: false,
            tags: [{ text: '+150 XP' }, { text: '+400 ккал' }]
        },
        {
            id: 7,
            title: 'Прогулка',
            time: '16:00 – 16:45',
            option: '4000 шагов',
            experience: 50,
            completed: false,
            emoji: '👟',
            highlight: false,
            tags: [{ text: '4000 шагов' }, { text: '+50 XP' }]
        },
        {
            id: 8,
            title: 'Ужин',
            time: '19:00 – 19:30',
            option: 'Ужин',
            experience: 100,
            completed: false,
            emoji: '🍲',
            highlight: false,
            tags: [{ text: '+100 XP' }, { text: '+300 ккал' }]
        },
        {
            id: 9,
            title: 'Групповая йога онлайн',
            time: '21:00 – 22:00',
            option: 'Бесплатно',
            experience: 500,
            completed: false,
            emoji: '🧘‍♀️',
            highlight: true,
            tags: [{ text: '+500 XP' }, { text: 'Бесплатно', color: 'bg-[#199900]' }]
        }
    ];

    const parseTime = (timeString: string) => {
        const [start, end] = timeString.split(' – ');
        const [startHours, startMinutes] = start.split(':').map(Number);
        const [endHours, endMinutes] = end.split(':').map(Number);

        const now = new Date();
        const startDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), startHours, startMinutes);
        const endDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), endHours, endMinutes);

        return { startDate, endDate };
    };

    const getClosestItems = (items: SliderItem[]) => {
        const now = new Date();
        return items.sort((a, b) => {
            const { startDate: startA } = parseTime(a.time);
            const { startDate: startB } = parseTime(b.time);
            return Math.abs(now.getTime() - startA.getTime()) - Math.abs(now.getTime() - startB.getTime());
        });
    };

    const sortedItems = getClosestItems(sliderItems);

    return (
        <div>
            <Swiper
                className='!overflow-visible'
                spaceBetween={4}
                slidesPerView={1.8}
                centeredSlides
            >
                {sortedItems.map((item) => (
                    <SwiperSlide key={item.id}>
                        <div className="grid grid-cols-1 grid-rows-2 h-48 bg-[#111111]/[.16] p-3 rounded-xl text-white">
                            <div className='flex justify-center items-end size-full pb-4'>
                                <span role="img" aria-label={item.title} className="text-8xl">{item.emoji}</span>
                            </div>
                            <div className='flex flex-col justify-between items-start size-full'>
                                <div className='space-y-1'>
                                    <h3 className='text-base font-medium leading-[18px] text-left'>{item.title}</h3>
                                    <p className="text-xs font-normal leading-[14px] text-left">{item.time}</p>
                                </div>
                                <div className='flex flex-wrap space-x-2'>
                                    {item.tags.map((tag, index) => (
                                        <span key={index} className={`text-xs font-normal leading-3 text-center bg-[#000000]/[.08] rounded p-1 ${tag.color || 'text-white'}`}>
                                            {tag.text}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default TaskSlider;