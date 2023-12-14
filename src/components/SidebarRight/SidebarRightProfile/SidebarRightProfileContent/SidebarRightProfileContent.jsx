import './SidebarRightProfileContent.css';
import SidebarRightProfileContentGraphs from './SidebarRightProfileContentGraphs/SidebarRightProfileContentGraphs';
import SidebarRightProfileContentMentors from './SidebarRightProfileContentMentors/SidebarRightProfileContentMentors';
import SidebarRightProfileContentMiniProfile from './SidebarRightProfileContentMiniProfile/SidebarRightProfileContentMiniProfile';

const SidebarRightProfileContent = () => {
    return ( 
        <div className='sidebar-right-profile-content'>
            <SidebarRightProfileContentMiniProfile />
            <SidebarRightProfileContentGraphs />
            <SidebarRightProfileContentMentors />
        </div>
     );
}
 
export default SidebarRightProfileContent;