import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminAbout from './adminAbout';

const BASE_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';

const AdminDashboard = () => {
    const [projects, setProjects] = useState([]);
    const [messages, setMessages] = useState([]);
    const [form, setForm] = useState({ title: '', description: '', imageUrl: '', githubLink: '', demoLink: '', });
    const [editId, setEditId] = useState(null);

    // Fetch all projects and messages
    useEffect(() => {
        fetchProjects();
        fetchMessages();
    }, []);


    const fetchProjects = async () => {
        const res = await axios.get(`${BASE_URL}/api/projects`);
        setProjects(res.data);
    };

    const fetchMessages = async () => {
        const res = await axios.get(`${BASE_URL}/api/messages`);
        setMessages(res.data);
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (editId) {
            await axios.put(`${BASE_URL}/api/projects/${editId}`, form);
        } else {
            await axios.post(`${BASE_URL}/api/projects`, form);
        }

        setForm({ title: '', description: '', imageUrl: '', githubLink: '', demoLink: '' });
        setEditId(null);
        fetchProjects();
    };

    const handleEdit = (project) => {
        setForm({
            title: project.title,
            description: project.description,
            imageUrl: project.imageUrl,
            githubLink: project.githubLink,
            demoLink: project.demoLink,
        });
        setEditId(project._id);
    };

    const handleDelete = async (id) => {
        await axios.delete(`${BASE_URL}/api/projects/${id}`);
        fetchProjects();
    };

    const handleDeleteMessage = async (id) => {
        await axios.delete(`${BASE_URL}/api/messages/${id}`);
        fetchMessages();
    };

    return (
        <div className="p-6 max-w-6xl mx-auto">
            <h1 className="text-white text-3xl font-bold mb-6">Admin Dashboard</h1>

            {/* Project Form */}
            <div className="bg-white text-black shadow p-6 rounded mb-10">
                <h2 className="text-2xl font-semibold mb-4">{editId ? 'Edit Project' : 'Add New Project'}</h2>
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input type="text" name="title" value={form.title} onChange={handleChange} placeholder="Title" required className="p-2 border rounded" />
                    <input type="text" name="imageUrl" value={form.imageUrl} onChange={handleChange} placeholder="Image URL" required className="p-2 border rounded" />
                    <input type="text" name="githubLink" value={form.githubLink} onChange={handleChange} placeholder="GitHub Link" className="p-2 border rounded" />
                    <input type="text" name="demoLink" value={form.demoLink} onChange={handleChange} placeholder="Demo Link" className="p-2 border rounded" />
                    <textarea name="description" value={form.description} onChange={handleChange} placeholder="Description" required className="p-2 border rounded md:col-span-2" />
                    <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded md:col-span-2">
                        {editId ? 'Update Project' : 'Add Project'}
                    </button>
                </form>
            </div>

            {/* About Section */}
            < AdminAbout />

            {/* Projects List */}
            <div className="mb-10 bg-white p-4 rounded">
                <h2 className="text-2xl font-semibold mb-4">Your Projects</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <div key={project._id} className="bg-gray-100 text-black shadow p-2 rounded">
                            <img src={project.imageUrl} alt={project.title} className="w-full h-40 object-cover rounded mb-3" />
                            <h3 className="text-lg font-semibold">{project.title}</h3>
                            <p className="text-sm mb-2">{project.description}</p>
                            <div className="flex gap-3 text-sm text-blue-600 mb-3">
                                {project.githubLink && <a href={project.githubLink} target="_blank">GitHub</a>}
                                {project.demoLink && <a href={project.demoLink} target="_blank">Demo</a>}
                            </div>
                            <div className="flex justify-between text-sm">
                                <button onClick={() => handleEdit(project)} className="text-yellow-600 hover:underline">Edit</button>
                                <button onClick={() => handleDelete(project._id)} className="text-red-600 hover:underline">Delete</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Contact Messages */}
            <div className='bg-white p-4 rounded'>
                <h2 className="text-2xl font-semibold mb-4">Contact Messages</h2>
                <div className="space-y-4">
                    {messages.map((msg) => (
                        <div key={msg._id} className="bg-gray-100 text-black p-4 shadow rounded">
                            <p><strong>Name:</strong> {msg.name}</p>
                            <p><strong>Email:</strong> {msg.email}</p>
                            <p className="mt-2 text-gray-700"><strong>Message:</strong> {msg.message}</p>
                            <p className="mt-2 text-gray-700">
                                <strong>Message Received:</strong>{' '}
                                {new Date(msg.receivedAt).toLocaleString('en-US', {
                                    dateStyle: 'medium',
                                    timeStyle: 'short',
                                })}
                            </p>
                            <button onClick={() => handleDeleteMessage(msg._id)} className="mt-2 text-red-600 hover:underline text-sm">Delete</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
