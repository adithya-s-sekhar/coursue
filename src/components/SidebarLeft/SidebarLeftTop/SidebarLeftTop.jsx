import SidebarLeftTopFriends from './SidebarLeftTopFriends/SidebarLeftTopFriends';
import SidebarLeftTopLogo from './SidebarLeftTopLogo/SidebarLeftTopLogo';
import SidebarLeftTopOverview from './SidebarLeftTopOverview/SidebarLeftTopOverview';

const SidebarLeftTop = () => {
    return ( 
        <div className='sidebar-left-top'>
            <SidebarLeftTopLogo />
            <SidebarLeftTopOverview />
            <SidebarLeftTopFriends />
        </div>
     );
}
 
export default SidebarLeftTop;