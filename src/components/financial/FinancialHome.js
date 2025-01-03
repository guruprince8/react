import { Container, Row, Col } from 'react-bootstrap';
import { allBanks } from './AllBanks';
import TopNavigation from '../navigation/TopNavigation';
import LeftNavigation from '../navigation/left/LeftNavigation';
import BankItem from './BankItem';

export default function FinancialHome() {
    return <>
        <Container fluid>
            <Row>
                <Col>
                    <TopNavigation></TopNavigation>
                </Col>
            </Row>
            <Row className='mt-3'>

                <Col xs={1}>
                    <LeftNavigation></LeftNavigation>
                </Col>
                <Col>
                    <Row>
                        {allBanks.map((bank, index) => {
                            return (<Col><BankItem index={index} bank={bank}></BankItem></Col>)
                        })}
                    </Row>
                </Col>

            </Row>
        </Container>


    </>
};