import './MainContentMentorsList.css';
import MainContentMentorsListHeader from './MainContentMentorsListHeader/MainContentMentorsListHeader';
import MainContentMentorsListItem from './MainContentMentorsListItem/MainContentMentorsListItem';

const MainContentMentorsList = () => {
    return ( 
        <div className='main-content-mentors-list'>
            <MainContentMentorsListHeader />
            <MainContentMentorsListItem 
                image = 'prasant.jpg'
                name = 'Prasant Kumar Singh'
                date = '25/2/2023'
                type = 'Frontend'
                title = 'Understanding Concept Of React'
                action = 'Follow'
            />
            <MainContentMentorsListItem 
                image = 'prasant.jpg'
                name = 'Ravi Kumar'
                date = '25/2/2023'
                type = 'Frontend'
                title = 'Understanding Concept Of React'
                action = 'Follow'
            />
        </div>
     );
}
 
export default MainContentMentorsList;