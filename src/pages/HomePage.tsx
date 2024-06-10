import Recommendations from '../components/Recommendations/Recommendations';
import TaskSlider from '../components/TaskSlider/TaskSlider';
import TrackingCards from '../components/TrackingCards/TrackingCards';
import UserInfo from '../components/UserInfo/UserInfo';
import './HomePage.css';

const HomePage = () => {
    return (
        <div>
            <div className='relative bg-purple-700 pb-6 rounded-3xl overflow-hidden'>
                <div className="absolute top-0 left-0 w-full h-full">
                    <div className="fish animate-fish"></div>
                </div>
                <UserInfo />
                <TaskSlider />
            </div>

            <TrackingCards />
            <Recommendations />
        </div>
    );
};

export default HomePage;