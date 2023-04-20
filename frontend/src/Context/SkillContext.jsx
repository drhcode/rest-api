import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
axios.defaults.baseURL = "http://127.0.0.1:8000/api/v1/";

const SkillContext = createContext();

const initialForm = {
  name: "",
  slug: "",
};

export const SkillProvider = ({ children }) => {
  const [formValues, setFormValues] = useState(initialForm);

  const navigate = useNavigate();

  const [skills, setSkills] = useState([]);
  const [skill, setSkill] = useState([]);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  // Store skill
  const storeSkill = async (e) => {
    e.preventDefault();
    try {
      await axios.post("skills", formValues);
      setFormValues(initialForm);
      navigate("/skills");
    } catch (error) {
      if (error.response.status === 422) {
        setErrors(error.response.data.errors);
      }
    }
  };

  // get all skills
  const getSkills = async () => {
    const response = await axios.get("skills");
    setSkills(response.data.data);
  };

  // get single skill
  const getSkill = async (id) => {
    const response = await axios.get("skills/" + id);
    const apiSkill = response.data.data;
    setSkill(apiSkill);
    setFormValues({
      name: apiSkill.name,
      slug: apiSkill.slug,
    });
  };

  // update Skill
  const updateSkill = async (e) => {
    e.preventDefault();
    try {
      await axios.put("skills/" + skill.id, formValues);
      getSkills();
      setFormValues(initialForm);
      navigate("/skills");
    } catch (error) {
      if (error.response.status === 422) {
        setErrors(error.response.data.errors);
      }
    }
  };

  // delete skill
  const deleteSkill = async (id) => {
    await axios.delete("skills/" + id);
    getSkills();
  };

  return (
    <SkillContext.Provider
      value={{
        skill,
        skills,
        getSkill,
        getSkills,
        handleChange,
        formValues,
        storeSkill,
        errors,
        setErrors,
        updateSkill,
        deleteSkill,
      }}
    >
      {children}
    </SkillContext.Provider>
  );
};

export default SkillContext;
