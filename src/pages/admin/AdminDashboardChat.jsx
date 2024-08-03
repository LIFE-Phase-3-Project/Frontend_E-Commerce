import React, { useState, useEffect } from 'react';
import { db } from '../../firebase';
import { collection, query, onSnapshot } from 'firebase/firestore';
import AdmChat from '../../components/admin/chat/AdmChat';

export const AdminDashboardChat = () => {
  const [rooms, setRooms] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState('');

  useEffect(() => {
    const fetchRooms = async () => {
      const q = query(collection(db, 'rooms'));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        let roomsList = [];
        querySnapshot.forEach((doc) => {
          const roomData = { id: doc.id, ...doc.data() };
          if (!roomsList.some(room => room.id === roomData.id)) {
            roomsList.push(roomData);
          }
        });
        setRooms(roomsList);
      });
      return () => unsubscribe();
    };
    fetchRooms();
  }, []);

  return (
    <div className="h-screen flex flex-col px-4">
      <div className="flex flex-col lg:flex-row gap-6 h-full">
        <div className="lg:w-1/3 bg-white dark:bg-admin-sidebar-color shadow-lg rounded-lg p-4 lg:p-6 my-5 lg:my-6 flex-shrink-0">
          <h2 className="text-xl lg:text-2xl font-bold mb-4 text-blue-700 dark:text-white">Select a Room</h2>
          <ul className="space-y-4">
            {rooms.map((room) => (
              <li key={room.id} className="flex justify-between items-center p-3 bg-gray-200 dark:bg-gray-500 rounded-lg shadow-sm hover:bg-gray-300 transition">
                <span className="text-black dark:text-gray-200 text-sm lg:text-lg font-medium">{`Room name || ${room.id}`}</span>
                <button 
                  className="bg-blue-600 text-white px-3 lg:px-4 py-1 lg:py-2 rounded-lg hover:bg-blue-700 transition"
                  onClick={() => setSelectedRoom(room.id)}
                >
                  Join
                </button>
              </li>
            ))}
          </ul>
        </div>
        {selectedRoom && <AdmChat roomId={selectedRoom} />}
      </div>
    </div>
  );
};