import React, { useState, useEffect } from 'react';
import Navbar from '../components/chat/Navbar';
import Chat from '../components/chat/Chat';
import { useSelector } from 'react-redux';
import { db } from '../firebase';
import { query, where, getDocs, collection, doc, setDoc, serverTimestamp } from 'firebase/firestore';
import '../style/chat.css'

const ChatPage = () => {
  const user = useSelector(state => state.user);
  const [roomId, setRoomId] = useState(null);

  useEffect(() => {
    const fetchOrCreateRoom = async () => {
      if (!user?.id) return;

      try {
        const q = query(collection(db, 'rooms'), where('name', '==', `Room for ${user.id}`));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          querySnapshot.forEach((doc) => {
            setRoomId(doc.id);
          });
        } else {
          const roomRef = doc(collection(db, 'rooms'), `Room for ${user.id}`);
          await setDoc(roomRef, { name: `Room for ${user.id}`, timestamp: serverTimestamp() });
          setRoomId(roomRef.id);
        }
      } catch (error) {
        console.error('Error fetching or creating room:', error);
      }
    };

    fetchOrCreateRoom();
  }, [user?.id]);

  return (
    <div className="chat-page h-screen flex flex-col justify-center">
      <div>
        <Navbar />
        <section className="chat-container flex-grow flex flex-col">
          {roomId ? (
            <Chat roomId={roomId} />
          ) : (
            <div className="loading-message flex-grow flex items-center justify-center">Loading chat room...</div>
          )}
        </section>
      </div>
    </div>
  );
};

export default ChatPage