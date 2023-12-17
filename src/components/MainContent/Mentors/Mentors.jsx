import MentorsItem from './MentorsItem/MentorsItem';

const Mentors = () => {

    return ( 
    <div className='mentors'>
        <div className='mentors-header'>
            <div className='mentors-header-text'>
                Your Mentor
            </div>
            <div className='mentors-header-see-all'>
                <a href='#'>See All</a>
            </div>
        </div>
        <div className='mentors-list-header'>
            <div className='mentors-list-header-name'>
                Instructor Name & Date
            </div>
            <div className='mentors-list-header-type'>
                Course Type
            </div>
            <div className='mentors-list-header-title'>
                Course Title
            </div>
            <div className='mentors-list-header-actions'>
                Actions
            </div>
        </div>
        <div className='mentors-list'>
            <MentorsItem 
                image = 'prasant.jpg'
                name = 'Prasant Kumar Singh'
                date= '25/2/2023'
                type = 'Frontend'
                title = 'Understanding Concepts Of React'
                action = 'Show Details'
            />
            <MentorsItem 
                image = 'prasant.jpg'
                name = 'Ravi Kumar'
                date= '25/2/2023'
                type = 'Frontend'
                title = 'Understanding Concepts Of React'
                action = 'Show Details'
            />
        </div>
    </div>
    );
}
 
export default Mentors;