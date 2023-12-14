import './SidebarLeftTopOverviewListItem.css';

const SidebarLeftTopOverviewListItem = (props) => {
    const icon = props.icon;
    const name = props.name;
    const active = props.active;

    return ( 
        <div className='sidebar-left-top-overview-list-item'>
            <div className='sidebar-left-top-overview-list-item-icon'>
                {icon}
            </div>
            <div className={'sidebar-left-top-overview-list-item-text '+active}>
                {name}
            </div>
        </div>
     );
}
 
export default SidebarLeftTopOverviewListItem;