import { NavLink } from "react-router-dom";

const navItems = [
	{ label: "Home", to: "/" },
	{ label: "Create Recipe", to: "/create-recipe" },
	{ label: "About", to: "/about" },
	{ label: "Contact", to: "/contact" },
];

function Navbar() {
	return (
		<nav className="border-b my-2 rounded-xl border-gray-200 bg-white shadow-sm">
			<div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
				<NavLink to="/" className="text-2xl font-bold text-orange-600">
					Recipe App
				</NavLink>

				<div className="flex items-center gap-2 sm:gap-6">
					{navItems.map(({ label, to }) => (
						<NavLink
							key={to}
							to={to}
							className={({ isActive }) =>
								`rounded-md px-2 py-2 text-sm font-medium transition-colors sm:px-3 ${
									isActive
										? "bg-orange-100 text-orange-700"
										: "text-gray-600 hover:bg-gray-100 hover:text-orange-600"
								}`
							}
						>
							{label}
						</NavLink>
					))}
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
