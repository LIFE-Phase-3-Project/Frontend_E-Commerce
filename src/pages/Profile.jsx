import React, { useState } from 'react';
import { PersonalInformation } from '../components/profile/PersonalInformation';
import { Address } from '../components/profile/Address';
import { Reviews } from '../components/profile/Reviews';
import { Orders } from '../components/profile/orders/Orders';
import { useGetUserByIDQuery } from "../redux/api/authApi";
import { useParams } from "react-router-dom";

const UserProfile = () => {
  
  const [currentComponent, setCurrentComponent] = useState('PersonalInformation');
  const { id } = useParams()

  const { data, isLoading: loading } = useGetUserByIDQuery(id);
console.log(data);
  const handleNavClick = (component) => {
    setCurrentComponent(component);
  };

  const renderComponent = () => {
    switch (currentComponent) {
      case 'PersonalInformation':
        return <PersonalInformation userId={data} />;
      case 'Address':
        return <Address userId={data} />;
      case 'Reviews':
        return <Reviews userId={data} />;
        case 'Orders':
          return <Orders userId={data} />;
      default:
        return <PersonalInformation userId={data} />;
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

export default UserProfile