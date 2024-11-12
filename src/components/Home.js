import Form from 'react-bootstrap/Form';
import Top from './Top';
import Bottom from './Bottom';
import Left from './Left';
import Login from './Login';
import { useState } from 'react';
export default function Home() {
    const [isLoggedIn, SetIsLoggedIn] = useState('false');
    let content;
    
    if (isLoggedIn === 'true') {
        content = <Top></Top>;
      } else {
        content = <Login SetIsLoggedIn={SetIsLoggedIn}/>;
      }
    return (
       <div>
        {content}
       </div>
        
    )
}