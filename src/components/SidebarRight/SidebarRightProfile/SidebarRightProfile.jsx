import './SidebarRightProfile.css';
import SidebarRightProfileContent from './SidebarRightProfileContent/SidebarRightProfileContent';
import SidebarRightProfileHeader from './SidebarRightProfileHeader/SidebarRightProfileHeader';

const SidebarRightProfile = () => {
    return ( 
        <div className='sidebar-right-profile'>
            <SidebarRightProfileHeader />
            <SidebarRightProfileContent />
        </div>
     );
}
 
export default SidebarRightProfile;