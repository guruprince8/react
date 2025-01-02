export function VideoItem(video) {
    return (
        <div className="video-item" key={video.id}>
            <h1>Video ID: {video.id}</h1>
        </div>
    );
}