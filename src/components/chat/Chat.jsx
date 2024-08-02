import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import Message from './Message';
import SendMessage from './SendMessage';
import { db } from '../../firebase';
import { query, collection, orderBy, onSnapshot } from 'firebase/firestore';

const Chat = ({ roomId }) => {
  const [messages, setMessages] = useState([]);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (!roomId) return;

    const q = query(collection(db, `rooms/${roomId}/messages`), orderBy('timestamp'));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const messages = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setMessages(messages);
    });

    return () => unsubscribe();
  }, [roomId]);

  useLayoutEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <div style={{height: "550px"}} className="user-chat flex flex-col max-w-3xl w-full mx-auto bg-white dark:bg-admin-blue-color shadow-lg rounded-lg p-4 border border-gray-300">
      <div className="bg-white dark:bg-admin-blue-color shadow-lg rounded-lg flex flex-col h-full">
        <main className="user-chat-messages flex-grow overflow-y-auto mb-4 p-2 bg-gray-100 dark:bg-admin-sidebar-color rounded-lg">
          {messages.length ? (
            <>
              {messages.map((message) => (
                <Message key={message.id} message={message} />
              ))}
              {/* <div ref={scrollRef} /> */}
            </>
          ) : (
            <p className="text-center text-gray-500">No messages yet...</p>
          )}
        </main>
        <SendMessage scroll={scrollRef} roomId={roomId} />
      </div>
    </div>
  );
};

export default Chat;
