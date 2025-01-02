import { videos } from "./YoutubeData";
import { Container, Row } from "react-bootstrap";
import TopNavigation from "../navigation/TopNavigation";
import { VideoItem } from "./VideoItem";
export default function Youtube() {
    return (
        <Container fluid>
            <Row as="nav">
                <TopNavigation></TopNavigation>
            </Row>
            <Row as="section">
                <div>

                    {videos.map((video) => (
                        <VideoItem key={video.id} video={video}></VideoItem>
                    ))}
                </div>
            </Row>
        </Container>
    );
}