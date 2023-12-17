import MentorsListInstructor from './MentorsListInstructor/MentorsListInstructor';
import MentorsListTitle from './MentorsListTitle/MentorsListTitle';
import MentorsListType from './MentorsListType/MentorsListType';
import MentorsListAction from './MentorsListAction/MentorsListAction';

const MentorsList = (props) => {
    const mentors = props.mentors;

    return ( 
        <div className='mentors-list'>
            <div className='mentors-list-col'>
                <div className='mentors-list-header'>
                    Instructor Name & Date
                </div>
                {mentors.map((mentor) => (
                        <MentorsListInstructor 
                            image = {mentor.image}
                            name = {mentor.name}
                            date = {mentor.date}
                            key = {mentor.id}
                        />
                ))}
            </div>
            <div className='mentors-list-col'>
                <div className='mentors-list-header'>
                    Course Type
                </div>
                {mentors.map((mentor) => (
                    <MentorsListType
                        type = {mentor.type}
                        key = {mentor.id}
                    />
                ))}
            </div>
            <div className='mentors-list-col'>
                <div className='mentors-list-header'>
                    Course Title
                </div>
                {mentors.map((mentor) => (
                    <MentorsListTitle
                        title = {mentor.title}
                        key = {mentor.id}
                    />
                ))}
            </div>
            <div className='mentors-list-col'>
                <div className='mentors-list-header'>
                    Actions
                </div>
                {mentors.map((mentor) => (
                    <MentorsListAction
                        action = {mentor.action}
                        key = {mentor.id}
                    />
                ))}
            </div>
        </div>
     );
}
 
export default MentorsList;