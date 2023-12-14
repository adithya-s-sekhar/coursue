import './SidebarLeftBottomSettingsListItem.css';

const SidebarLeftBottomSettingsListItem = (props) => {
    const icon = props.icon;
    const name = props.name;

    return ( 
        <div className='sidebar-left-bottom-settings-list-item'>
            <div className='sidebar-left-bottom-settings-list-item-icon'>
                {icon}
            </div>
            <div className='sidebar-left-bottom-settings-list-item-name'>
                {name}
            </div>
        </div>
     );
}
 
export default SidebarLeftBottomSettingsListItem;