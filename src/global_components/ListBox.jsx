/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';

function DropdownList({ options, onSelect }) {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (option) => {
    setSelectedOption(option);
    onSelect(option);
  };

  return (
    <div>
      <h2>Dropdown List</h2>
      <select
        value={selectedOption}
        onChange={(e) => handleSelect(e.target.value)}
      >
        <option value=''>Select an option</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      {selectedOption && <p>Selected Option: {selectedOption}</p>}
    </div>
  );
}

export default DropdownList;
