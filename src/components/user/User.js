import React from 'react';
import {Link} from "react-router-dom";
import {Button, Grid, Typography} from "@mui/material";

const User = ({ user, addToFriends }) => {
  return (
    <div>
      <Link to={`/users/${user.id}`} key={user.id}>
        <Grid padding={'5px'}>
          <Typography fontFamily={'sans-serif'} fontSize={'18px'} fontWeight={'bold'}>
            {user.name}
          </Typography>
          <Grid container direction={'column'}>
            <Typography fontFamily={'sans-serif'} fontSize={'12px'}>
              phone: {user.phone}
            </Typography>
            <Typography fontFamily={'sans-serif'} fontSize={'12px'}>
              email: {user.email}
            </Typography>
            <Typography fontFamily={'sans-serif'} fontSize={'12px'}>
              website: {user.website}
            </Typography>
            <Typography fontFamily={'sans-serif'} fontSize={'12px'}>
              email: {user.email}
            </Typography>
            <Typography fontFamily={'sans-serif'} fontSize={'12px'}>
              street: {user.address?.street}
            </Typography>
          </Grid>
        </Grid>
      </Link>
      {addToFriends && <Button onClick={() => addToFriends(user)}>
        add to friends
      </Button>}
    </div>
  );
};

export default User;