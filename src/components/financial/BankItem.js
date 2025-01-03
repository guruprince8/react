/*
https://www.google.com/search?q=redirect+to+url+in+react&oq=move+to+url+in+react&gs_lcrp=EgZjaHJvbWUqCAgBEAAYFhgeMgYIABBFGDkyCAgBEAAYFhgeMggIAhAAGBYYHjIICAMQABgWGB4yCAgEEAAYFhgeMggIBRAAGBYYHjIICAYQABgWGB4yCAgHEAAYFhgeMggICBAAGBYYHjIICAkQABgWGB7SAQg5ODM5ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8
*/

import { useState } from "react";
import { Navigate } from 'react-router-dom';
export default function BankItem({index, bank}){
    const [redirectTo, setRedirectTo] = useState(null);

    const handleRedirect = (event) => {
       // window.alert(event.target.tagName);
        setRedirectTo(event.target.getAttribute("path")); 
      };
    

    return <>
        <div key={index} className="text-align-center" onClick={handleRedirect} path={bank.path}>
            <img src={bank.logo} alt={bank.name} width="200px" onClick={handleRedirect} path={bank.path}/><br/>
            {/* {bank.name} */}
            {redirectTo && <Navigate to={redirectTo} />}
        </div>
    </>
}