import React, { } from 'react';

export function VideoItem(key, video) {
    return (
        <div>
            <video className="video-item" width="320" height="240" controls>
                <source src="videos/drug.mp4" type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
        </div>
    );
}