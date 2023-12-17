const MentorsListAction = (props) => {
    const action = props.action;

    return ( 
        <div className='mentors-list-action'>
            <div className='mentors-list-action-text'>
                {action}
            </div>
        </div>
     );
}
 
export default MentorsListAction;