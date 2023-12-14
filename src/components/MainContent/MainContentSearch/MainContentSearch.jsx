import './MainContentSearch';
import MainContentSearchBox from './MainContentSearchBox/MainContentSearchBox';
import MainContentSearchFilter from './MainContentSearchFilter/MainContentSearchFilter';

const MainContentSearch = () => {
    return ( 
        <div className='main-content-search'>
            <MainContentSearchBox />
            <MainContentSearchFilter />
        </div>
     );
}
 
export default MainContentSearch;