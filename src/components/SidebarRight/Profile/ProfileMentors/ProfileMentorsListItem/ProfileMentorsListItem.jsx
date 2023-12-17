const ProfileMentorsListItem = (props) => {
    const image = props.image;
    const name = props.name;
    const job = props.job;

    return ( 
        <div className='profile-mentors-list-item'>
            <div className='profile-mentors-list-item-image-mask'>
                <img src={image} />
            </div>
            <div className='profile-mentors-list-item-details'>
                <div className='profile-mentors-list-item-details-name'>
                    {name}
                </div>
                <div className='profile-mentors-list-item-details-job'>
                    {job}
                </div>
            </div>
            <div className='profile-mentors-list-item-follow'>
                    Follow
            </div>
        </div>
     );
}
 
export default ProfileMentorsListItem;