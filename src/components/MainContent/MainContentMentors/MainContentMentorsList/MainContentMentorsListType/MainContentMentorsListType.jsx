import './MainContentMentorsListType.css';

const MainContentMentorsListType = (props) => {
    const type = props.type;

    return ( 
        <div className='main-content-mentors-list-type'>
            <div className='main-content-mentors-list-type-text'>
                {type}
            </div>
        </div>
     );
}
 
export default MainContentMentorsListType;