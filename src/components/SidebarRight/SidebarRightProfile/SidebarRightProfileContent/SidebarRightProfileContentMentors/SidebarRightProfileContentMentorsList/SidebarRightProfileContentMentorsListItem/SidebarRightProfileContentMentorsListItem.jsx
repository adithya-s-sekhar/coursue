import './SidebarRightProfileContentMentorsListItem.css';

const SidebarRightProfileContentMentorsListItem = (props) => {
    const image = props.image;
    const name = props.name;
    const job = props.job;

    return ( 
        <div className='sidebar-right-profile-content-mentors-list-item'>
            <div className='sidebar-right-profile-content-mentors-list-item-image-mask'>
                <img src={image} />
            </div>
            <div className='sidebar-right-profile-content-mentors-list-item-details'>
                <div className='sidebar-right-profile-content-mentors-list-item-details-name'>
                    {name}
                </div>
                <div className='sidebar-right-profile-content-mentors-list-item-details-job'>
                    {job}
                </div>
            </div>
            <div className='sidebar-right-profile-content-mentors-list-item-follow'>
                    Follow
            </div>
        </div>
     );
}
 
export default SidebarRightProfileContentMentorsListItem;