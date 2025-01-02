import { useState, useEffect } from 'react'
// import { NavLink } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import './table.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import TopNavigation from '../components/navigation/TopNavigation';

const employees = [
    {
        'id': 1,
        'first_name': 'Gurubrahmanandam',
        'last_name': 'Ekambaram'
    },
    {
        'id': 2,
        'first_name': 'Tejasree',
        'last_name': 'Kinnera'
    },
    {
        'id': 3,
        'first_name': 'Khyati',
        'last_name': 'Ekambaram'
    },
    {
        'id': 4,
        'first_name': 'Krithik',
        'last_name': 'Ekambaram'
    }
]

export default function HooksPlay() {

    const [userQuery, setUserQuery] = useState('');
    const [showPega, setShowPega] = useState(false);

    useEffect(() => {
        console.log('show pega hook', employees);
    }, [showPega]);

    useEffect(() => {
        console.log('set query hook');
    }, [userQuery]);

    // const handleClick = (event) => {
    //     console.log('handle click');
    //     setShowPega(!showPega);
    // }

    // const handleChange = (event) => {
    //     console.log('handle change');
    //     setUserQuery(event.target.value);
    // }

    return (

        <Container fluid>
            <Row>
                <TopNavigation></TopNavigation>
            </Row>
            <Row>

                <div className='mt-3'>

                    <div className="table-responsive-sm">
                        <table className='table table-dark table-striped'>
                            <thead>
                                <tr>
                                    <th className="table-cell">Id</th>
                                    <th className="table-cell">First Name</th>
                                    <th className="table-cell">Last Name</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    employees.map((emp) => {
                                        return (<tr key={emp.id}>
                                            <td className="table-cell">{emp.id}</td>
                                            <td className="table-cell">{emp.first_name}</td>
                                            <td className="table-cell">{emp.last_name}</td>
                                        </tr>)
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>

            </Row>
        </Container>
    )
}