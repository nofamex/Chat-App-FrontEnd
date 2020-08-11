import React from 'react';
import './Users.css';
import onlineIcon from '../../icons/onlineIcon.png';

function Users({ users }) {
  const listUser = users.map((user, index) => (
    <div key={index} className="usersList">
      <img className="iconUser" src={onlineIcon} alt="online" />
      <p className="userName">{user.name}</p>
    </div>
  ));

  return <div className="containerUsers">{listUser}</div>;
}

export default Users;
