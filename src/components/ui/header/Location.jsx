import { useState } from "react";
import Icon from "../../Icon";

const Location = () => {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState("Ahmedabad");

    const locations = ["Ahmedabad", "Mumbai", "Delhi", "Bangalore"];

    return (
        <div className="relative">
            <button
                onClick={() => setOpen(!open)}
                className="flex items-center space-x-1 px-2 py-1 rounded transition duration-200 hover:scale-105 hover:shadow-md hover:bg-teal-50 hover:border hover:border-teal-500 hover:rounded-md"
                // className="flex items-center space-x-1 px-2 py-1 rounded transition duration-200 hover:border hover:border-teal-500 hover:bg-white"
            >
                <Icon
                    path="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    className="w-5 h-5 text-teal-500"
                />
                <span className="text-sm font-semibold">{selected}</span>
                <Icon
                    path="M19 9l-7 7-7-7"
                    className={`w-4 h-4 rounded-full bg-blue-900 text-white transform transition-transform ${open ? "rotate-180" : ""}`}
                />
            </button>

            {open && (
                <div className="absolute left-0 mt-1 w-40 bg-white border rounded shadow-md z-10">
                    {locations.map((loc) => (
                        <div
                            key={loc}
                            onClick={() => {
                                setSelected(loc);
                                setOpen(false);
                            }}
                            className="px-3 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                        >
                            {loc}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Location;
