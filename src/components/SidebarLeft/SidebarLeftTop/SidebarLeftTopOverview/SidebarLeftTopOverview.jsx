import SidebarLeftTopOverviewItem from "./SidebarLeftTopOverviewItem/SidebarLeftTopOverviewItem"

const SidebarLeftTopOverview = () => {
    const icon_dashboard = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8 12.5V10.5" stroke="#702DFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M6.71318 2.37998L2.09318 6.07998C1.57318 6.49331 1.23985 7.36665 1.35318 8.01998L2.23985 13.3266C2.39985 14.2733 3.30652 15.04 4.26652 15.04H11.7332C12.6865 15.04 13.5999 14.2666 13.7599 13.3266L14.6465 8.01998C14.7532 7.36665 14.4199 6.49331 13.9065 6.07998L9.28652 2.38665C8.57318 1.81331 7.41985 1.81331 6.71318 2.37998Z" stroke="#702DFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>

    const icon_inbox = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8 1.83331V6.49998L9.33333 5.16665" stroke="#202020" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M7.99984 6.50002L6.6665 5.16669" stroke="#202020" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M1.31982 9.16669H4.25982C4.51316 9.16669 4.73982 9.30669 4.85316 9.53335L5.63316 11.0934C5.85982 11.5467 6.31982 11.8334 6.82649 11.8334H9.17983C9.68649 11.8334 10.1465 11.5467 10.3732 11.0934L11.1532 9.53335C11.2665 9.30669 11.4998 9.16669 11.7465 9.16669H14.6532" stroke="#202020" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M4.66683 3.25336C2.30683 3.60002 1.3335 4.98669 1.3335 7.83336V10.5C1.3335 13.8334 2.66683 15.1667 6.00016 15.1667H10.0002C13.3335 15.1667 14.6668 13.8334 14.6668 10.5V7.83336C14.6668 4.98669 13.6935 3.60002 11.3335 3.25336" stroke="#202020" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>

    const icon_lesson = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M14.4468 10.0334L14.1802 13.3667C14.0802 14.3867 14.0002 15.1667 12.1935 15.1667H3.80684C2.00017 15.1667 1.92017 14.3867 1.82017 13.3667L1.5535 10.0334C1.50017 9.48004 1.6735 8.96671 1.98684 8.57337C1.9935 8.56671 1.9935 8.56671 2.00017 8.56004C2.36684 8.11337 2.92017 7.83337 3.54017 7.83337H12.4602C13.0802 7.83337 13.6268 8.11337 13.9868 8.54671C13.9935 8.55337 14.0002 8.56004 14.0002 8.56671C14.3268 8.96004 14.5068 9.47337 14.4468 10.0334Z" stroke="#202020" stroke-width="1.5" stroke-miterlimit="10"/><path d="M2.3335 8.12V4.68667C2.3335 2.42 2.90016 1.85333 5.16683 1.85333H6.0135C6.86016 1.85333 7.0535 2.10667 7.3735 2.53333L8.22016 3.66667C8.4335 3.94667 8.56016 4.12 9.12683 4.12H10.8268C13.0935 4.12 13.6602 4.68667 13.6602 6.95333V8.14667" stroke="#202020" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M6.28662 11.8334H9.71329" stroke="#202020" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>

    const icon_task = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.24658 6.41998H11.7466" stroke="#202020" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M4.25342 6.41998L4.75342 6.91998L6.25342 5.41998" stroke="#202020" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M8.24658 11.0867H11.7466" stroke="#202020" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M4.25342 11.0867L4.75342 11.5867L6.25342 10.0867" stroke="#202020" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M6.00016 15.1666H10.0002C13.3335 15.1666 14.6668 13.8333 14.6668 10.5V6.49998C14.6668 3.16665 13.3335 1.83331 10.0002 1.83331H6.00016C2.66683 1.83331 1.3335 3.16665 1.3335 6.49998V10.5C1.3335 13.8333 2.66683 15.1666 6.00016 15.1666Z" stroke="#202020" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>

    const icon_group = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M12.0002 5.27335C11.9602 5.26668 11.9135 5.26668 11.8735 5.27335C10.9535 5.24001 10.2202 4.48668 10.2202 3.55334C10.2202 2.60001 10.9869 1.83334 11.9402 1.83334C12.8935 1.83334 13.6602 2.60668 13.6602 3.55334C13.6535 4.48668 12.9202 5.24001 12.0002 5.27335Z" stroke="#202020" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M11.3135 10.1267C12.2268 10.28 13.2335 10.12 13.9401 9.64669C14.8801 9.02003 14.8801 7.99336 13.9401 7.36669C13.2268 6.89336 12.2068 6.73336 11.2935 6.89336" stroke="#202020" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M3.97983 5.27335C4.01983 5.26668 4.06649 5.26668 4.10649 5.27335C5.02649 5.24001 5.75982 4.48668 5.75982 3.55334C5.75982 2.60001 4.99316 1.83334 4.03983 1.83334C3.08649 1.83334 2.31982 2.60668 2.31982 3.55334C2.32649 4.48668 3.05983 5.24001 3.97983 5.27335Z" stroke="#202020" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M4.66663 10.1267C3.75329 10.28 2.74663 10.12 2.03996 9.64669C1.09996 9.02003 1.09996 7.99336 2.03996 7.36669C2.75329 6.89336 3.77329 6.73336 4.68663 6.89336" stroke="#202020" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M8.00021 10.2533C7.96021 10.2467 7.91355 10.2467 7.87355 10.2533C6.95355 10.22 6.22021 9.46666 6.22021 8.53333C6.22021 7.57999 6.98688 6.81332 7.94021 6.81332C8.89355 6.81332 9.66021 7.58666 9.66021 8.53333C9.65355 9.46666 8.92021 10.2267 8.00021 10.2533Z" stroke="#202020" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M6.05998 12.3533C5.11998 12.98 5.11998 14.0067 6.05998 14.6333C7.12665 15.3467 8.87331 15.3467 9.93998 14.6333C10.88 14.0067 10.88 12.98 9.93998 12.3533C8.87998 11.6467 7.12665 11.6467 6.05998 12.3533Z" stroke="#202020" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>

    return ( 
        <div className='sidebar-left-top-overview'>
            <div className='sidebar-left-top-overview-header'>
                <div className='sidebar-left-top-overview-header-text'>
                    Overview
                </div>
            </div>
            <div className='sidebar-left-top-overview-list'>
                <SidebarLeftTopOverviewItem 
                    icon = {icon_dashboard}
                    name = 'Dashboard'
                    active = 'active'
                />
                <SidebarLeftTopOverviewItem 
                    icon = {icon_inbox}
                    name = 'Inbox'
                    active = ''
                />
                <SidebarLeftTopOverviewItem 
                    icon = {icon_lesson}
                    name = 'Lesson'
                    active = ''
                />
                <SidebarLeftTopOverviewItem 
                    icon = {icon_task}
                    name = 'Task'
                    active = ''
                />
                <SidebarLeftTopOverviewItem
                    icon = {icon_group}
                    name = 'Group'
                    active = ''
                />
            </div>
        </div>
     );
}
 
export default SidebarLeftTopOverview;