import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BASE_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';

function AdminAbout() {
    const [editAbout, setEditAbout] = useState(null);
    const [aboutForm, setAboutForm] = useState({
        name: '',
        age: '',
        address: '',
        summary: '',
        education: [{ degree: '', institution: '', startYear: '', endYear: '' }],
        experience: [{ position: '', company: '', startYear: '', endYear: '' }],
        languages: [],
        hobbies: [],
    });

    useEffect(() => {
        fetchAbout();
    }, []);

    const fetchAbout = async () => {
        const token = localStorage.getItem('token');
        try {
            const res = await axios.get(`${BASE_URL}/api/about`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            setAboutForm({
                ...res.data,
                languages: Array.isArray(res.data.languages)
                    ? res.data.languages
                    : (res.data.languages || '').split(',').map((l) => l.trim()),
                hobbies: Array.isArray(res.data.hobbies)
                    ? res.data.hobbies
                    : (res.data.hobbies || '').split(',').map((h) => h.trim()),
            });
        } catch (err) {
            console.error('Failed to fetch about data:', err);
        }
    };

    const handleAboutChange = (e) => {
        setAboutForm({ ...aboutForm, [e.target.name]: e.target.value });
    };

    const handleAboutSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');

        try {
            if (editAbout) {
                await axios.put(`${BASE_URL}/api/about/${editAbout}`, aboutForm, {
                    headers: { Authorization: `Bearer ${token}` },
                });
            } else {
                await axios.post(`${BASE_URL}/api/about`, aboutForm, {
                    headers: { Authorization: `Bearer ${token}` },
                });
            }
            alert('About info saved successfully!');
            setEditAbout(null);
            fetchAbout();
        } catch (err) {
            console.error('Failed to save about data:', err);
        }
    };

    const handleArrayChange = (section, index, field, value) => {
        const updated = aboutForm[section].map((item, idx) =>
            idx === index ? { ...item, [field]: value } : item
        );
        setAboutForm({ ...aboutForm, [section]: updated });
    };

    const addEntry = (field, emptyEntry) => {
        setAboutForm((prev) => ({
            ...prev,
            [field]: [...(prev[field] || []), emptyEntry],
        }));
    };

    const removeEntry = (field, index) => {
        setAboutForm((prev) => ({
            ...prev,
            [field]: prev[field].filter((_, i) => i !== index),
        }));
    };

    return (
        <div className="bg-white p-4 rounded text-black mb-10">
            <h2 className="text-2xl font-semibold mb-4">About Me</h2>
            <form onSubmit={handleAboutSubmit} className="space-y-4">
                <input
                    type="text"
                    name="name"
                    value={aboutForm.name}
                    onChange={handleAboutChange}
                    placeholder="Name"
                    className="p-2 border w-full rounded"
                />
                <input
                    type="number"
                    name="age"
                    value={aboutForm.age || ''}
                    onChange={handleAboutChange}
                    placeholder="Age"
                    className="p-2 border w-full rounded"
                />
                <input
                    type="text"
                    name="address"
                    value={aboutForm.address}
                    onChange={handleAboutChange}
                    placeholder="Address"
                    className="p-2 border w-full rounded"
                />
                <textarea
                    name="summary"
                    value={aboutForm.summary}
                    onChange={handleAboutChange}
                    placeholder="Summary"
                    className="p-2 border w-full rounded"
                />

                {/* Education Section */}
                <div>
                    <h4 className="font-semibold mt-4">Education</h4>
                    {aboutForm.education.map((edu, idx) => (
                        <div key={idx} className="space-y-2">
                            <input required
                                type="text"
                                value={edu.institution}
                                onChange={(e) =>
                                    handleArrayChange('education', idx, 'institution', e.target.value)
                                }
                                placeholder="Institution"
                                className="p-2 border rounded w-full"
                            />
                            <input required
                                type="text"
                                value={edu.degree}
                                onChange={(e) =>
                                    handleArrayChange('education', idx, 'degree', e.target.value)
                                }
                                placeholder="Degree"
                                className="p-2 border rounded w-full"
                            />
                            <input required
                                type="month"
                                value={edu.startYear || ''}
                                onChange={(e) =>
                                    handleArrayChange('education', idx, 'startYear', e.target.value)
                                }
                                placeholder="Start Year"
                                className="p-2 border rounded w-full"
                            />
                            <input required
                                type="month"
                                value={edu.endYear || ''}
                                onChange={(e) =>
                                    handleArrayChange('education', idx, 'endYear', e.target.value)
                                }
                                placeholder="End Year"
                                className="p-2 border rounded w-full"
                            />
                            <button
                                type="button"
                                className="bg-red-400 hover:bg-red-500 text-white px-4 py-2 mb-2 rounded"
                                onClick={() => removeEntry('education', idx)}
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                    <button
                        type="button"
                        onClick={() =>
                            addEntry('education', {
                                institution: '',
                                degree: '',
                                startYear: '',
                                endYear: '',
                            })
                        }
                        className="bg-blue-400 hover:bg-blue-500 text-white px-4 py-2 rounded"
                    >
                        Add Education
                    </button>
                </div>

                {/* Experience Section */}
                <div>
                    <h4 className="font-semibold mt-4">Experience</h4>
                    {aboutForm.experience.map((exp, idx) => (
                        <div key={idx} className="space-y-2">
                            <input required
                                type="text"
                                value={exp.company}
                                onChange={(e) =>
                                    handleArrayChange('experience', idx, 'company', e.target.value)
                                }
                                placeholder="Company"
                                className="p-2 border rounded w-full"
                            />
                            <input required
                                type="text"
                                value={exp.position}
                                onChange={(e) =>
                                    handleArrayChange('experience', idx, 'position', e.target.value)
                                }
                                placeholder="Position"
                                className="p-2 border rounded w-full"
                            />
                            <input required
                                type="month"
                                value={exp.startYear || ''}
                                onChange={(e) =>
                                    handleArrayChange('experience', idx, 'startYear', e.target.value)
                                }
                                placeholder="Start Year"
                                className="p-2 border rounded w-full"
                            />
                            <input required
                                type="month"
                                value={exp.endYear || ''}
                                onChange={(e) =>
                                    handleArrayChange('experience', idx, 'endYear', e.target.value)
                                }
                                placeholder="End Year"
                                className="p-2 border rounded w-full"
                            />
                            <button
                                type="button"
                                className="bg-red-400 hover:bg-red-500 text-white px-4 py-2 mb-2 rounded"
                                onClick={() => removeEntry('experience', idx)}
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                    <button
                        type="button"
                        onClick={() =>
                            addEntry('experience', {
                                company: '',
                                position: '',
                                startYear: '',
                                endYear: '',
                            })
                        }
                        className="bg-blue-400 hover:bg-blue-500 text-white px-4 py-2 rounded"
                    >
                        Add Experience
                    </button>
                </div>

                {/* Languages */}
                <div>
                    <h4 className="font-semibold mt-4">Language</h4>
                    <input
                        type="text"
                        name="languages"
                        value={Array.isArray(aboutForm.languages) ? aboutForm.languages.join(', ') : typeof aboutForm.languages === 'string' ? aboutForm.languages : ''}
                        onChange={(e) => setAboutForm({ ...aboutForm, languages: e.target.value.split(',').map((lang) => lang.trim()).filter((lang) => lang.length > 0), })}
                        placeholder="Languages (comma-separated)"
                        className="p-2 border w-full rounded"
                    />
                </div>

                {/* Hobbies */}
                <div>
                    <h4 className="font-semibold mt-4">Hobbies</h4>
                    <input
                        type="text"
                        name="hobbies"
                        value={Array.isArray(aboutForm.hobbies) ? aboutForm.hobbies.join(', ') : typeof aboutForm.hobbies === 'string' ? aboutForm.hobbies : ''}
                        onChange={(e) => setAboutForm({ ...aboutForm, hobbies: e.target.value.split(',').map((hobbies) => hobbies.trim()).filter((hobbies) => hobbies.length > 0), })}
                        placeholder="Hobbies (comma-separated)"
                        className="p-2 border w-full rounded"
                    />
                </div>

                <button type="submit" className="bg-blue-400 hover:bg-blue-500 text-white w-full px-4 py-2 rounded">
                    Save About Info
                </button>
            </form>
        </div>
    );
}

export default AdminAbout;
