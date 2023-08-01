import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Company.css';

const Company = () => {
  const [departments, setDepartments] = useState([
    {
      name: 'Sanitary',
      imgSrc: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F81ujVpNrH0L._AC_UF1000%2C1000_QL80_.jpg&tbnid=OW480pbsvbwv7M&vet=12ahUKEwjlkbmdiryAAxUbz6ACHb01AkQQMygregUIARC0Ag..i&imgrefurl=https%3A%2F%2Fwww.amazon.in%2FBathroom-Ceramic-Sanitary-Closet-Concealed%2Fdp%2FB07W81KN5G&docid=DKR7J4olQgO-pM&w=1000&h=810&q=sanitary%20with%20jpg&ved=2ahUKEwjlkbmdiryAAxUbz6ACHb01AkQQMygregUIARC0Ag', // Replace this with the actual image URL for the 'Sanitary' department
      
    },
    {
      name: 'Furniture',
      imgSrc: '/departmentImages/finance.jpg', // Replace this with the actual image URL for the 'Finance' department
      
    },
    {
      name: 'NutBolts',
      imgSrc: '/departmentImages/finance.jpg', // Replace this with the actual image URL for the 'Finance' department
      
    },
    {
      name: 'Welding',
      imgSrc: '/departmentImages/finance.jpg', // Replace this with the actual image URL for the 'Finance' department
      
    },
    {
      name: 'Valves',
      imgSrc: '/departmentImages/finance.jpg', // Replace this with the actual image URL for the 'Finance' department
      
    },
    {
      name: 'OilandGrease',
      imgSrc: '/departmentImages/finance.jpg', // Replace this with the actual image URL for the 'Finance' department
      
    },
    // Add more departments as needed
  ]);

  // ... (existing code for handleDepartmentClick and handleAllottedAmountChange)
  const handleDepartmentClick = (departmentName) => {
      };
  return (
    <div className="company-container">
     
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
              <img src={department.imgSrc}  className="department-image" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Company;
