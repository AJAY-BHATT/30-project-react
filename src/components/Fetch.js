import React, { useState, useEffect } from 'react';

function Fetch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);

  // Fetch data from an API using the useEffect hook
  useEffect(() => {
    // Replace 'API_URL' with the actual URL you want to fetch data from
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setItems(data);
      })
      .catch(error => console.error(error));
  }, []);

  // Update the filteredItems array whenever the searchTerm or items change
  useEffect(() => {
    const filtered = items.filter(item => {
      return item.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setFilteredItems(filtered);
  }, [searchTerm, items]);

  const handleInputChange = event => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleInputChange}
      />
      <ul>
        {filteredItems.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Fetch;
