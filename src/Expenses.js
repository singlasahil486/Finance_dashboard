import React ,{useState}from 'react';
import { Link } from 'react-router-dom';

const Expenses = () => {
  const [totalAllottedAmount, setTotalAllottedAmount] = useState('');
  const [remainingAccount, setRemainingAccount] = useState('');

  const handleTotalAllottedAmountChange = (e) => {
    setTotalAllottedAmount(e.target.value);
  };

  const handleRemainingAccountChange = (e) => {
    setRemainingAccount(e.target.value);
  };
  return (
    <div>
      <center>
      <h2>This is the menu for various product.</h2>
      
      {/* <div>
          <label>Total Allotted Amount:</label>
          <input
            type="text"
            value="100000"
            onChange={handleTotalAllottedAmountChange}
          />
        </div>

        <div>
          <label>Remaining Account:</label>
          <input
            type="text"
            value="0"
            onChange={handleRemainingAccountChange}
          />
        </div> */}
        <h2><Link to="/company">Show Sections</Link></h2>
      </center>
    </div>
  );
};

export default Expenses;
