import React, { useState, useEffect } from 'react';

const BillApp = () => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [amount, setAmount] = useState('');
  const [bills, setBills] = useState([]);
  const [image, setImage] = useState(null);

  useEffect(() => {
    const savedBills = localStorage.getItem('bills');
    if (savedBills) {
      setBills(JSON.parse(savedBills));
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
    const file = e.target.files[0];
    setImage(file);
  };


  const handleAddBill = () => {
    // Validate input fields
    if (!title || !amount || !image || !date) {
      alert('Please fill in all fields.');
      return;
    }

    // Create a new bill object
    const newBill = {
      title,
      amount,
      date,
      image: URL.createObjectURL(image)
    };

    // Add the new bill to the bills state
    setBills([...bills, newBill]);

    // Clear input fields after adding a new bill
    setTitle('');
    setAmount('');
    setImage('');
    setDate('');
  };

  const handleDelete = (index) => {
    const updatedBills = [...bills];
    updatedBills.splice(index, 1);
    setBills(updatedBills);
  };
  

  return (
    <div>
      <h1>Bill Application</h1>
      <div>
        <input type="text" placeholder="Title" value={title} onChange={handleTitleChange} />
        <input type="date" placeholder="Date" value={date} onChange={handleDateChange} />
        <input type="number" placeholder="Amount" value={amount} onChange={handleAmountChange} />
        <input type="file" accept="image/*" onChange={handleImageChange} />
        
        
        <button onClick={handleAddBill}>Add Bill</button>
      </div>
      <div>
      



      </div>
    </div>
  );
};

export default BillApp;
