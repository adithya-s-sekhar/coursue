import './MainContentMentorsListAction.css';

const MainContentMentorsListAction = (props) => {
    const action = props.action;
    
    return ( 
        <div className='main-content-mentors-list-action'>
            {action}
        </div>
     );
}
 
export default MainContentMentorsListAction;