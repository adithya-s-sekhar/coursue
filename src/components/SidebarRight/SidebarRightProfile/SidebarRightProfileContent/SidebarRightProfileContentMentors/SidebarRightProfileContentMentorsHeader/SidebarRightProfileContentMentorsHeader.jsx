import './SidebarRightProfileContentMentorsHeader.css';

const SidebarRightProfileContentMentorsHeader = () => {
    return ( 
        <div className='sidebar-right-profile-content-mentors-header'>
            <div className='sidebar-right-profile-content-mentors-header-text'>
                Your Mentor
            </div>
            <div className='sidebar-right-profile-content-mentors-header-button'>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M3 6H9" stroke="#9E9E9E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M6 9V3" stroke="#9E9E9E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
        </div>
     );
}
 
export default SidebarRightProfileContentMentorsHeader;