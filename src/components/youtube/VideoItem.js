import React, { } from 'react';

export function VideoItem(key, video) {
    // const [videoItem, setVideoItem] = useState({});
    // useEffect(() => {
    //     setVideoItem(video);
    //     console.log("Video",videoItem);
    // }, [video]);

    return (
        <div>
            <video width="320" height="240" controls className="video-item">
                <source src="videos/drug.mp4"
                type="video/mp4">
                </source>
            {/* <source src="movie.ogg" type="video/ogg"></source> */}
            Your browser does not support the video tag.
            </video>
        </div>
    );
}