import './SidebarLeftTopFriendsItem.css';

const SidebarLeftTopFriendsItem = (props) => {
    const image = props.image;
    const name = props.name;
    const job = props.job;

    return ( 
        <div className='sidebar-left-top-friends-item'>
            <div className='sidebar-left-top-friends-item-image-mask'>
                <img
                    src = {image}
                />
            </div>
            <div className='sidebar-left-top-friends-item-details'>
                <div className='sidebar-left-top-friends-item-details-name'>
                    {name}
                </div>
                <div className='sidebar-left-top-friends-item-details-job'>
                    {job}
                </div>
            </div>
        </div>
     );
}
 
export default SidebarLeftTopFriendsItem;