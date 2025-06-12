import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BASE_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';

const SkillAdmin = () => {
  const [skills, setSkills] = useState([]);
  const [skillForm, setSkillForm] = useState({ name: '', level: '', category: '' });
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchSkills();
  }, []);

  const fetchSkills = async () => {
    const token = localStorage.getItem('token');
    try {
      const res = await axios.get(`${BASE_URL}/api/skills`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setSkills(res.data);
    } catch (err) {
      console.error('Failed to fetch skills:', err);
    }
  };

  const handleChange = (e) => {
    setSkillForm({ ...skillForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    try {
      if (editId) {
        await axios.put(`${BASE_URL}/api/skills/${editId}`, skillForm, {
          headers: { Authorization: `Bearer ${token}` },
        });
      } else {
        await axios.post(`${BASE_URL}/api/skills`, skillForm, {
          headers: { Authorization: `Bearer ${token}` },
        });
      }
      alert('Skill saved successfully!');
      setSkillForm({ name: '', level: '', category: '' });
      setEditId(null);
      fetchSkills();
    } catch (err) {
      console.error('Failed to save skill:', err);
    }
  };

  const handleEdit = (skill) => {
    setSkillForm({ name: skill.name, level: skill.level, category: skill.category });
    setEditId(skill._id);
  };

  const handleDelete = async (id) => {
    const token = localStorage.getItem('token');
    try {
      await axios.delete(`${BASE_URL}/api/skills/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchSkills();
    } catch (err) {
      console.error('Failed to delete skill:', err);
    }
  };

  return (
    <div className="bg-white text-black p-4 rounded mb-10">
      <h2 className="text-2xl font-semibold mb-4">Skills</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <input
          type="text"
          name="name"
          value={skillForm.name}
          onChange={handleChange}
          placeholder="Skill Name"
          className="p-2 border rounded"
          required
        />
        <input
          type="text"
          name="level"
          value={skillForm.level}
          onChange={handleChange}
          placeholder="Skill Level (e.g. Intermediate)"
          className="p-2 border rounded"
          required
        />
        <input
          type="text"
          name="category"
          value={skillForm.category}
          onChange={handleChange}
          placeholder="Skill Category (e.g. Frontend)"
          className="p-2 border rounded"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded md:col-span-2"
        >
          {editId ? 'Update Skill' : 'Add Skill'}
        </button>
      </form>

      <ul className="space-y-2">
        {skills.map((skill) => (
          <li
            key={skill._id}
            className="flex justify-between items-center bg-gray-100 p-2 rounded"
          >
            <span>
              {skill.name} - {skill.level} ({skill.category})
            </span>
            <div className="space-x-2">
              <button
                onClick={() => handleEdit(skill)}
                className="text-yellow-600 hover:underline text-sm"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(skill._id)}
                className="text-red-600 hover:underline text-sm"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillAdmin;
