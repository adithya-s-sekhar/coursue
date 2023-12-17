
const MainContentVideoItem = (props) => {
    const thumb = props.thumb;
    const category = props.category;
    const title = props.title;
    const progress = props.progress;
    const uploaderImage = props.uploaderImage;
    const uploaderName = props.uploaderName;
    const uploaderJob = props.uploaderJob;

    return ( 
        <div className='main-content-video-item'>
            <img src={thumb} className='main-content-video-item-thumb' />
            <div className='main-content-video-item-category'>
                {category}
            </div>
            <div className='main-content-video-item-title'>
                {title}
            </div>
            <div className='main-content-video-item-progress'>
                <div className='main-content-video-item-progress-completed' style={{width: `${progress}`}}>
                </div>
            </div>
            <div className='main-content-video-item-uploader'>
                <div className='main-content-video-item-uploader-image-mask'>
                    <img src={uploaderImage} />
                </div>
                <div className='main-content-video-item-uploader-details'>
                    <div className='main-content-video-item-uploader-name'>
                        {uploaderName}
                    </div>
                    <div className='main-content-video-item-uploader-job'>
                        {uploaderJob}
                    </div>
                </div>
            </div>
            <div className='main-content-video-item-heart'>
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                    <path d="M4.2065 6.93666C4.09317 6.97666 3.9065 6.97666 3.79317 6.93666C2.8265 6.60666 0.666504 5.22999 0.666504 2.89666C0.666504 1.86666 1.4965 1.03333 2.51984 1.03333C3.1265 1.03333 3.66317 1.32666 3.99984 1.77999C4.3365 1.32666 4.8765 1.03333 5.47984 1.03333C6.50317 1.03333 7.33317 1.86666 7.33317 2.89666C7.33317 5.22999 5.17317 6.60666 4.2065 6.93666Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
        </div>
     );
}
 
export default MainContentVideoItem;