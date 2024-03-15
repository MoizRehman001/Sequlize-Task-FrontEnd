import React, { useState } from 'react';
import axios from 'axios';

const Approve = () => {
  const [adminName, setAdminName] = useState('');
  const [userName, setUserName] = useState('');
  const [message, setMessage] = useState('');

  const handleApprove = async () => {
    try {
      const response = await axios.put(`http://localhost:3000/approve/${adminName}/${userName}`);
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  return (
    <div>
      <h2>Approve Document</h2>
      <div>
        <label htmlFor="adminName">Admin Name:</label>
        <input
          type="text"
          id="adminName"
          value={adminName}
          onChange={(e) => setAdminName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="userName">User Name:</label>
        <input
          type="text"
          id="userName"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <button onClick={handleApprove}>Approve Document</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Approve;
