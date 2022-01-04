import * as React from "react";

interface FriendProps {
  age: number;
  city: string;
  name: string;
}

const FriendComponent: React.FC<FriendProps> = ({ name, age, city }) => {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{age}</h2>
      <h2>{city}</h2>
    </div>
  );
};

export default FriendComponent;
