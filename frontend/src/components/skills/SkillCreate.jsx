import { useContext, useEffect } from "react";
import SkillContext from "../../Context/SkillContext";

const SkillCreate = () => {
  const { formValues, handleChange, storeSkill, errors, setErrors } = useContext(SkillContext);

  useEffect(() => {
    setErrors({});
  }, []);
  return (
    <div className='mt-12'>
      <form onSubmit={storeSkill} className='max-w-md mx-auto p-4 bg-white shadow-md rounded-md'>
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
            {errors.name && <span className='text-sm text-red-400'>{errors.name[0]}</span>}
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
            {errors.slug && <span className='text-sm text-red-400'>{errors.slug[0]}</span>}
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
