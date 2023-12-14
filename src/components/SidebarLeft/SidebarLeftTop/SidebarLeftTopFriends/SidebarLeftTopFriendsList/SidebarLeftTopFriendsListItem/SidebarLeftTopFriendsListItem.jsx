import './SidebarLeftTopFriendsListItem.css';

const SidebarLeftTopFriendsListItem = (props) => {
    const image = props.image;
    const name = props.name;
    const job = props.job;

    return ( 
        <div className='sidebar-left-top-friends-list-item'>
            <div className='sidebar-left-top-friends-list-item-image-mask'>
                <img
                    src = {image}
                />
            </div>
            <div className='sidebar-left-top-friends-list-item-details'>
                <div className='sidebar-left-top-friends-list-item-details-name'>
                    {name}
                </div>
                <div className='sidebar-left-top-friends-list-item-details-job'>
                    {job}
                </div>
            </div>
        </div>
     );
}
 
export default SidebarLeftTopFriendsListItem;