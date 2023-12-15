import './MainContentMentorsListAction.css';

const MainContentMentorsListAction = (props) => {
    const action = props.action;

    return ( 
        <div className='main-content-mentors-list-action'>
            <div className='main-content-mentors-list-action-text'>
                {action}
            </div>
        </div>
     );
}
 
export default MainContentMentorsListAction;