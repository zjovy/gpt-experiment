import { useState } from 'react';

const SwarmForm = () => {
  const [formData, setFormData] = useState({
    description: '',
    link: '',
    startTime: '',
    endTime: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic
    console.log(formData); // For demonstration, log form data to console
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Start a New Swarm</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700 font-semibold mb-2">Swarm Description</label>
          <input type="text" id="description" name="description" value={formData.description} onChange={handleChange} className="w-full border rounded py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="link" className="block text-gray-700 font-semibold mb-2">Link</label>
          <input type="text" id="link" name="link" value={formData.link} onChange={handleChange} className="w-full border rounded py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="startTime" className="block text-gray-700 font-semibold mb-2">Start Time</label>
          <input type="datetime-local" id="startTime" name="startTime" value={formData.startTime} onChange={handleChange} className="w-full border rounded py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="endTime" className="block text-gray-700 font-semibold mb-2">End Time</label>
          <input type="datetime-local" id="endTime" name="endTime" value={formData.endTime} onChange={handleChange} className="w-full border rounded py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500" />
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
          Create Swarm
        </button>
      </form>
    </div>
  );
};

export default SwarmForm;
