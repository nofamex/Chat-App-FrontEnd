import React from 'react';
import ReactEmoji from 'react-emoji';

function Message({ message: { user, text }, name }) {
  let isSentByCurrentUser = false;
  const trimName = name.trim().toLowerCase();

  if (user === trimName) isSentByCurrentUser = true;

  return isSentByCurrentUser ? (
    <div className="messageContainer justifyEnd">
      <p className="sentText pr-10">{trimName}</p>
      <div className="messageBox bg-blue">
        <p className="messageText color-white">{ReactEmoji.emojify(text)}</p>
      </div>
    </div>
  ) : (
    <div className="messageContainer justifyStart">
      <div className="messageBox bg-light">
        <p className="messageText color-dark">{ReactEmoji.emojify(text)}</p>
      </div>
      <p className="sentText pl-10">{user}</p>
    </div>
  );
}

export default Message;
