import MiniProfile from './MiniProfile/MiniProfile';
import Graphs from './Graphs/Graphs';
import ProfileMentors from './ProfileMentors/ProfileMentors';

const Profile = () => {
    function toggleSidebar() {
        var x = document.getElementById("profile-content");
        if (x.className === "profile-content") {
            x.className += " mobile";
        } else {
            x.className = "profile-content";
        }
    }


    return ( 
        <div className='profile'>
            <div className='profile-header' onClick={toggleSidebar}>
                <div className='profile-header-text'>
                    Your profile
                </div>
                <div className='header-icon'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M11.6667 4.16667C11.6667 3.25 10.9167 2.5 10.0001 2.5C9.08341 2.5 8.33341 3.25 8.33341 4.16667C8.33341 5.08333 9.08341 5.83333 10.0001 5.83333C10.9167 5.83333 11.6667 5.08333 11.6667 4.16667Z" stroke="#202020" stroke-width="1.5"/>
                        <path d="M11.6667 15.8334C11.6667 14.9167 10.9167 14.1667 10.0001 14.1667C9.08341 14.1667 8.33341 14.9167 8.33341 15.8334C8.33341 16.75 9.08341 17.5 10.0001 17.5C10.9167 17.5 11.6667 16.75 11.6667 15.8334Z" stroke="#202020" stroke-width="1.5"/>
                        <path d="M11.6667 9.99998C11.6667 9.08331 10.9167 8.33331 10.0001 8.33331C9.08341 8.33331 8.33341 9.08331 8.33341 9.99998C8.33341 10.9166 9.08341 11.6666 10.0001 11.6666C10.9167 11.6666 11.6667 10.9166 11.6667 9.99998Z" stroke="#202020" stroke-width="1.5"/>
                    </svg>
                </div>
            </div>
            <div className='profile-content' id='profile-content'>
                <MiniProfile 
                    image = 'prasant.jpg'
                    name = 'Prasant'
                />
                <Graphs />
                <ProfileMentors />
            </div>
        </div>
     );
}
 
export default Profile;