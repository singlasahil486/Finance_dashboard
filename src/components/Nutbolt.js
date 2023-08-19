import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Company.css';

const departmentsData = [
  {
    name: '2 sut Nut Bolt',
    imgSrc: process.env.PUBLIC_URL + 'https://www.google.com/imgres?imgurl=http%3A%2F%2F5.imimg.com%2Fdata5%2FSELLER%2FDefault%2F2021%2F4%2FBE%2FKY%2FFC%2F3164056%2Ftypes-of-welding-electrodes.jpg&tbnid=6ZV4zj_i53ZIzM&vet=12ahUKEwjG77HD6-eAAxUG5TgGHezKD7gQMygAegQIARB0..i&imgrefurl=https%3A%2F%2Fwww.indiamart.com%2Fproddetail%2Fwelding-rod-23363867188.html&docid=7DYuNV7rFbuIUM&w=2000&h=979&q=welding%20rod&ved=2ahUKEwjG77HD6-eAAxUG5TgGHezKD7gQMygAegQIARB0.jpg',
  },
  {
    name: '3 sut Nut Bolt',
    imgSrc: process.env.PUBLIC_URL + '/departmentImages/furniture.jpg',
  },
  {
    name: '4 sut Nut Bolt',
    imgSrc: process.env.PUBLIC_URL + '/departmentImages/nutbolts.jpg',
  },
  {
    name: '5 sut Nut Bolt',
    imgSrc: process.env.PUBLIC_URL + '/departmentImages/welding.jpg',
  },
  {
    name: '10no. original nut',
    imgSrc: process.env.PUBLIC_URL + '/departmentImages/valves.jpg',
  },
  {
    name: '13no. original nut',
    imgSrc: process.env.PUBLIC_URL + 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.nihonweld.com%2Fimages%2Fitems%2Foriginal%2Fnss-308L-16-1542162663694.jpg&tbnid=PRDeSZbB7RWZjM&vet=12ahUKEwjAq87c8eeAAxV02zgGHSc2DyUQMygEegQIARBr..i&imgrefurl=https%3A%2F%2Fwww.nihonweld.com%2FproductDescription.do%3FitemId%3D1024247177%26categoryId%3D18212%26parentCategoryId%3D18202&docid=U2danU5c7XCr1M&w=3024&h=4032&q=welding%20rod&hl=en&ved=2ahUKEwjAq87c8eeAAxV02zgGHSc2DyUQMygEegQIARBr',
  },
  {
    name: '19no. original nut',
    imgSrc: process.env.PUBLIC_URL + '/departmentImages/valves.jpg',
  },
  {
    name: '10no. Lkey Bolt',
    imgSrc: process.env.PUBLIC_URL + '/departmentImages/valves.jpg',
  },
  {
    name: '10 MM Fastner',
    imgSrc: process.env.PUBLIC_URL + '/departmentImages/valves.jpg',
  },
  {
    name: '17 MM Fastner',
    imgSrc: process.env.PUBLIC_URL + '/departmentImages/valves.jpg',
  },
  {
    name: '10*20 HP Screw',
    imgSrc: process.env.PUBLIC_URL + '/departmentImages/valves.jpg',
  },
 
  // Add more departments as needed
];

const Nutbolt = () => {
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

export default Nutbolt;
