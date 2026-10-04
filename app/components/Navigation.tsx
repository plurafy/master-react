import { NavLink } from "react-router";
import { features } from "~/features/registry";

export const Navigation = () => {
  return (
    <nav className="h-screen w-56 shrink-0 overflow-y-auto bg-gray-200 p-4 md:w-64">
      <h2 className="text-lg font-bold mb-4">Navigation</h2>
      <ul className="list-none">
        {features.map((feature) => (
          <li key={feature.id} className="mb-2">
            <NavLink
              to={feature.path}
              end={feature.path === "/"}
              className={({ isActive }) =>
                `block rounded px-3 py-2 ${
                  isActive
                    ? "bg-gray-900 text-white"
                    : "text-gray-700 hover:bg-gray-300 hover:text-gray-900"
                }`
              }
            >
              {feature.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
