import React from 'react';
import { useSelector } from 'react-redux';

const AdmMessage = ({ message }) => {
  const user = useSelector(state => state.user);
  const isSentByUser = message?.uid === user?.id;
  const messageClass = isSentByUser ? 'bg-blue-600 text-white' : 'bg-gray-200 text-black';

  return (
    <div className={`flex ${isSentByUser ? 'justify-end mb-1' : 'justify-start mb-5'} px-4`}>
      <div className={`rounded-lg p-4 max-w-xs ${messageClass}`}>
        <p className="text-sm font-semibold mb-1">{message.name || 'Anonymous'}</p>
        <p>{message.text}</p>
      </div>
    </div>
  );
};

export default AdmMessage;
