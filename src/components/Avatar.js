import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { base } from '../DATA.json';
import avatar from '../avatar.jpg';

const UserAvatar = () => {
  return (
    <Avatar
      className="big-avatar mx-auto mt-5"
      src={avatar}
      alt={base.name}
    />
  );
};

export default UserAvatar;
