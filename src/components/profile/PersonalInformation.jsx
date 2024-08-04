import React, { useState, useEffect } from 'react';
import { useGetUserByIDQuery ,useUpdateUserMutation} from "../../redux/api/authApi";
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

export const PersonalInformation = (data) => {
  const { data: user, error, isLoading } = useGetUserByIDQuery(localStorage.getItem('userId') || null);

  const { t, i18n } = useTranslation();
  const [updateUser] = useUpdateUserMutation();
  const [formData, setFormData] = useState({
    firstName: data.firstName,
    lastName: data.lastName,
    birthday: data.birthday,
    gender: data.gender,
    email: data.email
    // firstName: '',
    // lastName: '',
    // birthday: '',
    // gender: '',
    // email: ''
  });

  useEffect(() => {
    i18n.changeLanguage(navigator.language);
}, [i18n]);

  const [errors, setErrors] = useState({});

  const [submissionStatus, setSubmissionStatus] = useState(null);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.firstName) errors.firstName = 'First name is required';
    if (!formData.lastName) errors.lastName = 'Last name is required';
    if (!formData.email) errors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Email is invalid';
    return errors;
  };



  const handleUpdateUser = async () => {
    const sendId = data.id;
    const updatedUser = { name: formData.firstName, lastName:formData.lastName,  email: formData.email,  };
    try {
      const response = await updateUser({ sendId, updatedUser }).unwrap();
      console.log('User updated:', response);
    } catch (error) {
      console.error('Failed to update user:', error);
    }
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmissionStatus(false); 
    } else {

      setErrors({});
      setSubmissionStatus(true); 
    }
  };
  return (
    <div className="w-full md:w-3/4 p-4">
      <h2 className="text-xl font-semibold mb-4 dark:text-cream">{t('personalInformation')}</h2>
      <form className="space-y-4 dark:text-cream" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700">{t('firstName')} *</label>
            <input
              type="text"
              name="firstName"
              value={user?.firstName}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded p-2 dark:bg-background-blue"
            />
            {errors.firstName && <p className="text-red-500">{errors.firstName}</p>}
          </div>
          <div>
            <label className="block text-gray-700">{t('lastName')} *</label>
            <input
              type="text"
              name="lastName"
              value={user?.lastName}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded p-2 dark:bg-background-blue"
            />
            {errors.lastName && <p className="text-red-500">{errors.lastName}</p>}
          </div>
        </div>
        <div>
          <label className="block text-gray-700">{t('birthday')}</label>
          <input
            type="text"
            name="birthday"
            value={formData.birthday}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded p-2 dark:bg-background-blue"
          />
        </div>
        <div>
          <label className="block text-gray-700">{t('gender')}</label>
          <div className="mt-1 flex items-center space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={formData.gender === 'Male'}
                onChange={handleChange}
                className="form-radio"
              />
              <span className="ml-2">Male</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={formData.gender === 'Female'}
                onChange={handleChange}
                className="form-radio"
              />
              <span className="ml-2">Female</span>
            </label>
          </div>
        </div>
        <div>
          <label className="block text-gray-700">Email *</label>
          <input
            type="email"
            name="email"
            value={user?.email}
            onChange={handleChange}
            placeholder="name@example.com"
            className="mt-1 block w-full border border-gray-300 rounded p-2 dark:bg-background-blue"
          />
          {errors.email && <p className="text-red-500">{errors.email}</p>}
        </div>
        <div>
          <button type="button" className="mt-4 inline-block text-custom-green underline">
            Change password
          </button>
        </div>
        <div className="mt-4 flex items-center space-x-2">
          <button type="submit" onClick={handleUpdateUser} className="inline-block bg-custom-purple text-white px-4 py-2 rounded">
            Save changes
          </button>
          {submissionStatus === true && <p className="text-custom-green">{t('successful')}</p>}
       
        </div>
      </form>
    </div>
  );
};