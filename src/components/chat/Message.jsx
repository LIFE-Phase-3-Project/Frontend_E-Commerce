import React from 'react';
import { useSelector } from 'react-redux';

const Message = ({ message }) => {
  const user = useSelector(state => state.user);
  const isSentByUser = message?.uid === user?.id;
  const messageClass = isSentByUser ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black';

  return (
    <div className={`flex ${isSentByUser ? 'justify-end' : 'justify-start'} mb-3`}>
      <div className={`rounded-lg p-3 max-w-xs ${messageClass}`}>
        <p className="text-sm font-semibold mb-1">{message.name || 'Anonymous'}</p>
        <p>{message.text}</p>
      </div>
    </div>
  );
};

export default Message;
