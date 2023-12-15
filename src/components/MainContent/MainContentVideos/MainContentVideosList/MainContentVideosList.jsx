import './MainContentVideosList.css';
import MainContentVideosListItem from './MainContentVideosListItem/MainContentVideosListItem';

const MainContentVideosList = () => {
    return ( 
        <div className='main-content-videos-list'>
            <MainContentVideosListItem 
                thumb = 'thumb1.jpg'
                category = 'Frontend'
                title = 'Beginners Guide To Becoming A Professional Frontend Developer'
                progress = '50%'
                uploaderImage = 'prasant.jpg'
                uploaderName = 'Prasant Kumar Singh'
                uploaderJob = 'Software Developer'
            />
            <MainContentVideosListItem 
                thumb = 'thumb2.png'
                category = 'Frontend'
                title = 'Beginners Guide To Becoming A Professional Frontend Developer'
                progress = '50%'
                uploaderImage = 'prasant.jpg'
                uploaderName = 'Prasant Kumar Singh'
                uploaderJob = 'Software Developer'
            />
            <MainContentVideosListItem 
                thumb = 'thumb3.jpg'
                category = 'Frontend'
                title = 'Beginners Guide To Becoming A Professional Frontend Developer'
                progress = '50%'
                uploaderImage = 'prasant.jpg'
                uploaderName = 'Prasant Kumar Singh'
                uploaderJob = 'Software Developer'
            />
        </div>
     );
}
 
export default MainContentVideosList;