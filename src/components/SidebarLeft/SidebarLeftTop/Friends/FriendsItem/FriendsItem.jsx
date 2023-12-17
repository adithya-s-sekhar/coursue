const FriendsItem = (props) => {
    const image = props.image;
    const name = props.name;
    const job = props.job;

    return ( 
        <div className='friends-item'>
            <div className='friends-item-image-mask'>
                <img
                    src = {image}
                />
            </div>
            <div className='friends-item-details'>
                <div className='friends-item-details-name'>
                    {name}
                </div>
                <div className='friends-item-details-job'>
                    {job}
                </div>
            </div>
        </div>
     );
}
 
export default FriendsItem;