import './MainContentMentorsListItem.css';

const MainContentMentorsListItem = (props) => {
    const image = props.image;
    const name = props.name;
    const date = props.date;
    const type = props.type;
    const title = props.title;
    const action = props.action;

    return ( 
        <div className='main-content-mentors-list-item'>
            <div className='main-content-mentors-list-item-instructor'>
                <div className='main-content-mentors-list-item-instructor-image-mask'>
                    <img src={image} />
                </div>
                <div className='main-content-mentors-list-item-instructor-details'>
                    <div className='main-content-mentors-list-item-instructor-name'>
                        {name}
                    </div>
                    <div className='main-content-mentors-list-item-instructor-date'>
                        {date}
                    </div>
                </div>
            </div>
            <div className='main-content-mentors-list-item-type'>
                {type}
            </div>
            <div className='main-content-mentors-list-item-title'>
                {title}
            </div>
            <div className='main-content-mentors-list-item-actions'>
                {action}
            </div>
        </div>
     );
}
 
export default MainContentMentorsListItem;