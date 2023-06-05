import React, { useState } from 'react';
import './FinancePage.css'; 
const FinancePage = () => {
  const financeTeam = [
    {
      name: 'John Doe',
      position: 'Finance Manager',
     
      salary: '10000',
      changesalary: '2000',
    },
    {
      name: 'Jane Smith',
      position: 'Accountant',
     
      salary: '',
      changesalary: '',
    },
    {
      name: 'David Johnson',
      position: 'Financial Analyst',
    
      salary: '',
      changesalary: '',
    },
    {
        name: 'sahil singla',
        position: 'sde1',
       
        salary: '',
        changesalary: '',
      },
      {
        name: 'deepak ka',
        position: 'Accountant',
       
        salary: '',
        changesalary: '',
      },
      {
        name: 'pankaj',
        position: 'officer',
       
        salary: '',
        changesalary: '',
      },
    // Add more team members as needed
  ];

  const handleSalaryChange = (index, value) => {
    const updatedTeam = [...financeTeam];
    updatedTeam[index].salary = value;
    setFinanceTeam(updatedTeam);
  };

  const [team, setFinanceTeam] = useState(financeTeam);

  return (
    <div>
      <h2>Finance Department</h2>
      <div className="team-container">
        {team.map((person, index) => (
          <div className="person-card" key={index}>
            
            <h3>{person.name}</h3>
            <p>{person.position}</p>
            
            <input
              type="text"
              value={person.salary}
              placeholder="Enter salary"
              onChange={(e) => handleSalaryChange(index, e.target.value)}
            />
               <input
              type="text"
              value={person.changesalary}
              placeholder="change salary"
              onChange={(e) => handleSalaryChange(index, e.target.value)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FinancePage;
