import React, { useState } from 'react';
import { PersonalInformation } from '../components/profile/PersonalInformation';
import { Address } from '../components/profile/Address';
import { Reviews } from '../components/profile/Reviews';

export const UserProfile = () => {
  
  const [currentComponent, setCurrentComponent] = useState('Reviews');

  const handleNavClick = (component) => {
    setCurrentComponent(component);
  };

  const renderComponent = () => {
    switch (currentComponent) {
      case 'PersonalInformation':
        return <PersonalInformation userId={1} />;
      case 'Address':
        return <Address userId={1} />;
      case 'Reviews':
        return <Reviews userId={1} />;
      default:
        return <PersonalInformation userId={1} />;
    }
  };

  return (
    <div className="flex flex-col md:flex-row p-4 mt-20 mb-20 dark:bg-background-blue">
      <div className="w-full md:w-1/4 bg-gray-100 p-4 dark:bg-background-blue dark:text-cream">
        <h2 className="text-lg font-semibold mb-4">Hi ...</h2>
     
        <nav className="space-y-2 dark:bg-background-blue">
          <a href="#" onClick={() => handleNavClick('PersonalInformation')} className="block text-gray-700">Personal information</a>
          <a href="#" onClick={() => handleNavClick('Address')} className="block text-gray-700">Address</a>
          <a href="#" onClick={() => handleNavClick('Orders')} className="block text-gray-700">Orders</a>
          <a href="#" onClick={() => handleNavClick('Reviews')} className="block text-gray-700">Reviews</a>
        </nav>
      </div>
      <div className="w-full md:w-3/4">
        {renderComponent()}
      </div>
    </div>
  );
};

