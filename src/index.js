// import react components
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// import css components
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

// import application specific components
import App from './App';
import Search from './components/search/Search';
import DatabaseOperations from './components/database/DatabaseOperations';
import StringOperations from './components/string/StringOperations';
import HooksPlay from './hooks/HooksPlay';
import MachineLearning from './components/ai/MachineLearning';
import ContactUs from "./components/contact/ContactUs";
import DriveOperations from './components/drive/DriveOperations';
import MailHome from './components/mail/MailHome';
import Youtube from './components/youtube/Youtube';

// financial routers
import FinancialHome from './components/financial/FinancialHome';
import ChaseHome from './components/financial/chase/ChaseHome';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App></App>} > </Route>
        <Route path='/login' element={<App></App>} ></Route>
        <Route path='/profile' element={<App></App>} ></Route>
        <Route path='/search' element={<Search></Search>} ></Route>
        <Route path='/database' element={<DatabaseOperations></DatabaseOperations>} ></Route>
        <Route path='/string' element={<StringOperations></StringOperations>} ></Route>
        <Route path='/cart' element={<App></App>} ></Route>
        <Route path='/ml' element={<MachineLearning></MachineLearning>} ></Route>
        <Route path='/contact' element={<ContactUs></ContactUs>} ></Route>
        <Route path='/drive' element={<DriveOperations></DriveOperations  >} ></Route>
        <Route path='/mail' element={<MailHome></MailHome  >} ></Route>
        <Route path='/youtube' element={<Youtube></Youtube  >} ></Route>
        <Route path='*' element={<HooksPlay></HooksPlay>} ></Route>

        {/* Financial Routers */}
        <Route path='/financial' element={<FinancialHome></FinancialHome>} ></Route>
        <Route path='/financial/chase' element={<ChaseHome></ChaseHome>} ></Route>
    </Routes>
  </BrowserRouter>
);