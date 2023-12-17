const SettingsItem = (props) => {
    const icon = props.icon;
    const name = props.name;

    return ( 
        <div className='settings-item'>
            <div className='settings-item-icon'>
                {icon}
            </div>
            <div className='settings-item-name'>
                {name}
            </div>
        </div>
     );
}
 
export default SettingsItem;