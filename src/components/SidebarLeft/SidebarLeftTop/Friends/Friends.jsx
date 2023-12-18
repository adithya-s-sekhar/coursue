import FriendsItem from './FriendsItem/FriendsItem';

const Friends = () => {
    return ( 
        <div className='friends' id='friends'>
            <div className='friends-header'>
                <div className='friends-header-text'>
                    Friends
                </div>
            </div>
            <div className='friends-list'>
                <FriendsItem 
                    image = 'prasant.jpg'
                    name = 'Prasant'
                    job = 'Software Developer'
                />
                <FriendsItem 
                    image = 'prasant.jpg'
                    name = 'Prasant'
                    job = 'Software Developer'
                />
                <FriendsItem
                    image = 'prasant.jpg'
                    name = 'Prasant'
                    job = 'Software Developer'
                />
            </div>
        </div>
     );
}
 
export default Friends;