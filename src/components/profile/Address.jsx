export const Address =() => {
  
    return(
    <div className="w-full md:w-3/4 p-4">
      <h2 className="text-xl font-semibold mb-4">Add a new address</h2>
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
          <label className="block text-gray-700">Address 1 *</label>
          <input type="text"  className="mt-1 block w-full border border-gray-300 rounded p-2" />
        </div>
        <div>
        </div>
        <div>
          <label className="block text-gray-700">Address 2 *</label>
          <input type="text" className="mt-1 block w-full border border-gray-300 rounded p-2" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
                <label className="block text-gray-700">Country *</label>
        <select name="Country" className="mt-1 block w-full border border-gray-300 rounded p-2 bg-white" >
            <option value="" selected disabled hidden>Choose one</option>
            <option>Kosove</option>
            <option>Shqiperi</option>
            <option>Germany</option>
            <option>Italy</option>
            <option>Spain</option>
        </select>
        </div>
        <div>
          <label className="block text-gray-700">City *</label>
          <input type="text"  className="mt-1 block w-full border border-gray-300 rounded p-2" />
        </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700">Postal code *</label>
            <input type="text"  className="mt-1 block w-full border border-gray-300 rounded p-2" />
          </div>
          <div>
            <label className="block text-gray-700">Phone number *</label>
            <input type="phone"  className="mt-1 block w-full border border-gray-300 rounded p-2"  />
          </div>
        </div>
        <div>
          <button type="submit" className="mt-4 inline-block bg-custom-purple text-white px-4 py-2 rounded">Save changes</button>
        </div>
      </form>
    </div>
    );
  }