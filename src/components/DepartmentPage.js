import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './DepartmentPage.css';
const DepartmentPage = () => {
  const { departmentName } = useParams();

  const departmentData = {
   sanitary: {
      name: 'Sanitary',
      description: 'Responsible for promoting the company and its products/services.',
      link: '/marketing', // Add the link for the Marketing department page
    },
    furniture: {
      name: 'Furniture',
      description: 'Handles financial planning, budgeting, and accounting.',
      link: '/finance', // Add the link for the Finance department page
    },
    welding: {
      name: 'Welding',
      description: 'Manages employee recruitment, benefits, and relations.',
      link: '/human-resources', // Add the link for the Human Resources department page
    },
    nutbolts: {
      name: 'Nut Bolts',
      description: 'Responsible for promoting the company and its products/services.',
      link: '/marketing', // Add the link for the Marketing department page
    },
    oilandgrease: {
      name: 'Nut Bolts',
      description: 'Responsible for promoting the company and its products/services.',
      link: '/marketing', // Add the link for the Marketing department page
    },
    // Add more departments as needed
  };

  const department = departmentData[departmentName];

  if (!department) {
    return <div>Department not found</div>; // Show a message if the department is not found
  }

  return (
//     <div>

// <div className="offer-banner">
//         <p className="offer-text">{department.offer}</p>
//       </div>
//       <center>     <h2>{department.name} Department</h2>
      
//       {department.link && (
//         <Link to={department.link}>
//           Visit Department Page
//         </Link>
//       )}
//       {/* Add department-specific content and functionality here */}
//       </center>
 
//     </div>
<div className="department-page-container">
      <div className="offer-banner">
        <p className="offer-text">{department.offer}</p>
      </div>
      <center>
        <h2>{department.name} Department</h2>
        {department.link && (
          <Link to={department.link}>
            Visit Department Page
          </Link>
        )}
        {/* Add department-specific content and functionality here */}
      </center>
    </div>  
);
};

export default DepartmentPage;
