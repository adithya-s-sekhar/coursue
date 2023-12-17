import WatchedCardsItem from './WatchedCardsItem/WatchedCardsItem';

const WatchedCards = () => {
    return ( 
        <div className='watched-cards'>
            <WatchedCardsItem 
                subject = 'Product Design'
                total = '8'
                watched = '2'
            />
            <WatchedCardsItem 
                subject = 'Product Design'
                total = '8'
                watched = '2'
            />
            <WatchedCardsItem 
                subject = 'Product Design'
                total = '8'
                watched = '2'
            />
        </div>
     );
}
 
export default WatchedCards;