import MainContentWatchedCardsItem from './MainContentWatchedCardsItem/MainContentWatchedCardsItem';

const MainContentWatchedCards = () => {
    return ( 
        <div className='main-content-watched-cards'>
            <MainContentWatchedCardsItem 
                subject = 'Product Design'
                total = '8'
                watched = '2'
            />
            <MainContentWatchedCardsItem 
                subject = 'Product Design'
                total = '8'
                watched = '2'
            />
            <MainContentWatchedCardsItem 
                subject = 'Product Design'
                total = '8'
                watched = '2'
            />
        </div>
     );
}
 
export default MainContentWatchedCards;