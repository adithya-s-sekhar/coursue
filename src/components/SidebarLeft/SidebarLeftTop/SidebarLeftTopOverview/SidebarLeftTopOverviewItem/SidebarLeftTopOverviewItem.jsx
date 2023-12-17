import './SidebarLeftTopOverviewItem.css';

const SidebarLeftTopOverviewItem = (props) => {
    const icon = props.icon;
    const name = props.name;
    const active = props.active;

    return ( 
        <div className='sidebar-left-top-overview-item'>
            <div className='sidebar-left-top-overview-item-icon'>
                {icon}
            </div>
            <div className={'sidebar-left-top-overview-item-text '+active}>
                {name}
            </div>
        </div>
     );
}
 
export default SidebarLeftTopOverviewItem;