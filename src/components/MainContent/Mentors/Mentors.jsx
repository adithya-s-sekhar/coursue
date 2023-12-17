import MentorsList from './MentorsList/MentorsList';

const Mentors = () => {
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
    <div className='mentors'>
        <div className='mentors-header'>
            <div className='mentors-header-text'>
                Your Mentor
            </div>
            <div className='mentors-header-see-all'>
                <a href='#'>See All</a>
            </div>
        </div>
        <MentorsList 
            mentors = {mentors}
        />
    </div>
    );
}
 
export default Mentors;