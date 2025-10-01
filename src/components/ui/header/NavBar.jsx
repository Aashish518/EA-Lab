import { useState } from "react";
import { Menu, X } from "lucide-react";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
        { name: "Home", href: "/" },
        { name: "Test Menu", href: "/test-menu" },
        { name: "What we offer", href: "#" },
        { name: "Recognition", href: "#" },
        { name: "Our Blogs", href: "#" },
    ];

    // Get current path
    const currentPath = typeof window !== "undefined" ? window.location.pathname : "";

    return (
        <nav className="relative">
            {/* Desktop Menu */}
            <div className="hidden sm:flex items-center justify-center text-sm font-medium text-gray-600 space-x-8 py-2">
                {menuItems.map((item, i) => (
                    <a
                        key={i}
                        href={item.href}
                        className={`transition ${currentPath === item.href
                                ? "text-teal-500 font-bold"
                                : "hover:text-teal-500"
                            }`}
                    >
                        {item.name}
                    </a>
                ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="sm:hidden flex justify-end py-2">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-gray-700 focus:outline-none"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="fixed top-12 left-0 w-full bg-white shadow-md py-4 z-50">
                    <div className="flex flex-col items-center space-y-4 text-gray-700">
                        {menuItems.map((item, i) => (
                            <a
                                key={i}
                                href={item.href}
                                className={`transition ${currentPath === item.href
                                        ? "text-teal-500 font-bold"
                                        : "hover:text-teal-500"
                                    }`}
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default NavBar;
