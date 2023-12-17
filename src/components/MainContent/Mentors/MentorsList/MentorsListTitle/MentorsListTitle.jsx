const MentorsListTitle = (props) => {
    const title = props.title;

    return ( 
        <div className='mentors-list-title'>
            <div className='mentors-list-title-text'>
                {title}
            </div>
        </div>
     );
}
 
export default MentorsListTitle;