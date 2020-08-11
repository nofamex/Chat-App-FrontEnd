import React from 'react';
import closeicon from '../../icons/closeIcon.png';
import onlineIcon from '../../icons/onlineIcon.png';

function InfoBar({ room }) {
  return (
    <div className="infoBar">
      <div className="leftInnerContainer">
        <img className="onlineIcon" src={onlineIcon} alt="online" />
        <h3>{room}</h3>
      </div>
      <div className="rightInnerContainer">
        <a href="/">
          <img src={closeicon} alt="close" />
        </a>
      </div>
    </div>
  );
}

export default InfoBar;
