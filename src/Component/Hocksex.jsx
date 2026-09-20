import React, { useState } from 'react';

function Hooks() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h3>{count}</h3>
      <div className="mb-5">
        <button onClick={() => setCount(count + 1)} className='btn btn-success'> + </button>
       < button onClick={() => setCount(count - 1)} className='btn btn-success'> - </button>
      </div>
    </>
  );
}

export default Hooks;