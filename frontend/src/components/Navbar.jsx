import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-gray-900 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">My Portfolio</h1>
        <div className="space-x-4">
          <Link to="/" className="hover:text-teal-400">Home</Link>
          <Link to="/about" className="hover:text-teal-400">About</Link>
          <Link to="/projects" className="hover:text-teal-400">Projects</Link>
          <Link to="/contact" className="hover:text-teal-400">Contact</Link>
          <Link to="/admin" className="hover:text-teal-400">Admin</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
