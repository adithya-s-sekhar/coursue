import './MainContentAd.css';
import MainContentAdDecor from './MainContentAdDecor/MainContentAdDecor';
import MainContentAdText from './MainContentAdText/MainContentAdText';

const MainContentAd = () => {
    return ( 
        <div className='main-content-ad'>
            <MainContentAdText />
            <MainContentAdDecor />
        </div>
     );
}
 
export default MainContentAd;