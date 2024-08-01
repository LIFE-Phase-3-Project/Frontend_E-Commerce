import React, { useState } from 'react';
import { db } from '../../firebase';
import { addDoc, collection } from 'firebase/firestore';

const AdmCreateRoom = ({ onRoomCreated }) => {
  const [roomName, setRoomName] = useState('');

  const createRoom = async () => {
    if (roomName.trim() === '') return;
    try {
      const roomRef = await addDoc(collection(db, 'rooms'), { name: roomName });
      onRoomCreated(roomRef.id);
      setRoomName('');
    } catch (error) {
      console.error('Error creating room:', error);
    }
  };

  return (
    <div className="flex items-center space-x-4">
      <input 
        type="text" 
        value={roomName} 
        onChange={(e) => setRoomName(e.target.value)} 
        className="flex-grow p-3 rounded-lg border border-gray-300 shadow-sm"
        placeholder="Room Name" 
      />
      <button 
        onClick={createRoom} 
        className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
      >
        Create Room
      </button>
    </div>
  );
};

export default AdmCreateRoom;
