import './MainContentSearchBox.css';

const MainContentSearchBox = () => {
    return ( 
        <div className='main-content-search-box'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M7.66683 14C11.1646 14 14.0002 11.1644 14.0002 7.66665C14.0002 4.16884 11.1646 1.33331 7.66683 1.33331C4.16903 1.33331 1.3335 4.16884 1.3335 7.66665C1.3335 11.1644 4.16903 14 7.66683 14Z" stroke="#9E9E9E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M14.6668 14.6666L13.3335 13.3333" stroke="#9E9E9E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <input
                type = 'text'
                placeholder = 'Search your course here....'
            />
        </div>
     );
}
 
export default MainContentSearchBox;