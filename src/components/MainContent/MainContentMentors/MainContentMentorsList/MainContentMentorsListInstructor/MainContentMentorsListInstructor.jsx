const MainContentMentorsListInstructor = (props) => {
    const image = props.image;
    const name = props.name;
    const date = props.date;

    return ( 
        <div className='main-content-mentors-list-instructor'>
            <div className='main-content-mentors-list-instructor-image-mask'>
                <img src={image} />
            </div>
            <div className='main-content-mentors-list-instructor-details'>
                <div className='main-content-mentors-list-instructor-name'>
                    {name}
                </div>
                <div className='main-content-mentors-list-instructor-date'>
                    {date}
                </div>
            </div>
        </div>
     );
}
 
export default MainContentMentorsListInstructor;