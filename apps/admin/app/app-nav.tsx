import { NavLink } from 'react-router';

export function AppNav() {
  return (
    <nav className="flex gap-4 bg-gray-800 p-4 text-white">
      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          isActive ? 'font-bold text-blue-400' : 'hover:text-blue-300'
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        end
        className={({ isActive }) =>
          isActive ? 'font-bold text-blue-400' : 'hover:text-blue-300'
        }
      >
        About
      </NavLink>
    </nav>
  );
}
