
export default function Formpage() {
    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
            <div className="w-full max-w-xl bg-white border border-gray-200 rounded-xl shadow-sm p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6"> Save Users </h2>
                <form className="space-y-5">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1"> Name </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Emmanuel Portes"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1"> Email </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="emmanuel.portes@example.com"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1"> Phone </label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            placeholder="+18090000000"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1"> Company </label>
                        <input
                            type="text"
                            id="company"
                            name="company"
                            placeholder="XYZ SRL"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    <div>
                        <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1"> City </label>
                        <input
                            type="text"
                            id="city"
                            name="city"
                            placeholder="Santo Domingo"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    <div className="pt-2">
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2.5 rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-sm"
                        > Save 
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
}