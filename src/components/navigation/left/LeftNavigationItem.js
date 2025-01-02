import React from 'react';
import { Link } from 'react-router-dom';
import './LeftNavigationStyles.css';
import { PublishEvent } from '../../events/PublishEvent';
export default function LeftNavigationItem({ iconClass, text, link }) {
    return (
        <div className="left-navigation-item" >
            <Link to={link} onClick={() => PublishEvent(text)}>
                <i className={iconClass}></i> {text}
            </Link>
        </div>

    );
}