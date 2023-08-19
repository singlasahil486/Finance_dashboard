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
// import FinancePage from './components/FinancePage.js';
// import HumanResourcePage from './components/HumanResourcePage.js';
// import MarketingPage from './components/MarketingPage.js';
import './App.css';
import Welding from './components/Welding.js';
import Tools from './components/Tools.js';
import Seals from './components/Seals.js';
import Sanitary from './components/Sanitary.js';
import Oil from './components/Oil.js';
import Nutbolt from './components/Nutbolt.js';
import Grease from './components/Grease.js';
import Cuttingblade from './components/Cuttingblade.js';
import Bearings from './components/Bearings.js';
import Machines from './components/Machines.js';
const App = () => {
  return (
  <div>
    <center>
    <h1>
<<<<<<< HEAD
      
      Swami Machinery store
        <br></br>
        
      
=======
     Swami Machinery Store
>>>>>>> 88dc669aafdac3d2f8c2a5fae91a1bf1ce69ca93
    </h1>
    <h3> Meham,Rohtak,Haryana</h3>
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
        <Route path="/welding" element={<Welding/>} />
        <Route path="/tools" element={<Tools/>} />
        <Route path="/machines" element={<Machines/>} />
        <Route path="/seals" element={<Seals/>} />
        <Route path="/sanitary" element={<Sanitary/>} />
        <Route path="/oil" element={<Oil/>} />
        <Route path="/nutbolts" element={<Nutbolt/>} />
        <Route path="/grease" element={<Grease/>} />
        <Route path="/cuttingblade" element={<Cuttingblade/>} />
        <Route path="/bearing" element={<Bearings/>} />
       
        <Route path="/company" element={<Company/>} />
         <Route path="/departments/:departmentName" element={<DepartmentPage/>} />
        {/* <Route path = "/finance" element ={<FinancePage/>}/>
        <Route path='/human-resources' element ={<HumanResourcePage/>}/>
        <Route path='/marketing' element ={<MarketingPage/>}/>  */}
    </Routes>
    </div>
  );
};

export default App;
