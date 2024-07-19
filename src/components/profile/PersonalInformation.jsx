export const PersonalInformation =() => {
  
  return(
  <div className="w-full md:w-3/4 p-4">
    <h2 className="text-xl font-semibold mb-4">Personal information</h2>
    <form className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-gray-700">First Name *</label>
          <input type="text"  className="mt-1 block w-full border border-gray-300 rounded p-2" />
        </div>
        <div>
          <label className="block text-gray-700">Last name *</label>
          <input type="text"  className="mt-1 block w-full border border-gray-300 rounded p-2"  />
        </div>
      </div>
      <div>
        <label className="block text-gray-700">Birthday</label>
        <input type="text"  className="mt-1 block w-full border border-gray-300 rounded p-2" />
      </div>
      <div>
        <label className="block text-gray-700">Gender</label>
        <div className="mt-1 flex items-center space-x-4">
          <label className="flex items-center">
            <input type="radio" name="gender" className="form-radio" />
            <span className="ml-2">Male</span>
          </label>
          <label className="flex items-center">
            <input type="radio" name="gender" className="form-radio" />
            <span className="ml-2">Female</span>
          </label>
        </div>
      </div>
      <div>
        <label className="block text-gray-700">Email *</label>
        <input type="email" className="mt-1 block w-full border border-gray-300 rounded p-2" />
      </div>
      <div>
        <button className="mt-4 inline-block text-custom-green underline">Change password</button>
      </div>
      <div>
        <button type="submit" className="mt-4 inline-block bg-custom-purple text-white px-4 py-2 rounded">Save changes</button>
      </div>
    </form>
  </div>
  );
}