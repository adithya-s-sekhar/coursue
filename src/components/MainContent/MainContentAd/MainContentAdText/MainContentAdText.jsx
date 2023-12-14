import './MainContentAdText.css';

const MainContentAdText = () => {
    return ( 
        <div className='main-content-ad-text'>
            <div className='main-content-ad-text-heading'>
                Online Course
            </div>
            <div className='main-content-ad-text-caption'>
                Sharpen your skills with professional online courses
            </div>
            <div className='main-content-ad-text-join'>
                <div className='main-content-ad-text-join-label'>
                    Join Now
                </div>
                <div className='main-content-ad-text-join-btn'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <path d="M1.3335 4.00001V2.81334C1.3335 1.34001 2.37683 0.736672 3.6535 1.47334L4.6835 2.06667L5.7135 2.66001C6.99016 3.39667 6.99016 4.60334 5.7135 5.34001L4.6835 5.93334L3.6535 6.52667C2.37683 7.26334 1.3335 6.66001 1.3335 5.18667V4.00001Z" stroke="#202020" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
        </div>
     );
}
 
export default MainContentAdText;