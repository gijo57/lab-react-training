import React from 'react';

const NumbersTable = ({ limit }) => {
  let items = [];
  for (let i = 0; i < limit; i++) {
    items.push(
      <div
        style={{
          border: '2px solid black',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100px',
          width: '100px',
          backgroundColor: i % 2 === 0 || 'red',
        }}
      >
        {i + 1}
      </div>
    );
  }
  return (
    <div style={{ display: 'flex', flexFlow: 'row wrap', width: '550px' }}>
      {items}
    </div>
  );
};

export default NumbersTable;
