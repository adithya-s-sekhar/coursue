import './MainContentMentorsList.css';
import MainContentMentorsListInstructor from './MainContentMentorsListInstructor/MainContentMentorsListInstructor';
import MainContentMentorsListTitle from './MainContentMentorsListTitle/MainContentMentorsListTitle';
import MainContentMentorsListType from './MainContentMentorsListType/MainContentMentorsListType';
import MainContentMentorsListAction from './MainContentMentorsListAction/MainContentMentorsListAction';

const MainContentMentorsList = (props) => {
    const mentors = props.mentors;

    return ( 
        <div className='main-content-mentors-list'>
            <div className='main-content-mentors-list-col'>
                <div className='main-content-mentors-list-header'>
                    Instructor Name & Date
                </div>
                {mentors.map((mentor) => (
                        <MainContentMentorsListInstructor 
                            image = {mentor.image}
                            name = {mentor.name}
                            date = {mentor.date}
                            key = {mentor.id}
                        />
                ))}
            </div>
            <div className='main-content-mentors-list-col'>
                <div className='main-content-mentors-list-header'>
                    Course Type
                </div>
                {mentors.map((mentor) => (
                    <MainContentMentorsListType
                        type = {mentor.type}
                        key = {mentor.id}
                    />
                ))}
            </div>
            <div className='main-content-mentors-list-col'>
                <div className='main-content-mentors-list-header'>
                    Course Title
                </div>
                {mentors.map((mentor) => (
                    <MainContentMentorsListTitle
                        title = {mentor.title}
                        key = {mentor.id}
                    />
                ))}
            </div>
            <div className='main-content-mentors-list-col'>
                <div className='main-content-mentors-list-header'>
                    Actions
                </div>
                {mentors.map((mentor) => (
                    <MainContentMentorsListAction
                        action = {mentor.action}
                        key = {mentor.id}
                    />
                ))}
            </div>
        </div>
     );
}
 
export default MainContentMentorsList;