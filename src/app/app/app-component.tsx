import * as React from "react";
import FriendComponent from "../components/friend-component";

const App: React.FC = () => {
  return (
    <div>
      <FriendComponent age={20} name="Naveen Kumar" city="Alwar" />
      <FriendComponent age={20} name="Naveen Kumar" city="Alwar" />
      <FriendComponent age={20} name="Naveen Kumar" city="Alwar" />
      <FriendComponent age={20} name="Naveen Kumar" city="Alwar" />
      <FriendComponent age={20} name="Naveen Kumar" city="Alwar" />
    </div>
  );
};

export default App;
