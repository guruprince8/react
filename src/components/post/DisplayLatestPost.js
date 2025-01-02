import { Card, Container, Stack } from "react-bootstrap"
import Parser from 'html-react-parser';

import cognizantlogo from './cognizant_logo.jpeg'

export default function DisplayListPost() {

    const latestPosts = [
        {
            'id':'1',
            'key':'1',
            'header': 'Cognizant',
            'title': 'Special title treatment',
            'text': '<p>Partnership is all about bringing ideas to life—and hashtag#AWSreInvent☁️ was full of them.</p><p>Here\'s what we covered:</p><ul><li>Modernization</li><li>Scalability</li><li>Ecosystems</li><li>Security</li><li>Gen AI</li></ul><p>Thank you to our associates who helped us showcase how we bring ideas to reality with AWS Partners.</p>',
            'footer': '2 days ago',
            'icon': '',
            'company': '',
            'followers': '7,798,625',
            'postTime': '5h',
            'likes': '208',
            'comments': '10',
            'reposts': 17
        }
    ]
    return <>
        <Container className="mt-1">
            {latestPosts.map((post) => {
                return (
                    <Card className="mt-1" key={post.key}>
                        <Card.Header>
                            <Stack direction='horizontal'>
                                <div>
                                    <img src={cognizantlogo} height='50' alt="cognizant logo" />
                                </div>
                                <div>
                                    <Stack>
                                        <div>
                                            {post.header}
                                        </div>
                                        <div>
                                            {post.followers + ' followers'}
                                        </div>
                                        <div>
                                            {post.postTime + '. Edited .'}
                                        </div>

                                    </Stack>
                                </div>
                            </Stack>
                        </Card.Header>
                        <Card.Body>
                            {/* <Card.Title>{post.title}</Card.Title> */}
                            <Card.Text>{Parser(post.text)}</Card.Text>
                        </Card.Body>
                        <Card.Footer className="text-muted">
                            <div className="border-bottom mb-1 p-2">
                                <div className="row">
                                    <div className="col">
                                        <div className="d-flex justify-content-start">
                                            <i className="bi bi-heart-fill"></i> {post.likes}
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="d-flex justify-content-end">

                                            <span>
                                                {post.comments + ' comments'} &nbsp; {post.reposts + ' reposts'}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-1">
                                Like &nbsp; Comment &nbsp; Repost &nbsp; Send
                            </div>

                        </Card.Footer>
                    </Card>
                );

            })}
        </Container>


    </>
}