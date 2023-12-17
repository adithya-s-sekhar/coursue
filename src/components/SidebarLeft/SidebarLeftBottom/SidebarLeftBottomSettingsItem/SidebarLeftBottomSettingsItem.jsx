import './SidebarLeftBottomSettingsItem.css';

const SidebarLeftBottomSettingsItem = (props) => {
    const icon = props.icon;
    const name = props.name;

    return ( 
        <div className='sidebar-left-bottom-settings-item'>
            <div className='sidebar-left-bottom-settings-item-icon'>
                {icon}
            </div>
            <div className='sidebar-left-bottom-settings-item-name'>
                {name}
            </div>
        </div>
     );
}
 
export default SidebarLeftBottomSettingsItem;