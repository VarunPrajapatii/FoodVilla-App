import React, { useState } from 'react';

const Profile = (props) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  return (
    <div>
        <h2>Profile Component</h2>
        <h2>Name: {props.name}</h2>
        <h3>Count: {count}</h3>
        <button
          onClick={() => {
            setCount(1);
            setCount2(1);
          }}
        >SetCount</button>
    </div>
  );
};

export default Profile;
