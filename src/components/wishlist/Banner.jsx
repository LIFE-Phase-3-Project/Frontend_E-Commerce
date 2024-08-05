import React, { useEffect, useState } from 'react';

export const Banner = () => {
  const words = ["Prices may vary later!", "Sustainable material only!", "Stock is low for some of the products"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 100; 

  useEffect(() => {
    let timer;
    const type = () => {
      const fullText = words[currentWordIndex];

      if (isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length - 1));
      } else {
        setCurrentText(fullText.substring(0, currentText.length + 1));
      }

      if (!isDeleting && currentText === fullText) {
        setIsDeleting(true);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentWordIndex((currentWordIndex + 1) % words.length);
      }

      timer = setTimeout(type, typingSpeed);
    };

    timer = setTimeout(type, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, currentWordIndex, isDeleting, words]);

  const bannerStyle = {
    minHeight: '200px', 
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <div style={bannerStyle} className="underline">
      <h1 className="text-4xl font-bold">{currentText}</h1>
    </div>
  );
};





