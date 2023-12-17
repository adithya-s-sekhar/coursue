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
                <ProfileMentorsListItem 
                    image = 'prasant.jpg'
                    name = 'Prasant Kumar Singh'
                    job = 'Software Developer'
                />
                <ProfileMentorsListItem 
                    image = 'prasant.jpg'
                    name = 'Prasant Kumar Singh'
                    job = 'Software Developer'
                />
                <ProfileMentorsListItem 
                    image = 'prasant.jpg'
                    name = 'Prasant Kumar Singh'
                    job = 'Software Developer'
                />
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