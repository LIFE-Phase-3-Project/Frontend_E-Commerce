import { useState } from "react";
import { useGetUserByIDQuery } from "../../redux/api/authApi";
export const Address =(userId) => {

  const { data, error, isLoading } = useGetUserByIDQuery(userId);

  const [formData, setFormData] = useState({
    firstName: data.firstName,
    lastName: data.lastName,
    address: data.address,
    secondAddress: '',
    postalCode: '',
    country:'',
    city:'',
    phoneNumber:''
  });

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
    if (!formData.address) errors.address = 'Address is required';
    if (!formData.postalCode) errors.postalCode = 'Postal code is required';
    if (!formData.country) errors.country = 'Country is required';
    if (!formData.city) errors.city = 'Country is required';
    else if (!formData.phoneNumber.includes("+") || formData.phoneNumber.length < 3) errors.phoneNumber = 'Phone number is invalid';
    return errors;
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

  
    return(
    <div className="w-full md:w-3/4 p-4">
      <h2 className="text-xl font-semibold mb-4 dark:text-cream">Add a new address</h2>
       <form className="space-y-4 dark:text-cream" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
            <label className="block text-gray-700">First Name *</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded p-2 dark:bg-background-blue"
            />
            {errors.firstName && <p className="text-red-500">{errors.firstName}</p>}
          </div>
          <div>
            <label className="block text-gray-700">Last Name *</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded p-2 dark:bg-background-blue"
            />
            {errors.lastName && <p className="text-red-500">{errors.lastName}</p>}
          </div>
        </div>
        <div>
          <label className="block text-gray-700">Address 1 *</label>
          <input type="text" name="address" 
          value={formData.address}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded p-2 dark:bg-background-blue" />
          {errors.address && <p className="text-red-500">{errors.address}</p>}
        </div>
        <div>
        </div>
        <div>
          <label className="block text-gray-700">Address 2 </label>
          <input type="text" name="secondAddress" className="mt-1 block w-full border border-gray-300 rounded p-2 dark:bg-background-blue" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
                <label className="block text-gray-700">Country *</label>
        <select name="country" 
        value={formData.country}
        onChange={handleChange}
        className="mt-1 block w-full border border-gray-300 rounded p-2 bg-white dark:bg-background-blue dark:text-cream" >
           
            <option value="" selected disabled hidden>Choose one</option>
            <option>Kosove</option>
            <option>Shqiperi</option>
            <option>Germany</option>
            <option>Italy</option>
            <option>Spain</option>
        </select>
        {errors.country && <p className="text-red-500">{errors.country}</p>}
        </div>
        <div>
          <label className="block text-gray-700">City *</label>
          <input type="text" name="city" 
          value={formData.city}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded p-2 dark:bg-background-blue" />
          {errors.city && <p className="text-red-500">{errors.city}</p>}
        </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700">Postal code *</label>
            <input type="text" name="postalCode"
            value={formData.postalCode}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded p-2 dark:bg-background-blue" />
            {errors.postalCode && <p className="text-red-500">{errors.postalCode}</p>}
          </div>
          <div>
            <label className="block text-gray-700">Phone number *</label>
            <input type="phone" name="phoneNumber" placeholder="+111 xxx xxx"  
            value={formData.phoneNumber}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded p-2 dark:bg-background-blue"  />
            {errors.phoneNumber && <p className="text-red-500">{errors.phoneNumber}</p>}
          </div>
        </div>
        <div className="mt-4 flex items-center space-x-2">
          <button type="submit" className="inline-block bg-custom-purple text-white px-4 py-2 rounded">
            Save changes
          </button>
          {submissionStatus === true && <p className="text-custom-green">Successfully updated your profile</p>}
       
        </div>
      </form>
    </div>
    );
  }