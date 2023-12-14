import './MainContentMentors.css';
import MainContentMentorsHeader from './MainContentMentorsHeader/MainContentMentorsHeader';
import MainContentMentorsList from './MainContentMentorsList/MainContentMentorsList';

const MainContentMentors = () => {
    return ( <div className='main-content-mentors'>
        <MainContentMentorsHeader />
        <MainContentMentorsList />
    </div> );
}
 
export default MainContentMentors;