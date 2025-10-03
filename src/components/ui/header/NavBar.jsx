import { useState } from "react";
import { Menu, X } from "lucide-react";
import SocialIcons from "./SocialIcons "; // Make sure the path is correct

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
        { name: "Home", href: "/" },
        { name: "Test Menu", href: "/test-menu" },
        { name: "Contact Us", href: "/contactus" },
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
            {/* Mobile Menu */}
            <div
                className={`fixed top-0 left-0 w-full h-full bg-white shadow-md z-50 transform transition-all duration-700 ease-out ${isOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
                    }`}
            >
                {/* Close Button: Floating top-right */}
                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-6 left-6 text-gray-700 focus:outline-none z-50"
                >
                    <X size={28} />
                </button>

                <div className="flex flex-col items-center justify-between h-full text-gray-700 pt-16">
                    {/* Navigation Links */}
                    <div className="flex flex-col items-center space-y-6">
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

                    {/* Social Icons */}
                    <div className="pb-6">
                        <SocialIcons />
                    </div>
                </div>
            </div>

        </nav>
    );
};

export default NavBar;
