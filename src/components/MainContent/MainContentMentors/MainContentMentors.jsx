import MainContentMentorsList from './MainContentMentorsList/MainContentMentorsList';

const MainContentMentors = () => {
    const mentors = [
        {
            image: 'prasant.jpg',
            name: 'Prasant Kumar Singh',
            date: '25/2/2023',
            type: 'Frontend',
            title: 'Understanding Concepts Of React',
            action: 'Show Details',
            id: 1
        },
        {
            image: 'prasant.jpg',
            name: 'Ravi Kumar',
            date: '25/2/2023',
            type: 'Frontend',
            title: 'Understanding Concepts Of React',
            action: 'Show Details',
            id: 2
        }
    ]

    return ( 
    <div className='main-content-mentors'>
        <div className='main-content-mentors-header'>
            <div className='main-content-mentors-header-text'>
                Your Mentor
            </div>
            <div className='main-content-mentors-header-see-all'>
                <a href='#'>See All</a>
            </div>
        </div>
        <MainContentMentorsList 
            mentors = {mentors}
        />
    </div>
    );
}
 
export default MainContentMentors;