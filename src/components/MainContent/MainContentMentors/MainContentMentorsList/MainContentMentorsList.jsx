import './MainContentMentorsList.css';
import MainContentMentorsListHeader from './MainContentMentorsListHeader/MainContentMentorsListHeader';
import MainContentMentorsListItem from './MainContentMentorsListItem/MainContentMentorsListItem';

const MainContentMentorsList = () => {
    return ( 
        <div className='main-content-mentors-list'>
            <MainContentMentorsListHeader />
            <MainContentMentorsListItem />
        </div>
     );
}
 
export default MainContentMentorsList;