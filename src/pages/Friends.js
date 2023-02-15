import React from 'react';
import UserSingle from "../components/user/User";
import {useGetFriends} from "../store/selectors";

const Friends = () => {
  const friends = useGetFriends();

  return (
    <div>
      {friends?.map((friend) => (
        <UserSingle key={friend.id} user={friend} />
      ))}
    </div>
  );
};

export default Friends;