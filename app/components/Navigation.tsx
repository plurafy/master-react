import { NavLink } from "react-router";
import type { Nav } from "~/consts/registry";

export const Navigation = ({ navs }: { navs: Nav[] }) => {
  return (
    <nav className="h-screen w-56 shrink-0 overflow-y-auto bg-gray-200 p-4 md:w-64">
      <h2 className="text-lg font-bold mb-4">Navigation</h2>
      <ul className="list-none">
        {navs.map((nav) => (
          <li key={nav.id} className="mb-2">
            <NavLink
              to={nav.path}
              end={nav.path === "/"}
              className={({ isActive }) =>
                `block rounded px-3 py-2 ${
                  isActive
                    ? "bg-gray-900 text-white"
                    : "text-gray-700 hover:bg-gray-300 hover:text-gray-900"
                }`
              }
            >
              {nav.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
