import { createContext, useState } from "react";
import axios from "axios";
axios.defaults.baseURL = "http://127.0.0.1:8000/api/v1/";

const SkillContext = createContext();
const [formValues, setFormValues] = useState({
  name: "",
  slug: "",
});

const [skills, setSkills] = useState([]);
const [skill, setSkill] = useState([]);

const handleChange = (e) => {
  e.preventDefault();
  const { name, value } = e.target;
  setFormValues({ ...formValues, [name]: value });
};

// get all skills
const getSkills = async () => {
  const response = await axios.get("skills");
  setSkills(response.data.data);
};

// get single skill
const getSkill = async (id) => {
  const response = await axios.get("skills/" + id);
  setSkill(response.data.data);
};

export const SkillProvider = ({ children }) => {
  return (
    <SkillContext.Provider value={{ skill, skills, getSkill, getSkills, handleChange, formValues }}>
      {children}
    </SkillContext.Provider>
  );
};

export default SkillContext;
