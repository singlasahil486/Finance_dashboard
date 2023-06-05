// // import React from 'react';
// // import { Link,Redirect } from 'react-router-dom';
// // import Department from './Department';

// // const Company = () => {
// //   const departments = [
// //     {
// //       name: 'Marketing',
// //       description: 'Responsible for promoting the company and its products/services.',
// //       img : '',
// //     },
// //     {
// //       name: 'Finance',
// //       description: 'Handles financial planning, budgeting, and accounting.',
// //     },
// //     {
// //       name: 'administration',
// //       description: 'Manages employee recruitment, benefits, and relations.',
// //     },
// //     {
// //       name: 'HumanResources',
// //       description: 'Manages employee recruitment, benefits, and relations.',
// //     },
// //     {
// //       name: 'public relations',
// //       description: 'Manages employee recruitment, benefits, and relations.',
// //     },
// //     {
// //       name: 'productions',
// //       description: 'Manages employee recruitment, benefits, and relations.',
// //     },
    
// //     // Add more departments as needed
// //   ];
// //   const handleDepartmentClick = (departmentName) => {
// //     // You can perform any additional actions or logic here before redirecting
    
// //     // Redirect to the respective department page
// //     return <Link to={`/departments/${departmentName.toLowerCase()}`} />;
// //   };
// //   return (
// //     <div>
      
// //       <h1>Company Departments</h1>
// //       <div>
// //         {departments.map((department, index) => (
// //           <Link to={`/departments/${department.name.toLowerCase()}`} 
// //           key={index}
// //           onClick={() => handleDepartmentClick(department.name)}>
// //             <Department name={department.name} description={department.description} />
// //           </Link>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Company;

// import React,{useState} from 'react';
// import { Link } from 'react-router-dom';
// import './Company.css';

// const Company = () => {
//   const [totalAllottedAmount, setTotalAllottedAmount] = useState('');
//   const [remainingAccount, setRemainingAccount] = useState('');

//   const handleTotalAllottedAmountChange = (e) => {
//     setTotalAllottedAmount(e.target.value);
//   };

//   const handleRemainingAccountChange = (e) => {
//     setRemainingAccount(e.target.value);
//   };
//   const departments = [
//     {
//       name: 'Marketing',
//       description: 'Responsible for promoting the company and its products/services.',
//       img: '',
//     },
//     {
//       name: 'Finance',
//       description: 'Handles financial planning, budgeting, and accounting.',
//     },
//     {
//       name: 'Administration',
//       description: 'Manages employee recruitment, benefits, and relations.',
//     },
//     {
//       name: 'HumanResources',
//       description: 'Manages employee recruitment, benefits, and relations.',
//     },
//     {
//       name: 'PublicRelations',
//       description: 'Manages employee recruitment, benefits, and relations.',
//     },
//     {
//       name: 'Productions',
//       description: 'Manages employee recruitment, benefits, and relations.',
//     },
//     // Add more departments as needed
//   ];

//   const handleDepartmentClick = (departmentName) => {
//     // You can perform any additional actions or logic here before redirecting
//   };

//   return (
//     <div className="company-container">
//       <h1 className="company-title">Company Departments</h1>
//       <div className="departments-container">
//         {departments.map((department, index) => (
//           <Link
//             to={`/departments/${department.name.toLowerCase()}`}
//             key={index}
//             onClick={() => handleDepartmentClick(department.name)}
//             className="department-link"
//           >
//             <div className="department-card">
//               <h3 className="department-name">{department.name}</h3>
//               <p className="department-description">{department.description}</p>
//             </div>
//           </Link>
//         ))}
       
//       </div>
//     </div>
//   );
// };

// export default Company;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Company.css';

const Company = () => {
  const [departments, setDepartments] = useState([
    {
      name: 'Marketing',
      description: 'Responsible for promoting the company and its products/services.',
      allottedAmount: '10000',
      remainingAmount: '0',
    },
    {
      name: 'Finance',
      description: 'Handles financial planning, budgeting, and accounting.',
      allottedAmount: '20000',
      remainingAmount: '0',
    },
    {
      name: 'Administration',
      description: 'Manages employee recruitment, benefits, and relations.',
      allottedAmount: '20000',
      remainingAmount: '0',
    },
    {
      name: 'HumanResources',
      description: 'Manages employee recruitment, benefits, and relations.',
      allottedAmount: '10000',
      remainingAmount: '0',
    },
    {
      name: 'PublicRelations',
      description: 'Manages employee recruitment, benefits, and relations.',
      allottedAmount: '30000',
      remainingAmount: '0',
    },
    {
      name: 'Productions',
      description: 'Manages employee recruitment, benefits, and relations.',
      allottedAmount: '10000',
      remainingAmount: '0',
    },
    // Add more departments as needed
  ]);

  const handleDepartmentClick = (departmentName) => {
    // You can perform any additional actions or logic here before redirecting
  };

  const handleAllottedAmountChange = (e, departmentIndex) => {
    const updatedDepartments = [...departments];
    updatedDepartments[departmentIndex].allottedAmount = e.target.value;
    setDepartments(updatedDepartments);
  };

  const handleRemainingAmountChange = (e, departmentIndex) => {
    const updatedDepartments = [...departments];
    updatedDepartments[departmentIndex].remainingAmount = e.target.value;
    setDepartments(updatedDepartments);
  };

  return (
    <div className="company-container">
      <h1 className="company-title">Company Departments</h1>
      <div className="departments-container">
        {departments.map((department, index) => (
          <Link
            to={`/departments/${department.name.toLowerCase()}`}
            key={index}
            onClick={() => handleDepartmentClick(department.name)}
            className="department-link"
          >
            <div className="department-card">
              <h3 className="department-name">{department.name}</h3>
              <p className="department-description">{department.description}</p>
              <div className="amount-fields">
                <label className="amount-label">Allotted Amount:</label>
                <input
                  type="text"
                  className="amount-input"
                  value={department.allottedAmount}
                  onChange={(e) => handleAllottedAmountChange(e, index)}
                />
              </div>
              <div className="amount-fields">
                <label className="amount-label">Remaining Amount:</label>
                <input
                  type="text"
                  className="amount-input"
                  value={department.remainingAmount}
                  onChange={(e) => handleRemainingAmountChange(e, index)}
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Company;
