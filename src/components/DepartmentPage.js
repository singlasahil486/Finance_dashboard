import React from 'react';
import { useParams, Link } from 'react-router-dom';

const DepartmentPage = () => {
  const { departmentName } = useParams();

  const departmentData = {
    marketing: {
      name: 'Marketing',
      description: 'Responsible for promoting the company and its products/services.',
      link: '/marketing', // Add the link for the Marketing department page
    },
    finance: {
      name: 'Finance',
      description: 'Handles financial planning, budgeting, and accounting.',
      link: '/finance', // Add the link for the Finance department page
    },
    humanresources: {
      name: 'Human Resources',
      description: 'Manages employee recruitment, benefits, and relations.',
      link: '/human-resources', // Add the link for the Human Resources department page
    },
    productions: {
      name: 'Productions',
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
    <div>
      <center>     <h2>{department.name} Department</h2>
      <p>{department.description}</p>
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
