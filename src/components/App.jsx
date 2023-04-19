import Profile from "./Profile";
import Statistics from "./Statistics";
import FriendList from "./FriendList";
import TransactionHistory from "./TransactionHistory";

import user from "../dates/user.json";
import data from "../dates/data.json";
import friends from "../dates/friends.json";
import transaction from "../dates/transactions.json";



export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}/>
        <Statistics
        title={data.title}
        stats={data}/>
        <FriendList
        friends={friends}/>
        <TransactionHistory
        items={transaction}/>
    </div>
  );
};
