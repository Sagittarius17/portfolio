import { useEffect, useState } from 'react';

const AdminDashboard = () => {
  const [projects, setProjects] = useState([]);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/projects')
      .then(res => res.json())
      .then(data => setProjects(data));

    fetch('http://localhost:5000/api/messages')
      .then(res => res.json())
      .then(data => setMessages(data));
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
      
      <section>
        <h3 className="text-xl font-semibold mb-2">Projects</h3>
        <ul className="space-y-2">
          {projects.map(p => (
            <li key={p._id} className="border p-2 rounded">{p.title}</li>
          ))}
        </ul>
      </section>

      <section className="mt-6">
        <h3 className="text-xl font-semibold mb-2">Messages</h3>
        <ul className="space-y-2">
          {messages.map(m => (
            <li key={m._id} className="border p-2 rounded">
              <strong>{m.name}</strong>: {m.message}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default AdminDashboard;
