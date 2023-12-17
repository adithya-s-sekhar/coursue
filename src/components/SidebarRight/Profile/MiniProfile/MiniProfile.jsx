const MiniProfile = (props) => {
    const image = props.image;
    const name = props.name;

    return ( 
        <div className='mini-profile'>
            <div className='mini-profile-circle'>
                <div className='mini-profile-circle-border'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
                        <path d="M100 50C100 77.6142 77.6142 100 50 100C22.3858 100 0 77.6142 0 50C0 22.3858 22.3858 0 50 0C77.6142 0 100 22.3858 100 50ZM7.35402 50C7.35402 73.5527 26.4473 92.646 50 92.646C73.5527 92.646 92.646 73.5527 92.646 50C92.646 26.4473 73.5527 7.35402 50 7.35402C26.4473 7.35402 7.35402 26.4473 7.35402 50Z" fill="#CCCCCC" fill-opacity="0.3"/>
                        <path d="M92.2571 68.9779C94.1096 69.8098 96.2996 68.9861 96.9933 67.0775C100.817 56.5572 101.01 45.0181 97.4784 34.3218C93.5606 22.4578 85.3431 12.4904 74.4437 6.3823C63.5444 0.274224 50.7532 -1.5319 38.5888 1.31957C27.6217 3.89038 17.8806 10.0791 10.9032 18.8319C9.63738 20.4198 10.078 22.7178 11.7546 23.8636C13.4313 25.0094 15.7075 24.5671 16.9934 22.9953C22.9191 15.7523 31.0898 10.6308 40.2671 8.4795C50.6424 6.04743 61.5523 7.58791 70.8485 12.7976C80.1448 18.0073 87.1537 26.5087 90.4952 36.6278C93.4509 45.5785 93.3477 55.2211 90.263 64.0562C89.5936 65.9735 90.4046 68.1459 92.2571 68.9779Z" fill="#702DFF"/>
                    </svg>
                    <div className='mini-profile-circle-image-mask'>
                        <img src={image} />
                    </div>
                </div>
            </div>
            <div className='mini-profile-details'>
                <div className='mini-profile-details-greeting'>
                    {'Good Morning '+name}
                </div>
                <div className='mini-profile-details-advice'>
                    Continue your journey and achieve your target
                </div>
            </div>
            <div className='mini-profile-icons'>
                <div className='mini-profile-icons-item'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M8.01339 1.94C5.80673 1.94 4.01339 3.73334 4.01339 5.94V7.86667C4.01339 8.27334 3.84006 8.89334 3.63339 9.24L2.86673 10.5133C2.39339 11.3 2.72006 12.1733 3.58673 12.4667C6.46006 13.4267 9.56006 13.4267 12.4334 12.4667C13.2401 12.2 13.5934 11.2467 13.1534 10.5133L12.3867 9.24C12.1867 8.89334 12.0134 8.27334 12.0134 7.86667V5.94C12.0134 3.74 10.2134 1.94 8.01339 1.94Z" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/>
                        <path d="M9.2467 2.13333C9.04003 2.07333 8.8267 2.02667 8.6067 2C7.9667 1.92 7.35336 1.96667 6.78003 2.13333C6.97336 1.64 7.45336 1.29333 8.01336 1.29333C8.57336 1.29333 9.05336 1.64 9.2467 2.13333Z" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M10.0134 12.7067C10.0134 13.8067 9.11343 14.7067 8.01343 14.7067C7.46676 14.7067 6.96009 14.48 6.60009 14.12C6.24009 13.76 6.01343 13.2533 6.01343 12.7067" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10"/>
                    </svg>
                </div>
                <div className='mini-profile-icons-item'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M5.99992 14.6666H9.99992C13.3333 14.6666 14.6666 13.3333 14.6666 9.99998V5.99998C14.6666 2.66665 13.3333 1.33331 9.99992 1.33331H5.99992C2.66659 1.33331 1.33325 2.66665 1.33325 5.99998V9.99998C1.33325 13.3333 2.66659 14.6666 5.99992 14.6666Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M1.33325 8.66664H3.83992C4.34659 8.66664 4.80659 8.95331 5.03325 9.40664L5.62659 10.6C5.99992 11.3333 6.66659 11.3333 6.82659 11.3333H9.17992C9.68659 11.3333 10.1466 11.0466 10.3733 10.5933L10.9666 9.39997C11.1933 8.94664 11.6533 8.65997 12.1599 8.65997H14.6533" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div className='mini-profile-icons-item'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M5.99992 14.6666H9.99992C13.3333 14.6666 14.6666 13.3333 14.6666 9.99998V5.99998C14.6666 2.66665 13.3333 1.33331 9.99992 1.33331H5.99992C2.66659 1.33331 1.33325 2.66665 1.33325 5.99998V9.99998C1.33325 13.3333 2.66659 14.6666 5.99992 14.6666Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M1.33325 8.66664H3.83992C4.34659 8.66664 4.80659 8.95331 5.03325 9.40664L5.62659 10.6C5.99992 11.3333 6.66659 11.3333 6.82659 11.3333H9.17992C9.68659 11.3333 10.1466 11.0466 10.3733 10.5933L10.9666 9.39997C11.1933 8.94664 11.6533 8.65997 12.1599 8.65997H14.6533" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
        </div>
     );
}
 
export default MiniProfile;