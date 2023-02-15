import React, {useCallback, useEffect, useState} from 'react';
import axios from "axios";
import UserSingle from "../components/user/User";
import User from "../components/user/User";
import {Link} from "react-router-dom";
import {useGetFriends} from "../store/selectors";
import {useDispatch} from "react-redux";
import {setFriends} from "../store/reducers/mainReducer";
import {Button} from "@mui/material";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [isUsersLoading, setIsUsersLoading] = useState(false);
  const dispatch = useDispatch();
  const friends = useGetFriends();

  useEffect(() => {
    setIsUsersLoading(false);

    axios.get("https://jsonplaceholder.typicode.com/users/")
      .then(({ data }) => {
        setUsers(data);
      })
      .finally(() => {
        setIsUsersLoading(false);
      });
  }, []);

  const addToFriends = useCallback((user) => {
    dispatch(setFriends([...friends, user]));
  }, [friends]);

  return (
    <div>
      {isUsersLoading && <h1>Loading...</h1>}
      {!isUsersLoading && users.map((user) => (
        <User user={user} key={user.id} addToFriends={() => addToFriends(user)} />
      ))}
      <hr />
      <Link to={"/friends"}>
        <Button>
          Go to friends
        </Button>
      </Link>
      {friends?.map((friend) => (
        <UserSingle key={friend.id} user={friend} />
      ))}
    </div>
  );
};

export default Users;