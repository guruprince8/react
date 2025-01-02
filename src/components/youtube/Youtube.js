import { videos } from "./YoutubeData";
import { Container, Row, Col } from "react-bootstrap";
import TopNavigation from "../navigation/TopNavigation";
import { VideoItem } from "./VideoItem";
import './YoutubeStyles.css';
export default function Youtube() {
    return (
        <Container fluid className="youtube-bg">
            <Row as="nav">
                <TopNavigation></TopNavigation>
            </Row>
            <Row as="section">

                <Col xs={1}>
                    hh
                </Col>
                <Col>
                    <Row>

                        {videos.map((video) => (
                            <Col>
                                <VideoItem key={video.id} video={video}></VideoItem>
                            </Col>
                        ))}
                    </Row>
                </Col>

            </Row>
        </Container>
    );
}