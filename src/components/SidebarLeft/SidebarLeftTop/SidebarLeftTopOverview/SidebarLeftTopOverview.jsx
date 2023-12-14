import './SidebarLeftTopOverview.css';
import SidebarLeftTopOverviewHeader from './SidebarLeftTopOverviewHeader/SidebarLeftTopOverviewHeader';
import SidebarLeftTopOverviewList from './SidebarLeftTopOverviewList/SidebarLeftTopOverviewList';

const SidebarLeftTopOverview = () => {
    return ( 
        <div className='sidebar-left-top-overview'>
            <SidebarLeftTopOverviewHeader />
            <SidebarLeftTopOverviewList />
        </div>
     );
}
 
export default SidebarLeftTopOverview;