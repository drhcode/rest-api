import { useState } from "react";

const SkillCreate = () => {
  return (
    <div className='mt-12'>
      <form className='max-w-md mx-auto p-4 bg-white shadow-md rounded-md'>
        <div className='space-y-6'>
          <div className='mb-4'>
            <label htmlFor='name' className='block mb-2 text-sm font-medium'>
              Name
            </label>
            <input
              name='name'
              value={formValues["name"]}
              onChange={handleChange}
              className='border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2'
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='slug' className='block mb-2 text-sm font-medium'>
              Slug
            </label>
            <input
              name='slug'
              value={formValues["slug"]}
              onChange={handleChange}
              className='border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2'
            />
          </div>
        </div>
        <div className='my-4'>
          <button className='bg-green-500 rounded-md px-4 py-2 hover:bg-green-700 hover:text-white'>
            Store
          </button>
        </div>
      </form>
    </div>
  );
};

export default SkillCreate;
