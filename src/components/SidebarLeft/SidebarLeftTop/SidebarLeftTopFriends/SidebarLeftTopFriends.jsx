import './SidebarLeftTopFriends.css';
import SidebarLeftTopFriendsHeader from './SidebarLeftTopFriendsHeader/SidebarLeftTopFriendsHeader';
import SidebarLeftTopFriendsList from './SidebarLeftTopFriendsList/SidebarLeftTopFriendsList';

const SidebarLeftTopFriends = () => {
    return ( 
        <div className='sidebar-left-top-friends'>
            <SidebarLeftTopFriendsHeader />
            <SidebarLeftTopFriendsList />
        </div>
     );
}
 
export default SidebarLeftTopFriends;