import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Company.css';

const departmentsData = [
  {
    name: 'Sanitary',
    imgSrc: process.env.PUBLIC_URL + 'https://www.google.com/imgres?imgurl=http%3A%2F%2F5.imimg.com%2Fdata5%2FSELLER%2FDefault%2F2021%2F4%2FBE%2FKY%2FFC%2F3164056%2Ftypes-of-welding-electrodes.jpg&tbnid=6ZV4zj_i53ZIzM&vet=12ahUKEwjG77HD6-eAAxUG5TgGHezKD7gQMygAegQIARB0..i&imgrefurl=https%3A%2F%2Fwww.indiamart.com%2Fproddetail%2Fwelding-rod-23363867188.html&docid=7DYuNV7rFbuIUM&w=2000&h=979&q=welding%20rod&ved=2ahUKEwjG77HD6-eAAxUG5TgGHezKD7gQMygAegQIARB0.jpg',
  },
  {
    name: 'Welding',
    imgSrc: process.env.PUBLIC_URL + '/departmentImages/furniture.jpg',
  },
  {
    name: 'CuttingBlade',
    imgSrc: process.env.PUBLIC_URL + '/departmentImages/nutbolts.jpg',
  },
  {
    name: 'Sanitary',
    imgSrc: process.env.PUBLIC_URL + '/departmentImages/welding.jpg',
  },
  {
    name: 'Grease',
    imgSrc: process.env.PUBLIC_URL + '/departmentImages/valves.jpg',
  },
  {
    name: 'Oil',
    imgSrc: process.env.PUBLIC_URL + 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.nihonweld.com%2Fimages%2Fitems%2Foriginal%2Fnss-308L-16-1542162663694.jpg&tbnid=PRDeSZbB7RWZjM&vet=12ahUKEwjAq87c8eeAAxV02zgGHSc2DyUQMygEegQIARBr..i&imgrefurl=https%3A%2F%2Fwww.nihonweld.com%2FproductDescription.do%3FitemId%3D1024247177%26categoryId%3D18212%26parentCategoryId%3D18202&docid=U2danU5c7XCr1M&w=3024&h=4032&q=welding%20rod&hl=en&ved=2ahUKEwjAq87c8eeAAxV02zgGHSc2DyUQMygEegQIARBr',
  },
  {
    name: 'NutBolts',
    imgSrc: process.env.PUBLIC_URL + '/departmentImages/valves.jpg',
  },
  {
    name: 'Machines',
    imgSrc: process.env.PUBLIC_URL + '/departmentImages/valves.jpg',
  },
  {
    name: 'Tools',
    imgSrc: process.env.PUBLIC_URL + '/departmentImages/valves.jpg',
  },
  {
    name: 'Seals',
    imgSrc: process.env.PUBLIC_URL + '/departmentImages/valves.jpg',
  },
  {
    name: 'Bearing',
    imgSrc: process.env.PUBLIC_URL + '/departmentImages/valves.jpg',
  },
 
  // Add more departments as needed
];

const Company = () => {
<<<<<<< HEAD
  const [departments, setDepartments] = useState(departmentsData);

  return (
    <div className="company-container">
      
=======
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
     
>>>>>>> 88dc669aafdac3d2f8c2a5fae91a1bf1ce69ca93
      <div className="departments-container">
        {departments.map((department, index) => (
          <Link
            to={`/${department.name.toLowerCase()}`}
            key={index}
            className="department-link"
          >
            <div className="department-card">
              <h3 className="department-name">{department.name}</h3>
<<<<<<< HEAD
              <img
                src={department.imgSrc}
                alt={department.name}
                className="department-image"
              />
=======
              <img src={department.imgSrc}  className="department-image" />
>>>>>>> 88dc669aafdac3d2f8c2a5fae91a1bf1ce69ca93
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Company;
