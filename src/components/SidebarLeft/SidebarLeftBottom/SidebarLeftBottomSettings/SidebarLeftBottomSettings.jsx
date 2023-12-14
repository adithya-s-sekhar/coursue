import './SidebarLeftBottomSettings.css';
import SidebarLeftBottomSettingsHeader from './SidebarLeftBottomSettingsHeader/SidebarLeftBottomSettingsHeader';
import SidebarLeftBottomSettingsList from './SidebarLeftBottomSettingsList/SidebarLeftBottomSettingsList';

const SidebarLeftBottomSettings = () => {
    return ( 
        <div className='sidebar-left-bottom-settings'>
            <SidebarLeftBottomSettingsHeader />
            <SidebarLeftBottomSettingsList />
        </div>
     );
}
 
export default SidebarLeftBottomSettings;