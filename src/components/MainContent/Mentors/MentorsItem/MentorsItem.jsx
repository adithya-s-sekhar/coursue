const MentorsItem = (props) => {  
    const image = props.image;
    const name = props.name;
    const date = props.date;
    const type = props.type;
    const title = props.title;
    const action = props.action;

    return (
        <div className="mentors-item">
            <div className="mentors-item-instructor">
                <div className="mentors-instructor-image-mask">
                    <img src={image} />
                </div>
                <div className="mentors-instructor-details">
                    <div className="mentors-instructor-name">
                        {name}
                    </div>
                    <div className="mentors-instructor-date">
                        {date}
                    </div>
                </div>
            </div>
            <div className="mentors-item-type">
                <div className="mentors-item-type-box">
                    <div className="mentors-item-type-text">
                        {type}
                    </div>
                </div>
            </div>
            <div className="mentors-item-title">
                <div className="mentors-item-title-text">
                    {title}
                </div>
            </div>
            <div className="mentors-item-action">
                <div className="mentors-item-action-box">
                    <div className="mentors-item-action-text">
                        {action}
                    </div>
                </div>
            </div>
        </div> 
    );
}
 
export default MentorsItem;