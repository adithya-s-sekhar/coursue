import './SidebarLeftBottomSettingsList.css';
import SidebarLeftBottomSettingsListItem from './SidebarLeftBottomSettingsListItem/SidebarLeftBottomSettingsListItem';

const SidebarLeftBottomSettingsList = () => {
    const icon_settings = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8 10.5C9.10457 10.5 10 9.60457 10 8.5C10 7.39543 9.10457 6.5 8 6.5C6.89543 6.5 6 7.39543 6 8.5C6 9.60457 6.89543 10.5 8 10.5Z" stroke="#202020" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M1.3335 9.08667V7.91333C1.3335 7.22 1.90016 6.64667 2.60016 6.64667C3.80683 6.64667 4.30016 5.79333 3.6935 4.74667C3.34683 4.14667 3.5535 3.36667 4.16016 3.02L5.3135 2.36C5.84016 2.04667 6.52016 2.23333 6.8335 2.76L6.90683 2.88667C7.50683 3.93333 8.4935 3.93333 9.10016 2.88667L9.1735 2.76C9.48683 2.23333 10.1668 2.04667 10.6935 2.36L11.8468 3.02C12.4535 3.36667 12.6602 4.14667 12.3135 4.74667C11.7068 5.79333 12.2002 6.64667 13.4068 6.64667C14.1002 6.64667 14.6735 7.21333 14.6735 7.91333V9.08667C14.6735 9.78 14.1068 10.3533 13.4068 10.3533C12.2002 10.3533 11.7068 11.2067 12.3135 12.2533C12.6602 12.86 12.4535 13.6333 11.8468 13.98L10.6935 14.64C10.1668 14.9533 9.48683 14.7667 9.1735 14.24L9.10016 14.1133C8.50016 13.0667 7.5135 13.0667 6.90683 14.1133L6.8335 14.24C6.52016 14.7667 5.84016 14.9533 5.3135 14.64L4.16016 13.98C3.5535 13.6333 3.34683 12.8533 3.6935 12.2533C4.30016 11.2067 3.80683 10.3533 2.60016 10.3533C1.90016 10.3533 1.3335 9.78 1.3335 9.08667Z" stroke="#202020" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>;

    const icon_logout = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M5.93311 5.54C6.13977 3.14 7.37311 2.16 10.0731 2.16H10.1598C13.1398 2.16 14.3331 3.35333 14.3331 6.33333V10.68C14.3331 13.66 13.1398 14.8533 10.1598 14.8533H10.0731C7.39311 14.8533 6.15977 13.8867 5.93977 11.5267" stroke="#F13E3E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M10.0002 8.5H2.41357" stroke="#F13E3E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M3.89984 6.26667L1.6665 8.5L3.89984 10.7333" stroke="#F13E3E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>;

    return ( 
        <div className='sidebar-left-bottom-settings-list'>
            <SidebarLeftBottomSettingsListItem 
                icon = {icon_settings}
                name = 'Settings'
            />
            <SidebarLeftBottomSettingsListItem
                icon = {icon_logout}
                name = 'Logout'
            />
        </div>
     );
}
 
export default SidebarLeftBottomSettingsList;