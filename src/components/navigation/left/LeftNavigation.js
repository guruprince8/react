// import react components 
import { leftNavigationItems } from './LeftNavigationData';
import LeftNavigationItem from './LeftNavigationItem';
export default function LeftNavigation() {
    return <>
        <nav id="sidebar">
            {leftNavigationItems.map((item) => ( 
                <LeftNavigationItem key={item.id} 
                    iconClass={item.iconClass} 
                    text={item.text} 
                    link={item.link}>
                </LeftNavigationItem> ))}
        </nav>
    </>
}