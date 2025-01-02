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
export default function Updates() {

    return <>
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
    </>
}