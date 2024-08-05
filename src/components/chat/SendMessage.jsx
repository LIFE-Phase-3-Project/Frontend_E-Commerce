import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { db } from '../../firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';

const SendMessage = ({ scroll, roomId }) => {
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
      // if (scroll?.current) {
      //   scroll.current.scrollIntoView({ behavior: 'smooth' });
      // }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again later.');
    }
  };

  return (
    <form onSubmit={sendMessage} className="flex mt-4">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="flex-grow p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        type='text'
        placeholder='Type a message...'
      />
      <button className="bg-blue-500 text-white p-2 rounded-r-lg hover:bg-blue-600" type='submit'>
        Send
      </button>
    </form>
  );
};

export default SendMessage;
