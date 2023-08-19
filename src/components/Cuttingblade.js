import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Company.css';

const departmentsData = [
  {
    name: 'FastCut floor',
    imgSrc: process.env.PUBLIC_URL + 'https://www.google.com/imgres?imgurl=http%3A%2F%2F5.imimg.com%2Fdata5%2FSELLER%2FDefault%2F2021%2F4%2FBE%2FKY%2FFC%2F3164056%2Ftypes-of-welding-electrodes.jpg&tbnid=6ZV4zj_i53ZIzM&vet=12ahUKEwjG77HD6-eAAxUG5TgGHezKD7gQMygAegQIARB0..i&imgrefurl=https%3A%2F%2Fwww.indiamart.com%2Fproddetail%2Fwelding-rod-23363867188.html&docid=7DYuNV7rFbuIUM&w=2000&h=979&q=welding%20rod&ved=2ahUKEwjG77HD6-eAAxUG5TgGHezKD7gQMygAegQIARB0.jpg',
  },
  {
    name: 'FastCut RIM',
    imgSrc: process.env.PUBLIC_URL + '/departmentImages/furniture.jpg',
  },
  {
    name: 'Xtrapower wood 4"',
    imgSrc: process.env.PUBLIC_URL + '/departmentImages/nutbolts.jpg',
  },
  {
    name: 'Awant wood 4"',
    imgSrc: process.env.PUBLIC_URL + '/departmentImages/welding.jpg',
  },
  {
    name: '14" XP Loha',
    imgSrc: process.env.PUBLIC_URL + '/departmentImages/valves.jpg',
  },
  {
    name: 'Hugo Tileblade 4"',
    imgSrc: process.env.PUBLIC_URL + 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.nihonweld.com%2Fimages%2Fitems%2Foriginal%2Fnss-308L-16-1542162663694.jpg&tbnid=PRDeSZbB7RWZjM&vet=12ahUKEwjAq87c8eeAAxV02zgGHSc2DyUQMygEegQIARBr..i&imgrefurl=https%3A%2F%2Fwww.nihonweld.com%2FproductDescription.do%3FitemId%3D1024247177%26categoryId%3D18212%26parentCategoryId%3D18202&docid=U2danU5c7XCr1M&w=3024&h=4032&q=welding%20rod&hl=en&ved=2ahUKEwjAq87c8eeAAxV02zgGHSc2DyUQMygEegQIARBr',
  },
  {
    name: '4" autopower',
    imgSrc: process.env.PUBLIC_URL + '/departmentImages/valves.jpg',
  },
  {
    name: '4" 5" XP Magic',
    imgSrc: process.env.PUBLIC_URL + '/departmentImages/valves.jpg',
  },
  {
    name: 'XP Nano tile 4"',
    imgSrc: process.env.PUBLIC_URL + '/departmentImages/valves.jpg',
  },
  {
    name: 'XP wood 10"',
    imgSrc: process.env.PUBLIC_URL + '/departmentImages/valves.jpg',
  },
 
 
  // Add more departments as needed
];

const Cuttingblade = () => {
  const [departments, setDepartments] = useState(departmentsData);

  return (
    <div className="company-container">
      
      <div className="departments-container">
        {departments.map((department, index) => (
          
            <div className="department-card">
              <h3 className="department-name">{department.name}</h3>
              <img
                src={department.imgSrc}
                alt={department.name}
                className="department-image"
              />
            </div>
          
        ))}
      </div>
    </div>
  );
};

export default Cuttingblade;
