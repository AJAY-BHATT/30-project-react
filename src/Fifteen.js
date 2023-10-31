// import React, { useState } from 'react'

// export default function Fifteen({items}) {
//     const  [searchTerm, setSearchTerm] = useState('');
//     const filteredItems = items.filter((item)=>
//         item.toLowCase().include(searchTerm.toLowerCase())
//     )
//   return (
//     <div>
//     <input type='text' placeholder='Search..........' onChange={(e)=> setSearchTerm(e.target.value)}/>
//     <ul>
//         {filteredItems.map((item,index)=>(
//             <li key={index}>
//                 {item}
//             </li>
//         )  )}
//     </ul>
//     </div>
//   )
// }

import React, { useState } from 'react';

function Fifteen() {
  const [searchTerm, setSearchTerm] = useState('');
  const [items, setItems] = useState([
    'Item 1',
    'ajay1',
    'ajay2',
    'hello',
    'Item',
  ]);

  const filteredItems = items.filter(item =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
      </div>
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Fifteen;

