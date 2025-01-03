import { chaseRightLinks } from "./ChaseRightLinks"
import Tabs from 'react-bootstrap/Tabs';
import Tab from "react-bootstrap/Tab"
export default function ChaseRightNavigation() {
    return <>
        <Tabs defaultActiveKey="Personal" className="mb-3" variant="underline">
            {chaseRightLinks.map((link) => {
                return (
                    <Tab eventKey={link.title} title={link.title}>
                        {link.content}
                    </Tab>
                )
            })}
        </Tabs>
    </>
}