import SidebarLeftBottom from './SidebarLeftBottom/SidebarLeftBottom';
import SidebarLeftTop from './SidebarLeftTop/SidebarLeftTop';

const SidebarLeft = () => {
    return ( 
        <div className='sidebar-left'>
            <SidebarLeftTop />
            <SidebarLeftBottom />
        </div>
     );
}
 
export default SidebarLeft;