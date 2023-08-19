import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './DepartmentPage.css';
const DepartmentPage = () => {
  const { departmentName } = useParams();

  const departmentData = {
   sanitary: {
      name: 'Sanitary',
      description: 'Responsible for promoting the company and its products/services.',
      link: '/sanitary', // Add the link for the Marketing department page
    },
<<<<<<< HEAD
    welding: {
      name: 'Welding',
=======
    furniture: {
      name: 'Furniture',
>>>>>>> 88dc669aafdac3d2f8c2a5fae91a1bf1ce69ca93
      description: 'Handles financial planning, budgeting, and accounting.',
      link: '/welding', // Add the link for the Finance department page
    },
<<<<<<< HEAD
    cuttingblade: {
      name: 'Cutting Blade',
=======
    welding: {
      name: 'Welding',
>>>>>>> 88dc669aafdac3d2f8c2a5fae91a1bf1ce69ca93
      description: 'Manages employee recruitment, benefits, and relations.',
      link: '/cuttingblade', // Add the link for the Human Resources department page
    },
    nutbolts: {
      name: 'Nut Bolts',
<<<<<<< HEAD
=======
      description: 'Responsible for promoting the company and its products/services.',
      link: '/marketing', // Add the link for the Marketing department page
    },
    oilandgrease: {
      name: 'Nut Bolts',
>>>>>>> 88dc669aafdac3d2f8c2a5fae91a1bf1ce69ca93
      description: 'Responsible for promoting the company and its products/services.',
      link: '/nutbolts', // Add the link for the Marketing department page
    },
    oil: {
      name: 'Oil',
      description: 'Responsible for promoting the company and its products/services.',
      link: '/oil', // Add the link for the Marketing department page
    },
    grease: {
      name: 'Grease',
      description: 'Responsible for promoting the company and its products/services.',
      link: '/grease', // Add the link for the Marketing department page
    },
    machines: {
      name: 'Machines',
      description: 'Responsible for promoting the company and its products/services.',
      link: '/machines', // Add the link for the Marketing department page
    },
    tools: {
      name: 'Tools',
      description: 'Responsible for promoting the company and its products/services.',
      link: '/tools', // Add the link for the Marketing department page
    },
    seals: {
      name: 'Rubber Seal',
      description: 'Responsible for promoting the company and its products/services.',
      link: '/seals', // Add the link for the Marketing department page
    },
    bearing: {
      name: 'Bearings',
      description: 'Responsible for promoting the company and its products/services.',
      link: '/bearing', // Add the link for the Marketing department page
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
<<<<<<< HEAD
      {/* <div className="offer-banner">
        <p className="offer-text">{department.offer}</p>
      </div> */}
=======
      <div className="offer-banner">
        <p className="offer-text">{department.offer}</p>
      </div>
>>>>>>> 88dc669aafdac3d2f8c2a5fae91a1bf1ce69ca93
      <center>
        <h2>{department.name} Department</h2>
        {department.link && (
          <Link to={department.link}>
            Visit Department Page
          </Link>
        )}
        {/* Add department-specific content and functionality here */}
<<<<<<< HEAD
        <div className="poster">
          <img src="C:\Users\Dell\Downloads\rod.jpg"/>
        </div>
=======
>>>>>>> 88dc669aafdac3d2f8c2a5fae91a1bf1ce69ca93
      </center>
    </div>  
);
};

export default DepartmentPage;
