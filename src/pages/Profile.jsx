import React from 'react';
import { PersonalInformation } from '../components/profile/PersonalInformation';
import { Address } from '../components/profile/Address';
import { Reviews } from '../components/profile/Reviews';

export const UserProfile = () => {
  return (
    <div className="flex flex-col md:flex-row p-4 mt-20 mb-11">
      <div className="w-full md:w-1/4 bg-gray-100 p-4">
        <h2 className="text-lg font-semibold mb-4">Hi ...</h2>
     
        <nav className="space-y-2">
          <a href="#" className="block text-custom-purple">Personal information</a>
          <a href="#" className="block text-gray-700">Address</a>
          <a href="#" className="block text-gray-700">Wishlist</a>
          <a href="#" className="block text-gray-700">Orders</a>
          <a href="#" className="block text-gray-700">Reviews</a>
        </nav>
      </div>
  {/* <Reviews userId={1}/> */}
  {/* <Address/> */}
  <PersonalInformation/>
    </div>
  );
};


