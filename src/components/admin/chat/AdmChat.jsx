import React, { useState, useEffect, useRef } from 'react';
import AdmMessage from './AdmMessage';
import AdmSendMessage from './AdmSendMessage';
import { db } from '../../../firebase';
import { query, collection, orderBy, onSnapshot } from 'firebase/firestore';
const AdmChat = ({ roomId }) => {
  const [messages, setMessages] = useState([]);
  const endOfMessagesRef = useRef(null);

  useEffect(() => {
    if (!roomId) return;
    const q = query(
      collection(db, `rooms/${roomId}/messages`),
      orderBy('timestamp')
    );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const messages = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
      setMessages(messages);
    });
    return () => unsubscribe();
  }, [roomId]);

  useEffect(() => {
    if (endOfMessagesRef.current) {
      endOfMessagesRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <div className="flex-1 flex flex-col h-full p-4 lg:p-6">
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg flex flex-col h-full">
        <div className="flex-grow overflow-y-auto p-2 lg:p-4 border-t border-gray-300 dark:border-gray-700">
          {messages.map((message) => (
            <AdmMessage key={message.id} message={message} />
          ))}
          <div ref={endOfMessagesRef} />
        </div>
        <AdmSendMessage scroll={endOfMessagesRef} roomId={roomId} />
      </div>
    </div>
  );
};

export default AdmChat;
