const MentorsListType = (props) => {
    const type = props.type;

    return ( 
        <div className='mentors-list-type'>
            <div className='mentors-list-type-text'>
                {type}
            </div>
        </div>
     );
}
 
export default MentorsListType;