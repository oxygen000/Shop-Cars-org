import { Link } from 'react-router';
export function AppNav() {
  return (
    <nav className="flex flex-row justify-between items-center bg-gray-800 p-4 text-white">
      <div className="logo flex flex-row gap-6">
        <h1 className="text-2xl font-bold text-blue-400">
          <Link to="/">Cars</Link>
        </h1>
        <ul className="flex flex-row gap-4 items-center">
          <li>
            <Link to="/" className="hover:text-blue-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/cars" className="hover:text-blue-300">
              Cars
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-300">
              About
            </Link>
          </li>
        </ul>
      </div>
      <div className="auth-buttons">
        <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md">
          Login
        </button>
        <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md ml-2">
          Register
        </button>
      </div>
    </nav>
  );
}
