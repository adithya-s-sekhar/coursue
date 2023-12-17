import './OverviewItem.css';

const OverviewItem = (props) => {
    const icon = props.icon;
    const name = props.name;
    const active = props.active;

    return ( 
        <div className='overview-item'>
            <div className='overview-item-icon'>
                {icon}
            </div>
            <div className={'overview-item-text '+active}>
                {name}
            </div>
        </div>
     );
}
 
export default OverviewItem;