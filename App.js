import React, { useState ,useEffect } from 'react';
import './App.css';
import Navbar from './Navbar';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';



function BillStore() {
  const [bills, setBills] = useState(() => {
    const storedBills = localStorage.getItem('bills');
    return storedBills ? JSON.parse(storedBills) : [];
  });
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [amount, setAmount] = useState('');
  const [image, setImage] = useState('');


  useEffect(() => {
    const storedBills = JSON.parse(localStorage.getItem('bills'));
    if (storedBills) {
      setBills(storedBills);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('bills', JSON.stringify(bills));
  }, [bills]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleImageChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleAddBill = () => {
    if (title && date && amount && image) {
      setBills([...bills, { title, date, amount, image }]);
      setTitle('');
      setDate('');
      setAmount('');
      setImage('');
    } else {
      alert('Please fill all the fields');
    }
  };

  const handleDeleteBill = (index) => {
    const updatedBills = [...bills];
    updatedBills.splice(index, 1);
    setBills(updatedBills);
  };

  return (
   
    <div>
<Navbar/>

  <div className='Container'>
 
      
<div className='input-container'>
      <h2>Add New Bill</h2>
      <input type="text" placeholder="Title" value={title} onChange={handleTitleChange} />
      < input type="date" placeholder="Date" value={date} onChange={handleDateChange}/>
      <input type="number" placeholder="Amount" value={amount} onChange={handleAmountChange} />
      <input type="file" onChange={handleImageChange} /> <br />
      <Button variant="contained" color="success" onClick={handleAddBill}>Add Bill</Button>
      
      </div>

      </div>
   
 
    <div>


      <h2>Bill List</h2>



      <ul className="bill-list">
        {bills.map((bill, index) => (
          <li key={index} className="bill-item">
            <h3>{bill.title}</h3>
            <p>Date: {bill.date}</p>
            <p>Amount: ${bill.amount}</p>
            <p>Receipt:<img src={bill.image} alt="Bill"  /></p>
            
            <Button variant="outlined" startIcon={<DeleteIcon />} onClick={() => handleDeleteBill(index)}>
        Delete
      </Button>
          </li>
        ))}
      </ul>
    </div>
  </div>
  
    
  );
}

export default BillStore;
