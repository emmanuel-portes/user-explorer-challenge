import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
            <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
                <div className="text-xl font-semibold text-gray-800">
                    <Link to="/" className="flex items-center gap-2 group">
                        <img src="../../public/search.svg" alt="Logo" className="w-8 h-8 object-contain"/>
                        <span className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                            Explorer App
                        </span>
                    </Link>
                </div>
                <div className="flex items-center gap-6">
                    <Link to="/" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
                        Home
                    </Link>

                    <Link to="/save" className="px-4 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors shadow-sm">
                        Insert
                    </Link>
                </div>
            </div>
        </nav>
    );
}