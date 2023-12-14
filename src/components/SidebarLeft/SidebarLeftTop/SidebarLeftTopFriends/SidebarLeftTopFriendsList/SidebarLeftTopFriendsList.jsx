import './SidebarLeftTopFriendsList.css';
import SidebarLeftTopFriendsListItem from './SidebarLeftTopFriendsListItem/SidebarLeftTopFriendsListItem';

const SidebarLeftTopFriendsList = () => {
    return ( 
        <div className='sidebar-left-top-friends-list'>
            <SidebarLeftTopFriendsListItem 
                image = 'prasant.jpg'
                name = 'Prasant'
                job = 'Software Developer'
            />
            <SidebarLeftTopFriendsListItem 
                image = 'prasant.jpg'
                name = 'Prasant'
                job = 'Software Developer'
            />
            <SidebarLeftTopFriendsListItem 
                image = 'prasant.jpg'
                name = 'Prasant'
                job = 'Software Developer'
            />
        </div>
     );
}
 
export default SidebarLeftTopFriendsList;