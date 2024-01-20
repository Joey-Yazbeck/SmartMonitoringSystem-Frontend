import React, { useState, useEffect } from 'react';

function DataTable() {
  const [data, setData] = useState([]);

  // useEffect hook to fetch data from API
  useEffect(() => {
    fetchData();
  }, []);

  // Function to fetch data from API
  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:7199/api/Target'); // Replace with your API endpoint
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.fullname}</td>
            <td>{item.dateofbirth}</td>
            <td>{item.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default DataTable;
