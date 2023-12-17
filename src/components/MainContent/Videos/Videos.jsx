import VideosItem from './VideosItem/VideosItem';

const Videos = () => {
    return ( 
        <div className='videos'>
            <div className='videos-header'>
                <div className='videos-header-text'>
                    Continue Watching
                </div>
                <div className='videos-header-btns'>
                    <div className='videos-header-btns-item'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path d="M7.49992 9.96001L4.23992 6.70001C3.85492 6.31501 3.85492 5.68501 4.23992 5.30001L7.49992 2.04001" stroke="#9E9E9E" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div className='videos-header-btns-item'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path d="M4.45508 9.96001L7.71508 6.70001C8.10008 6.31501 8.10008 5.68501 7.71508 5.30001L4.45508 2.04001" stroke="#9E9E9E" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
            </div>
            <div className='videos-list'>
                <VideosItem 
                    thumb = 'thumb1.jpg'
                    category = 'Frontend'
                    title = 'Beginners Guide To Becoming A Professional Frontend Developer'
                    progress = '50%'
                    uploaderImage = 'prasant.jpg'
                    uploaderName = 'Prasant Kumar Singh'
                    uploaderJob = 'Software Developer'
                />
                <VideosItem 
                    thumb = 'thumb2.png'
                    category = 'Frontend'
                    title = 'Beginners Guide To Becoming A Professional Frontend Developer'
                    progress = '50%'
                    uploaderImage = 'prasant.jpg'
                    uploaderName = 'Prasant Kumar Singh'
                    uploaderJob = 'Software Developer'
                />
                <VideosItem 
                    thumb = 'thumb3.jpg'
                    category = 'Frontend'
                    title = 'Beginners Guide To Becoming A Professional Frontend Developer'
                    progress = '50%'
                    uploaderImage = 'prasant.jpg'
                    uploaderName = 'Prasant Kumar Singh'
                    uploaderJob = 'Software Developer'
                />
            </div>
        </div>
     );
}
 
export default Videos;