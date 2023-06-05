// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Budget from './components/Budget.js';
import Expenses from './Expenses.js';
import Investments from './components/Investments';
import Navigation from './components/Navigation.js';
import Subsection from './components/Company.js';
import Company from './components/Company.js';
import DepartmentPage from './components/DepartmentPage.js';
import FinancePage from './components/FinancePage.js';
import HumanResourcePage from './components/HumanResourcePage.js';
import MarketingPage from './components/MarketingPage.js';
import './App.css';
const App = () => {
  return (
  <div>
    <center>
    <h1>
      Financial Dashboard
    </h1>
    </center>
    {/* <ul>
            <li>
              <Link to="/budget">Budget</Link>
            </li>
            <li>
              <Link to="/expenses">Expenses</Link>
            </li>
          </ul> */}
    
     
 <Routes>
  
  
       

        <Route path="/" element={<Expenses/>} />
        <Route path="/expenses" element={<Expenses/>} />
        <Route path="/investments" element={<Investments/>} />
        <Route path="/company" element={<Company/>} />
        <Route path="/departments/:departmentName" element={<DepartmentPage/>} />
        <Route path = "/finance" element ={<FinancePage/>}/>
        <Route path='/human-resources' element ={<HumanResourcePage/>}/>
        <Route path='/marketing' element ={<MarketingPage/>}/>
    </Routes>
    </div>
  );
};

export default App;
