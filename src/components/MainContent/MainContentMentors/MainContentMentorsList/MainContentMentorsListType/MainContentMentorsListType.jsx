import './MainContentMentorsListType.css';

const MainContentMentorsListType = (props) => {
    const type = props.type;

    return ( 
        <div className='main-content-mentors-list-type'>
                {type}
            </div>
     );
}
 
export default MainContentMentorsListType;