const MentorsListInstructor = (props) => {
    const image = props.image;
    const name = props.name;
    const date = props.date;

    return ( 
        <div className='mentors-list-instructor'>
            <div className='mentors-list-instructor-image-mask'>
                <img src={image} />
            </div>
            <div className='mentors-list-instructor-details'>
                <div className='mentors-list-instructor-name'>
                    {name}
                </div>
                <div className='mentors-list-instructor-date'>
                    {date}
                </div>
            </div>
        </div>
     );
}
 
export default MentorsListInstructor;