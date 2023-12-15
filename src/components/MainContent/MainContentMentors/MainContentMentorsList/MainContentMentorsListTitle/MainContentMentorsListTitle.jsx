import './MainContentMentorsListTitle.css';

const MainContentMentorsListTitle = (props) => {
    const title = props.title;

    return ( 
        <div className='main-content-mentors-list-title'>
            <div className='main-content-mentors-list-title-text'>
                {title}
            </div>
        </div>
     );
}
 
export default MainContentMentorsListTitle;