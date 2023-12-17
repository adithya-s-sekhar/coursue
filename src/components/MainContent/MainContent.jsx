import MainContentAd from './MainContentAd/MainContentAd';
import MainContentMentors from './MainContentMentors/MainContentMentors';
import MainContentVideos from './MainContentVideos/MainContentVideos';
import MainContentWatchedCards from './MainContentWatchedCards/MainContentWatchedCards';
import MainContentSearch from './MainContentSearch/MainContentSearch';

const MainContent = () => {
    return ( 
        <div className='main-content'>
            <MainContentSearch />
            <MainContentAd />
            <MainContentWatchedCards />
            <MainContentVideos />
            <MainContentMentors />
        </div>
     );
}
 
export default MainContent;