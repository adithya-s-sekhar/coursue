import Ad from './Ad/Ad';
import Mentors from './Mentors/Mentors';
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
            <Mentors />
        </div>
     );
}
 
export default MainContent;