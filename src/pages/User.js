import React, {useCallback, useEffect, useState} from 'react';
import {useParams, useNavigate} from "react-router-dom";
import axios from "axios";
import UserSingle from "../components/user/User";

const User = () => {
  const [user, setUser] = useState({});
  const [isUserLoading, setIsUserLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setIsUserLoading(true);

    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(({ data }) => {
        setUser(data);
      })
      .catch(() => {
        navigate("/404");
      })
      .finally(() => {
        setIsUserLoading(false);
      });
  }, []);

  const onBackClick = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  return (
    <div>
      <h2 onClick={onBackClick}>
        Назад
      </h2>
      {isUserLoading && <h1>Loading...</h1>}
      {!isUserLoading && <UserSingle user={user} />}
    </div>
  );
};

export default User;