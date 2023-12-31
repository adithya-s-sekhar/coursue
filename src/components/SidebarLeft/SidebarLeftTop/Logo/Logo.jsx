const Logo = () => {
    function toggleSidebar() {
        var x = document.getElementById("overview");
        if (x.className === "overview") {
            x.className += " mobile";
        } else {
            x.className = "overview";
        }
        var x = document.getElementById("friends");
        if (x.className === "friends") {
            x.className += " mobile";
        } else {
            x.className = "friends";
        }
        var x = document.getElementById("sidebar-left-bottom");
        if (x.className === "sidebar-left-bottom") {
            x.className += " mobile";
        } else {
            x.className = "sidebar-left-bottom";
        }
    }

    return ( 
        <div className='logo' onClick={toggleSidebar}>
            <div className='logo-icon'>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M10 0C10 0 10.5518 5.14994 12.7009 7.29909C14.8501 9.44825 20 10 20 10C20 10 14.8501 10.5518 12.7009 12.7009C10.5518 14.8501 10 20 10 20C10 20 9.44825 14.8501 7.29909 12.7009C5.14994 10.5518 0 10 0 10C0 10 5.14994 9.44825 7.29909 7.29909C9.44825 5.14994 10 0 10 0Z" fill="white"/>
                </svg>
            </div>
            <div className='logo-text'>
                coursue
            </div>
        </div>
     );
}
 
export default Logo;