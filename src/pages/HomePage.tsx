import Recommendations from '../components/Recommendations/Recommendations';
import TaskSlider from '../components/TaskSlider/TaskSlider';
import TrackingCards from '../components/TrackingCards/TrackingCards';
import UserInfo from '../components/UserInfo/UserInfo';
import './HomePage.css';

const HomePage = () => {
    return (
        <div>
            <div className='relative bg-purple-700 pb-6 rounded-3xl overflow-hidden'>
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