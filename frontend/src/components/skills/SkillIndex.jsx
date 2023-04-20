import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import SkillContext from "../../Context/SkillContext";

const SkillIndex = () => {
  const { skills, getSkills, deleteSkill } = useContext(SkillContext);

  useEffect(() => {
    getSkills();
  }, []);

  return (
    <div className='mt-12'>
      <div className='flex justify-end m-2 p-2'>
        <Link
          to='/skills/create'
          className='bg-green-500 rounded-md px-4 py-2 hover:bg-green-700 hover:text-white'
        >
          Create Skill
        </Link>
      </div>
      <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
        <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
          <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
            <tr>
              <th scope='col' className='px-6 py-3'>
                ID
              </th>
              <th scope='col' className='px-6 py-3'>
                Skill Name
              </th>
              <th scope='col' className='px-6 py-3'>
                Slug
              </th>
              <th scope='col' className='px-6 py-3'>
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {skills.map((skill, index) => {
              return (
                <tr className='bg-white border-b dark:bg-gray-900 dark:border-gray-700' key={index}>
                  <td
                    scope='row'
                    className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'
                  >
                    {skill.id}
                  </td>
                  <td className='px-6 py-4'>{skill.name}</td>
                  <td className='px-6 py-4'>{skill.slug}</td>

                  <td className='px-6 py-4 space-x-2'>
                    <Link
                      to={`/skills/${skill.id}/edit`}
                      className='bg-green-500 text-black rounded-md px-4 py-2 hover:bg-green-700 hover:text-white'
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => deleteSkill(skill.id)}
                      className='bg-red-500 text-black rounded-md px-4 py-2 hover:bg-red-700 hover:text-white'
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SkillIndex;
