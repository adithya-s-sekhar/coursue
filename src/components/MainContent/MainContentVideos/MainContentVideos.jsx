import './MainContentVideos.css';
import MainContentVideosHeader from './MainContentVideosHeader/MainContentVideosHeader';
import MainContentVideosList from './MainContentVideosList/MainContentVideosList';

const MainContentVideos = () => {
    return ( 
        <div className='main-content-videos'>
            <MainContentVideosHeader />
            <MainContentVideosList />
        </div>
     );
}
 
export default MainContentVideos;