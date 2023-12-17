import Ad from './Ad/Ad';
import MainContentMentors from './MainContentMentors/MainContentMentors';
import Videos from './Videos/Videos';
import WatchedCards from './WatchedCards/WatchedCards';
import Search from './Search/Search';

const MainContent = () => {
    return ( 
        <div className='main-content'>
            <Search />
            <Ad />
            <WatchedCards />
            <Videos />
            <MainContentMentors />
        </div>
     );
}
 
export default MainContent;