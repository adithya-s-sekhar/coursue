import ProfileMentorsListItem from './ProfileMentorsListItem/ProfileMentorsListItem';

const ProfileMentors = () => {
    return ( 
        <div className='profile-mentors'>
            <div className='profile-mentors-header'>
                <div className='profile-mentors-header-text'>
                    Your Mentor
                </div>
                <div className='profile-mentors-header-button'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M3 6H9" stroke="#9E9E9E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M6 9V3" stroke="#9E9E9E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
            <div className='profile-mentors-list'>
                <ProfileMentorsListItem 
                    image = 'prasant.jpg'
                    name = 'Prasant Kumar Singh'
                    job = 'Software Developer'
                />
                    <svg xmlns="http://www.w3.org/2000/svg" width="225" height="2" viewBox="0 0 225 2" fill="none">
                        <path d="M224 1.25C224.138 1.25 224.25 1.13807 224.25 1C224.25 0.861929 224.138 0.75 224 0.75V1.25ZM0 1.25H224V0.75H0V1.25Z" fill="#D8D8D8"/>
                    </svg>
                <ProfileMentorsListItem 
                    image = 'prasant.jpg'
                    name = 'Prasant Kumar Singh'
                    job = 'Software Developer'
                />
                    <svg xmlns="http://www.w3.org/2000/svg" width="225" height="2" viewBox="0 0 225 2" fill="none">
                        <path d="M224 1.25C224.138 1.25 224.25 1.13807 224.25 1C224.25 0.861929 224.138 0.75 224 0.75V1.25ZM0 1.25H224V0.75H0V1.25Z" fill="#D8D8D8"/>
                    </svg>
                <ProfileMentorsListItem 
                    image = 'prasant.jpg'
                    name = 'Prasant Kumar Singh'
                    job = 'Software Developer'
                />
                    <svg xmlns="http://www.w3.org/2000/svg" width="225" height="2" viewBox="0 0 225 2" fill="none">
                        <path d="M224 1.25C224.138 1.25 224.25 1.13807 224.25 1C224.25 0.861929 224.138 0.75 224 0.75V1.25ZM0 1.25H224V0.75H0V1.25Z" fill="#D8D8D8"/>
                    </svg>
                <ProfileMentorsListItem 
                    image = 'prasant.jpg'
                    name = 'Prasant Kumar Singh'
                    job = 'Software Developer'
                />
                    <svg xmlns="http://www.w3.org/2000/svg" width="225" height="2" viewBox="0 0 225 2" fill="none">
                        <path d="M224 1.25C224.138 1.25 224.25 1.13807 224.25 1C224.25 0.861929 224.138 0.75 224 0.75V1.25ZM0 1.25H224V0.75H0V1.25Z" fill="#D8D8D8"/>
                    </svg>
                <ProfileMentorsListItem 
                    image = 'prasant.jpg'
                    name = 'Prasant Kumar Singh'
                    job = 'Software Developer'
                />
            </div>
            <div className='profile-mentors-see-all-btn'>
                <div className='profile-mentors-see-all-btn-text'>
                    See All
                </div>
            </div>
        </div>
     );
}
 
export default ProfileMentors;