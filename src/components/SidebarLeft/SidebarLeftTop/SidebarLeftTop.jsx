import SidebarLeftTopFriends from './SidebarLeftTopFriends/SidebarLeftTopFriends';
import SidebarLeftTopLogo from './SidebarLeftTopLogo/SidebarLeftTopLogo';
import Overview from './Overview/Overview';

const SidebarLeftTop = () => {
    return ( 
        <div className='sidebar-left-top'>
            <SidebarLeftTopLogo />
            <Overview />
            <SidebarLeftTopFriends />
        </div>
     );
}
 
export default SidebarLeftTop;