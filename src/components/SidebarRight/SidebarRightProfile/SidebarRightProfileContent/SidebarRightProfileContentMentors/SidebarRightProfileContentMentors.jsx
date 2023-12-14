import './SidebarRightProfileContentMentors.css';
import SidebarRightProfileContentMentorsHeader from './SidebarRightProfileContentMentorsHeader/SidebarRightProfileContentMentorsHeader';
import SidebarRightProfileContentMentorsList from './SidebarRightProfileContentMentorsList/SidebarRightProfileContentMentorsList';
import SidebarRightProfileContentMentorsSeeAllBtn from './SidebarRightProfileContentMentorsSeeAllBtn/SidebarRightProfileContentMentorsSeeAllBtn';

const SidebarRightProfileContentMentors = () => {
    return ( 
        <div className='sidebar-right-profile-content-mentors'>
            <SidebarRightProfileContentMentorsHeader />
            <SidebarRightProfileContentMentorsList />
            <SidebarRightProfileContentMentorsSeeAllBtn />
        </div>
     );
}
 
export default SidebarRightProfileContentMentors;