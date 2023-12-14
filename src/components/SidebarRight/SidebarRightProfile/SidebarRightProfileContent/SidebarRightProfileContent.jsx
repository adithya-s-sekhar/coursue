import './SidebarRightProfileContent.css';
import SidebarRightProfileContentGraphs from './SidebarRightProfileContentGraphs/SidebarRightProfileContentGraphs';
import SidebarRightProfileContentMentors from './SidebarRightProfileContentMentors/SidebarRightProfileContentMentors';
import SidebarRightProfileContentMiniProfile from './SidebarRightProfileContentMiniProfile/SidebarRightProfileContentMiniProfile';

const SidebarRightProfileContent = () => {
    return ( 
        <div className='sidebar-right-profile-content'>
            <SidebarRightProfileContentMiniProfile 
                image = 'prasant.jpg'
                name = 'Prasant'
            />
            <SidebarRightProfileContentGraphs />
            <SidebarRightProfileContentMentors />
        </div>
     );
}
 
export default SidebarRightProfileContent;