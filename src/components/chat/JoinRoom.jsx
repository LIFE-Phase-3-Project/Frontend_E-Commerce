import React, { useState } from 'react';

const JoinRoom = ({ onRoomJoined }) => {
  const [roomId, setRoomId] = useState('');

  const joinRoom = () => {
    if (roomId.trim() === '') return;
    onRoomJoined(roomId);
  };

  return (
    <div>
      <input 
        type="text" 
        value={roomId} 
        onChange={(e) => setRoomId(e.target.value)} 
        placeholder="Room ID" 
      />
      <button onClick={joinRoom}>Join Room</button>
    </div>
  );
};

export default JoinRoom;
