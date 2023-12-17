import './SidebarLeftTopFriends.css';
import SidebarLeftTopFriendsItem from './SidebarLeftTopFriendsItem/SidebarLeftTopFriendsItem';

const SidebarLeftTopFriends = () => {
    return ( 
        <div className='sidebar-left-top-friends'>
            <div className='sidebar-left-top-friends-header'>
                <div className='sidebar-left-top-friends-header-text'>
                    Friends
                </div>
            </div>
            <div className='sidebar-left-top-friends-list'>
                <SidebarLeftTopFriendsItem 
                    image = 'prasant.jpg'
                    name = 'Prasant'
                    job = 'Software Developer'
                />
                <SidebarLeftTopFriendsItem 
                    image = 'prasant.jpg'
                    name = 'Prasant'
                    job = 'Software Developer'
                />
                <SidebarLeftTopFriendsItem
                    image = 'prasant.jpg'
                    name = 'Prasant'
                    job = 'Software Developer'
                />
            </div>
        </div>
     );
}
 
export default SidebarLeftTopFriends;