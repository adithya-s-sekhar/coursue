import Friends from './Friends/Friends';
import Logo from './Logo/Logo';
import Overview from './Overview/Overview';

const SidebarLeftTop = () => {
    return ( 
        <div className='sidebar-left-top'>
            <Logo />
            <Overview />
            <Friends />
        </div>
     );
}
 
export default SidebarLeftTop;