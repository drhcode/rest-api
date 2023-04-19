import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import SkillCreate from "./components/skills/SkillCreate";
import SkillEdit from "./components/skills/SkillEdit";
import SkillIndex from "./components/skills/SkillIndex";
import SkillContext from "./Context/SkillContext";

function App() {
  return (
    <SkillProvider>
      <div className='bg-slate-300'>
        <div className='max-w-7xl mx-auto min-h-screen'>
          <nav>
            <ul className='flex'>
              <li className='m-2 p-2 bg-green-500 hover:bg-green-700 text-black rounded-md'>
                <Link to='/'>Home</Link>
              </li>
              <li className='m-2 p-2 bg-green-500 hover:bg-green-700 text-black rounded-md'>
                <Link to='/skills'>Skills</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/skills' element={<SkillIndex />} />
            <Route path='/skills/create' element={<SkillCreate />} />
            <Route path='/skills/:id/edit' element={<SkillEdit />} />
          </Routes>
        </div>
      </div>
    </SkillProvider>
  );
}

export default App;
