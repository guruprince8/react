
import { employees } from "./PrimaryMailData"
export default function Primary() {

    return <>
       
        <div>
            <input type="checkbox" className="ml-3 pl-10"/>&nbsp;
            <i className="bi bi-arrow-clockwise ml-3"></i>&nbsp;
            <i className="bi bi-three-dots-vertical"></i>&nbsp;
            <i className="bi bi-arrow-left"></i>&nbsp;
            <i className="bi bi-arrow-right"></i>&nbsp;
        </div>
        <div className='mt-3'>

            <div className="table-responsive-sm">
                <table className='table table-striped'>
                    <thead>
                        {/* <tr>
                            <th className="table-cell">Id</th>
                            <th className="table-cell">First Name</th>
                            <th className="table-cell">Last Name</th>
                        </tr> */}
                    </thead>
                    <tbody>
                        {
                            employees.map((emp) => {
                                return (
                                    <tr key={emp.id}>
                                        <td><input type="checkbox"></input></td>
                                        <td><i className="bi bi-eye-fill"></i></td>
                                        <td>Remitly</td>
                                        <td><b>Status Update: The latest on your transfer to Gurubrahmanandam </b> - We have successfully sent</td>
                                        <td>9:59 PM</td>
                                        {/* <td className="table-cell">{emp.id}</td> */}
                                        {/* <td className="table-cell">{emp.first_name}</td> */}
                                        {/* <td className="table-cell">{emp.last_name}</td> */}
                                </tr>)
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </>
}