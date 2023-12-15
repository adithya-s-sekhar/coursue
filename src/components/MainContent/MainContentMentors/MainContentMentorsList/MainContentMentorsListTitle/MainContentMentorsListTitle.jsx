import './MainContentMentorsListTitle.css';

const MainContentMentorsListTitle = (props) => {
    const title = props.title;

    return ( 
        <div className='main-content-mentors-list-title'>
            {title}
        </div>
     );
}
 
export default MainContentMentorsListTitle;