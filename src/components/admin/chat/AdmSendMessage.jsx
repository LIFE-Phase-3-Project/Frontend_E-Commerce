import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { db } from '../../../firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
const AdmSendMessage = ({ scroll, roomId }) => {
  const [input, setInput] = useState('');
  const user = useSelector(state => state.user);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (input.trim() === '') {
      alert('Please enter a valid message');
      return;
    }

    try {
      await addDoc(collection(db, `rooms/${roomId}/messages`), {
        text: input,
        name: user?.email,
        uid: user?.id,
        timestamp: serverTimestamp(),
      });
      setInput('');
      if (scroll && scroll.current) {
        scroll.current.scrollIntoView({ behavior: 'smooth' });
      }
      
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again later.');
    }
  };

  return (
    <form onSubmit={sendMessage} className="flex items-center p-4 border-t border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-900">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="flex-grow p-3 rounded-lg border bg-white dark:bg-gray-800 border-gray-400 dark:border-gray-600 shadow-sm"
        type='text'
        placeholder='Type your message here...'
      />
      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg ml-4 hover:bg-blue-700 transition" type='submit'>
        Send
      </button>
    </form>
  );
};

export default AdmSendMessage;
