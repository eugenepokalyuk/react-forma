import Recommendations from '../components/Recommendations/Recommendations';
import TaskSlider from '../components/TaskSlider/TaskSlider';
import TrackingCards from '../components/TrackingCards/TrackingCards';
import UserInfo from '../components/UserInfo/UserInfo';

const HomePage = () => {
    return (
        <div>
            <div className='relative bg-gradient-to-b dark:from-[#49288A] from-[#0B8E21] dark:to-[#49288B] to-[#11D532] pb-6 rounded-3xl overflow-hidden'>
                <div className="absolute top-0 left-0 w-full h-full z-10">
                    <div className="fish animate-fish"></div>
                </div>
                <div className="relative z-20">
                    <UserInfo />
                    <TaskSlider />
                </div>
            </div>

            <TrackingCards />
            <Recommendations />
        </div>
    );
};

export default HomePage;