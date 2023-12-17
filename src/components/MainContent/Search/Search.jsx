const Search = () => {
    return ( 
        <div className='search'>
            <div className='search-box'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M7.66683 14C11.1646 14 14.0002 11.1644 14.0002 7.66665C14.0002 4.16884 11.1646 1.33331 7.66683 1.33331C4.16903 1.33331 1.3335 4.16884 1.3335 7.66665C1.3335 11.1644 4.16903 14 7.66683 14Z" stroke="#9E9E9E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M14.6668 14.6666L13.3335 13.3333" stroke="#9E9E9E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <input
                    type = 'text'
                    placeholder = 'Search your course here....'
                />
            </div>
            <div className='search-filter'>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M7.20011 2.79999H24.8001C26.2668 2.79999 27.4668 3.99999 27.4668 5.46665V8.39999C27.4668 9.46666 26.8001 10.8 26.1334 11.4667L20.4001 16.5333C19.6001 17.2 19.0668 18.5333 19.0668 19.6V25.3333C19.0668 26.1333 18.5334 27.2 17.8668 27.6L16.0001 28.8C14.2668 29.8667 11.8668 28.6667 11.8668 26.5333V19.4667C11.8668 18.5333 11.3334 17.3333 10.8001 16.6667L5.73345 11.3333C5.06678 10.6667 4.53345 9.46665 4.53345 8.66665V5.59999C4.53345 3.99999 5.73345 2.79999 7.20011 2.79999Z" stroke="#5F5F5F" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M14.5733 2.79999L8 13.3333" stroke="#5F5F5F" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
        </div>
     );
}
 
export default Search;